<template>
  <div class="wrapper">
    <div class="all-artist" v-show="searchBase">
      <h4>分类 {{ category }}下的文章</h4>
      <panel-view-area>
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
    </div>

    <router-view />
    <right />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  created() {
    console.log("sort create");
    // //发送axios
    // // var patt = /\/html$/;
    // if (this.patt.test(this.$route.path)) {
    //   //发送axios查目录
    //   console.log("查目录");
    //   this.changeShowContent(true);
    // } else {
    //   //发送axios查数据,由router-view接收params参数自己加载
    //   console.log("查具体文章");
    //  this.changeShowContent(false);
    // }
    //1.先判断是哪个分类
    // var _path = this.$route.path;
    // var patts = [
    //   /\/html$/,
    //   /\/css$/,
    //   /\/js$/,
    //   /\/vue$/,
    //   /\/node$/,
    //   /\/interview$/,
    // ];
    // patts.forEach((item) => {
    //   if (item.test(_path)) {
    //     var str = item.source;
    //     this.category = str.slice(2,str.length-1).toUpperCase();
    //     console.log("截取内容",this.category);
    //     this.patt = item;
    //   }
    // });
    // if (this.category) {
    //   //   //发送axios，根据category查目录
    //   console.log("查目录");
    //   this.changeShowContent(true);
    // } else {
    //   console.log("查具体文章");
    //   this.changeShowContent(false);
    // }
    // this.updatePage();
  },
  mounted() {
    console.log("挂载");
    window.addEventListener("popstate", this.listenPopState, false);
  },
  //   updated(){

  //       console.log("update");
  //     //   this.updatePage();
  //   },
  data() {
    return {
      //   searchBase: false,
      thisCategory: true,
      loadAgain:true,
      patt: "",
      articleList: [],
      patts : [
        /\/html$/,
        /\/css$/,
        /\/js$/,
        /\/vue$/,
        /\/node$/,
        /\/interview$/,
        /\/algorithm$/,
        /\/webproject$/,
      ]
    };
  },
  watch: {
    thisCategory() {
        // console.log("监听器：",this.loadAgain);
        this.loadAgain ? this.updatePage() : this.loadAgain = true;
    },
  },
  computed: {
    searchBase() {
      return this.$store.state.searchBase;
    },

    category() {
      //  debugger;
      this.thisCategory = this.$store.state.category;
      console.log("获取了当前category", this.thisCategory);

      return this.$store.state.category;
    },
    // ...mapState({
    //   category: (state) => {
    //     return state.category;
    //   },
    // }),
  },
  methods: {
    ...mapMutations(["changeShowContent", "changeCategory"]),
    listenPopState() {
      for(var i = 0;i<this.patts.length;i++){
        if(this.patts[i].test(this.$route.path)){
          this.changeShowContent(true);
          var str = this.patts[i].source;
          this.thisCategory = str.slice(2, str.length - 1).toUpperCase();
          this.changeCategory(this.thisCategory);
          console.log(this.$route.path);
          return;
        }
      }
      this.changeShowContent(false);
  
      // console.log(this.$route.path);
      // this.patt.test(this.$route.path)
      //   ? this.changeShowContent(true)
      //   : this.changeShowContent(false);
    },
    updatePage() {
      // !this.thisCategory ? this.loadAgain = false:'';
        // console.log("修改处：",this.loadAgain);
      var _path = this.$route.path;

      var patts = [
        /\/html$/,
        /\/css$/,
        /\/js$/,
        /\/vue$/,
        /\/node$/,
        /\/interview$/,
        /\/algorithm$/,
        /\/webproject$/,
      ];
      var ifCategory = false;
      patts.forEach((item) => { 
        if (item.test(_path)) {
          var str = item.source;
          ifCategory = true;
          var old =  this.thisCategory;
          this.thisCategory = str.slice(2, str.length - 1).toUpperCase();
          console.log(old,this.thisCategory);
          old != this.thisCategory ? this.loadAgain = false:'';

          console.log("截取内容", this.thisCategory);
          this.changeCategory(this.thisCategory);
          this.patt = item;

        }
      });
      if (ifCategory) {
        //发送axios，根据category查目录
        console.log("查目录，根据：", this.thisCategory);
        this.$axios.get(`/article/${this.thisCategory}`,{params:{pagenum:1,pagesize:5}})
          .then(res => {
            console.log(res);
            let {data} = res;
            this.articleList = data;
            this.changeShowContent(true);
          });
      } else {
        console.log("查具体文章");
        this.changeShowContent(false);
      }
    },
  },
  destroyed() {
      console.log("已销毁");
    window.removeEventListener("popstate", this.listenPopState, false);
  },
  beforeRouteEnter(to, from, next) {
    console.log("enter");

    next();
  },
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

      text-shadow: 1px 1px 1px rgba(0, 0, 0, 1), 1px 1px 1px rgba(0, 0, 0, 1),
        0px 0px 1px rgba(0, 0, 0, 1), 0px 0px 1px rgba(0, 0, 0, 1);
    }
    .content {
      padding-top: 20px;
      widows: 800px;
      margin: auto;
    }
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
 