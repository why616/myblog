<template>
  <div class="content" :key="dataIndex">
    <div class="markdown">
     {{content}}
    </div>
  </div>
</template>
<script>
export default {
  created(){
    if(this.$route.path){
      this.dataIndex = this.$route.params.id
      //axios
      console.log("查询："+this.dataIndex);
      this.$axios.get(`/article/content`,{params:{id:this.dataIndex}})
          .then(res => {
            console.log(res);
            let {data} = res;
            this.content = data[0].content;
          });
    }
  },
  data() {
    return {
      content:'',
      dataIndex: 0
    };
  },
  watch:{
    $route(to,from){
      console.log("to:",to.params.id);
       this.$axios.get(`/article/content`,{params:{id:to.params.id}})
          .then(res => {
            console.log(res);
            let {data} = res;
            this.content = data[0].content;
          });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("@/assets/css/markdown.less");
.content {
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
  #write {
      margin-top: 30px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 0;
  }
}
</style>
