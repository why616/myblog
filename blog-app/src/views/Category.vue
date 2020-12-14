<template>
  <div class="wrapper">
    <div class="all-artist">
      <h4>分类 {{ $route.params.category }}下的文章</h4>
      
      <panel-view-area >
        <template>
          <!-- v-for -->
          <panel v-for="(item) in articleList" 
                  :key="item.id" 
                  :title="item.title" 
                  :summary="item.summary" 
                  :url="item.url"
                  :ctime="item.ctime"
                  :utime="item.utime"
                  :views="item.views"/>
        </template>
      </panel-view-area>
      <!-- 分页目录 -->
     <el-pagination
      class="mypage"
      layout="prev, pager, next"
      @current-change="currentChange"
      :page-size=5
      :total="total">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    // props:['category'],
    created(){
        this.getCategoryData();
    },
    beforeRouteUpdate(to, from, next){
      next();
      console.log("update",this.$route.params.category);
      this.getCategoryData();
        
    },
    data(){
        return {
            articleList:[],
            pagenum: 1,
            total:5
        }
    },
    methods:{
        getCategoryData(){
            this.$axios.get(`/article/${this.$route.params.category}`,
                {params:{pagenum:1,pagesize:5}}
            )
            .then(res => {

                let {data} = res;
                 console.log("articleList",data);
                this.articleList = data;
            });
        },
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
    }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  .all-artist {
    flex-grow: 1;
    h4 {
      text-align: center;
      color: #fff;
      font-size: 40px;
      line-height: 1.8;

      text-shadow: 1px 1px 1px rgba(0, 0, 0, 1), 1px 1px 1px rgba(0, 0, 0, 1),
        0px 0px 1px rgba(0, 0, 0, 1), 0px 0px 1px rgba(0, 0, 0, 1);
    }
    .content {
      padding-top: 20px;
      width: 800px;
      margin: auto;
    }
  }
  .mypage{
      width: fit-content;
      margin: auto;
      border-radius: 5px;
      
    }
}
@media only screen and (max-width: 1058px) {
  .wrapper{
    .all-artist{
      width:65vw;
      .content{
        width: inherit;
        
      }
    }
  }
}

@media only screen and (max-width: 760px) {
  .wrapper{
    .all-artist{
      h4{
        font-size: 35px;
      }
      width:80vw;
      .content{
        width: inherit;
      }
    }
  }
  
}
</style>