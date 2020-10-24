<template>
  <div class="wrapper">
    <div class="public-excution">
      <h1>靛蓝伊梓 | 风铃舞的伊梓</h1>

      <p>界面布局模仿自Theme handsome</p>
      <p>TECH OTAKU SAVE THE WORLD => 但是我没有技术，只能成为OTAKU（菜哭</p>
    </div>
    <div class="content">
      <!-- <div class="mask"></div> -->
      <panel v-for="(item) in articleList" 
                  :key="item.id" 
                  :title="item.title" 
                  :summary="item.summary" 
                  :url="item.url"/>
    </div>
    <el-pagination
      class="mypage"
      layout="prev, pager, next"
      @current-change="currentChange"
      :page-size=5
      :total="total">
    </el-pagination>
  </div>
</template>
<script>

export default {
  created(){
     this.$axios.get(`/article/main`,{params:{pagenum:this.pagenum,pagesize:5}})
          .then(res => {
            console.log(res);
            let {data} = res;
            this.articleList = data['articles'];
            this.total = data['articleCounts'].total;
          });
          //未初始化methods
    // updateCurrentPageArticle();
  },
  data (){
    return {
      articleList: [],
      pagenum: 1,
      total:5
    }
  },
  methods:{
    // prevClick(){
    //   console.log("点到了前");
    //   this.pagenum--;
    //   this.updateCurrentPageArticle();

    // },
    // nextClick(){
    //   console.log("点到了后");
    //   this.pagenum++;
    //   this.updateCurrentPageArticle();
    // },
    currentChange(pagenumq){
      console.log("新页面：",pagenumq);
      this.pagenum = pagenumq;
      this.updateCurrentPageArticle();
    },
    updateCurrentPageArticle (){
      this.$axios.get(`/article/main`,{params:{pagenum:this.pagenum,pagesize:5}})
          .then(res => {
            console.log(res);
            let {data} = res;
            this.articleList = data['articles'];
            this.total = data['articleCounts'].total;
          });
    }
  },
  components: {
   
  },
};
</script>
<style lang="less">
  .mypage{
    .btn-prev{
      border-radius: 5px 0 0 5px;
    }
    ul{
      li{
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
    .btn-next{
      border-radius: 0 5px 5px 0;
    }
  }
</style>
<style lang="less" scoped>
.wrapper {
  display: block;
  flex-grow: 1;
  margin-bottom: 20px;
  .public-excution {
    margin:auto;
    margin-top: 30px;

    color: transparent;
    text-align: center;
    padding: 10px;
    background-image: url("../assets/img/316709.jpg");
    -webkit-background-clip: text;
    //  text-fill: transparent;
    background-position: center;

    h1 {
      font-size: 40px;
      line-height: 1.8;

      text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    }
    p {
      color: #000000;
      text-shadow: 1px 1px 6px rgba(255, 255, 255, 1),
        1px 1px 3px rgba(255, 255, 255, 1), 1px 1px 1px rgba(255, 255, 255, 1);

      font-size: 16px;
      font-weight: bold;
      line-height: 1.8;
    }
  }
  
  .mypage{
      width: fit-content;
      margin: auto;
      border-radius: 5px;
      
    }
  .content {
    padding-top: 20px;
    width: 800px;
    margin: auto;
    
    // .mask {
    //   position: absolute;
    //   width: 100%;
    //   height: 100%;
    //   z-index: 100;
    // }
  }
}
@media only screen and (max-width: 1058px) {
  .wrapper{
    .public-excution{
      width:65vw;
      
    }
    .content{
        width: 65vw;
    }
  }
}

@media only screen and (max-width: 760px) {
  .wrapper{
    .public-excution{
      width:80vw;
      
    }
    .content{
          width: 90vw;
      }
  }
  
}
</style> 
 