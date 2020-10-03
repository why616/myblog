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
              <ul :class="{ show: sortShow }">
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>html</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>css</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>js</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>vue</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>node.js</span>
                  </a>
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
              <ul :class="{ show: sortShow }">
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>html</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>css</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>js</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>vue</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>node.js</span>
                  </a>
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
              <ul :class="{ show: sortShow }">
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>html</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>css</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>js</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>vue</span>
                  </a>
                </li>
                <li>
                  <a>
                    <font-awesome-icon icon="bullseye"></font-awesome-icon>
                    <span>node.js</span>
                  </a>
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
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      sortShow: false,
    };
  },
  methods: {
    toggleShow() {
      this.sortShow = !this.sortShow;
    },
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
        padding: 10px 20px;
        font-size: 14px;

        a {
          display: block;
          color: rgb(180, 182, 189);
          svg {
            padding: 0 20px 0 0;
          }
        }
        ul {
          &.show {
            padding-top: 10px;
            height: 195px;
          }
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
</style>