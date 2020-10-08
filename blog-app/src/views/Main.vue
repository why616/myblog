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
    <div class="patition">
      <div class="pre">
         <font-awesome-icon icon="angle-left" />
      </div>
      <div class="order">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="next">
        <font-awesome-icon icon="angle-right" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  created(){
     this.$axios.get(`/article/main`,{params:{pagenum:1,pagesize:5}})
          .then(res => {
            console.log(res);
            let {data} = res;
            this.articleList = data;
          });
  },
  data (){
    return {
      articleList: []
    }
  },
  components: {
   
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  .public-excution {
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
  display: block;
  flex-grow: 1;
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
  .patition{

  }
}
</style> 
 