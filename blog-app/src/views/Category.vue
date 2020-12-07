<template>
  <div class="wrapper">
    <div class="all-artist">
      <h4>分类 {{ category }}下的文章</h4>
      
      <panel-view-area >
        <template>
          <!-- v-for -->
          <panel v-for="(item) in articleList" 
                  :key="item.id" 
                  :title="item.title" 
                  :summary="item.summary" 
                  :url="item.url"/>
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

    <router-view />
    <right />
  </div>
</template>

<script>
export default {
    beforeRouterEnter(){
        
    },
    data(){
        return{
            category:''

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
      widows: 800px;
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