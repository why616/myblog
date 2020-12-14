<template>
  <div class="content" :key="dataIndex">
    <div class="markdown">
       <v-md-preview :text="content"></v-md-preview>
    </div>
  </div>
</template>
<script>
// import "@/assets/css/markdown.less";
export default {
  
  created() {
    
    console.log("cache：",this.$cache);
    if (this.$route.params) {
      this.dataIndex = this.$route.params.id;
      if(this.$cache[this.dataIndex]){
        this.content = this.$cache[this.dataIndex];
        return;
      }
      //axios
      console.log("查询：" + this.dataIndex);
      this.$axios
        .get(`/article/content`, { params: { id: this.dataIndex } })
        .then((res) => {
          console.log(res);
          let { data } = res;
          this.content = data[0].content;
           this.$cache[this.dataIndex] = this.content;
        });
    }
  },
  data() {
    return {
      content: "",
      dataIndex: 0,
    };
  },
  watch: {
    $route(to, from) {
      console.log("loading to:", to.params.id);
      if( this.$cache[to.params.id] ){
        console.log("cache命中");
        this.content = this.$cache[to.params.id];
         
      }else{
        console.log("cache miss");
        this.$axios
        .get(`/article/content`, { params: { id: to.params.id } })
        .then((res) => {
          console.log(res);
          let { data } = res;
          this.content = data[0].content;
          this.$cache[to.params.id] = this.content;
        });
      }
    },
   
  },
   beforeRouteLeave (to,from,next){
      console.log("leave","to:",to.path,"from:",from.path);
    
      next();

    },
   beforeRouteUpdate (to,from,next){
      console.log("update","to:",to.path,"from:",from.path);
    
      next();

    },
   destroyed() {
      console.log("article已销毁");
    }
};
</script>




<style lang="less" scoped>

.content {
  padding: 20px 0;
  margin: auto;
  // width:calc(100% - 240px);
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
  .markdown{
    margin:20px 50px;
    .v-md-editor-preview.github-markdown-body{
      border-radius: 8px;
     background-color: rgba(255, 255, 255, 0.7);
    }
  }
}
@media only screen and (max-width: 760px) {
  .content{
     width:95vw;
    .markdown{
      width:100%;
      box-sizing: border-box;
      margin: 0;
      padding: 10px;
    }
    
  }
}
</style>
