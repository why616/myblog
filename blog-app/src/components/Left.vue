<template>
  <aside>
    <div class="hidden-scroll">
      <div class="aside-wrapper">
        <div class="header">
          <img src="@/assets/img/tuixue.png" />
          <h1>靛蓝伊梓</h1>
          <p>这边建议是重新读大学呢</p>
        </div>
        <div class="nav">
          <h3>导航</h3>
          <ul class="">
            <li>
              <router-link to="/">
                <font-awesome-icon icon="home"></font-awesome-icon>
                <span>首页</span>
              </router-link>
            </li>
            <li @click="toggleShow" :class="{ show: sortShow }">
              <a to="/">
                <font-awesome-icon icon="cube"></font-awesome-icon>
                <span>分类</span>
              </a>
              <ul :class="{ show: sortShow }" @click.stop="changeShowContent(true)">
                <li @click="changeCategory('HTML'),closeLeft()">
                  <router-link to="/html" >
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>Html</span>
                  </router-link>
                </li>
                <li @click="changeCategory('CSS'),closeLeft()">
                  <router-link to="/css" > 
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>Css</span>
                  </router-link>
                </li>
                <li @click="changeCategory('JS'),closeLeft()">
                  <router-link to="/js" >
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>Js</span>
                  </router-link>
                </li>
                <li @click="changeCategory('VUE'),closeLeft()">
                  <router-link to="/vue" >
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>Vue</span>
                  </router-link>
                </li>
                <li @click="changeCategory('NODE'),closeLeft()">
                  <router-link to="/node">
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>Node.js</span>
                  </router-link>
                </li>
                <li  @click="changeCategory('INTERVIEW'),closeLeft()">
                  <router-link to="/interview">
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>面试题</span>
                  </router-link>
                </li>
                <li  @click="changeCategory('ALGORITHM'),closeLeft()">
                  <router-link to="/algorithm">
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>算法题</span>
                  </router-link>
                </li>
                <li  @click="changeCategory('WEBPROJECT'),closeLeft()">
                  <router-link to="/webproject">
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>前端工程化</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/bzd">
                <font-awesome-icon icon="question-circle"></font-awesome-icon>
                <span>不知道还能填啥</span>
              </router-link>
            </li>
            <li>
              <router-link to="/wbu">
                <font-awesome-icon icon="paw"></font-awesome-icon>
                <span>以后会用上的吧</span>
              </router-link>
            </li>
            <li>
              <router-link to="five">
                <font-awesome-icon icon="feather-alt"></font-awesome-icon>
                <span>五个选项好看</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nav">

        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      sortShow: false,
      html_page:""
    };
  },
  methods: {
    toggleShow() {
      this.sortShow = !this.sortShow;
    },
    ...mapMutations(['changeShowContent','changeCategory']),
    

    
    closeLeft(){
      console.log("向父组件关闭");
      this.$emit('clickItem',false);
      // this.$store.commit({
      //   type:'changeCategory',
      //   newCategory: "HTML"
      // })
    }

  },
};
</script>

<style lang="less" scoped>
aside {
  //   width: 220px;
}
.hidden-scroll {
  width: 220px;
  top: 50px;
  overflow: hidden;
  position: fixed;
//   height: 100%;
  bottom: 0;
}
.aside-wrapper {
  width: 320px;
  background-color: rgb(58, 63, 81);
  height: 100%;
  overflow-y: scroll;
  & > * {
    width: 220px;
  }
  .header {
    color: rgb(234, 235, 237);
    line-height: 1.5;
    font-size: 14px;
    padding: 30px 0;
    text-align: center;
    border-bottom: 1px solid #2e3344;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      box-shadow: 0px 0px 1px 2px rgba(255, 255, 255, 0.8);
    }
    p {
      color: rgb(139, 142, 153);
    }
  }
  .nav {
    border-bottom: 1px solid #2e3344;
    h3 {
      font-size: 14px;
      color: rgb(139, 142, 153);
      padding: 10px;
    }
    ul {
      transition: all 0.2s;
      li {
        &:hover,
        &.show {
          background-color: #32374a;
          a {
            color: #ffffff;
          }
        }
       
        font-size: 14px;

        a {
          display: block;
           padding: 10px 20px;
          color: rgb(180, 182, 189);
          svg {
            padding: 0 20px 0 0;
          }
        }
        ul {
          &.show {
            // li:first-child{
            //    padding-top: 15px;
            // }
           
            height: auto;
            opacity: 1;
            
          }
          
          opacity: 0;
          overflow: hidden;
          height: 0;

          li {
            &:hover {
              background-color: rgb(58, 63, 81);
               span {
                 color: #ffffff;
               }
            }
            span {
              font-size: 14px;
              color: rgb(180, 182, 189);
            }

            svg {
              padding: 0 10px 0 20px;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  aside{
    transform: translateX(0);
    overflow-x: hidden;
    position: fixed;
    width: 75%;
    top: 50px;
    bottom: 0;
    z-index: 999;
    transition: transform .2s;
    .hidden-scroll{
      width: 109%;
      top: 0;
      .aside-wrapper{
        width: auto;
        &>*{
           width: 100%;
           font-size: 1.1em;
        }
        .header{
          h1{
            font-size: 1.1em;
          }
        }
        .nav{
          line-height: 1.3;
          
          h3{
             font-size: 17px;
          }
          li{
            font-size: 17px!important;
            span{
              font-size: 17px!important;
            }
          }
        }
      }
    }
    
  }
}
</style>