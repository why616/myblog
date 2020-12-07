<template>
  <div class="wrapper">
    <div class="all-artist" v-show="searchBase">
      <h4>分类 HTML下的文章</h4>
      <panel-view-area>
        <template>
          <!-- v-for -->
          <panel />
          <panel />
        </template>
      </panel-view-area>
    </div>

    <router-view />
    <right />

  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  created() {
    //发送axios
    // var patt = /\/html$/;
    if (this.patt.test(this.$route.path)) {
      //发送axios查目录
      console.log("查目录");
      this.changeShowContent(true);

    } else {
      //发送axios查数据,由router-view接收params参数自己加载
      console.log("查具体文章");
     this.changeShowContent(false);
    }
   
  },
  mounted(){
       window.addEventListener('popstate',this.listenPopState,false);
  },
  data() {
    return {
    //   searchBase: false,
        patt :/\/html$/,
      articalList: [],
    };
  },
  computed:{
    ...mapState(['searchBase'])
  },
  methods:{
    ...mapMutations(['changeShowContent']),
    listenPopState(){
        this.patt.test(this.$route.path) ? this.changeShowContent(true):this.changeShowContent(false);
        // console.log(this.$route.path);
    }
  },
  destroyed(){
    //   console.log("已销毁");
    window.removeEventListener('popstate',this.listenPopState,false);

  },
  beforeRouteEnter(to, from, next){
      console.log("enter");
        next();
  }
};
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

      text-shadow: 1px 1px 1px rgba(0, 0, 0, 1),
      1px 1px 1px rgba(0, 0, 0, 1),
      0px 0px 1px rgba(0, 0, 0, 1),
      0px 0px 1px rgba(0, 0, 0, 1);
    }
    .content {
      padding-top: 20px;
      width: 800px;
      margin: auto;
    }
  }
}
</style> 
 