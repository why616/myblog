<template>
  <div id="app">
    <div id="nav">
      <div class="left-menu" @click="showLeft = !showLeft">
        <font-awesome-icon icon="list" />
      </div>
      <div class="left">
        <router-link to="/">
          <font-awesome-icon icon="chair" />
          <span>Indigo Chair</span>
        </router-link>
      </div>
      <div class="right">
        <router-link to="/aboutme">
          <font-awesome-icon icon="feather-alt"></font-awesome-icon>
          <span>关于我</span>
        </router-link>
        <router-link to="/contact">
          <font-awesome-icon icon="edit"></font-awesome-icon>
          <span>留言板</span>
        </router-link>
      </div>
      <div class="none right-menu" @click="showRight = !showRight">
        <font-awesome-icon icon="cog"></font-awesome-icon>
        <div class="none" :class="{ navright: showRight }">
          <router-link to="/aboutme">
            <font-awesome-icon icon="feather-alt"></font-awesome-icon>
            <span>关于我</span>
          </router-link>
          <router-link to="/contact">
            <font-awesome-icon icon="edit"></font-awesome-icon>
            <span>留言板</span>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="none"
      :class="{ mask: showLeft }"
      @click="showLeft = !showLeft"
    ></div>

    <left :class="{ navleft: !showLeft }" @clickItem="showLeft = false" />

    <router-view class="router-view" :class="{ overWindowHidden: showLeft }" />
    <div class="bg"></div>
  </div>
</template>

<script>
import left from "@/components/Left.vue";
export default {
  data() {
    return {
      showLeft: false,
      showRight: false,
    };
  },
  components: {
    left,
  },
};
</script>

<style lang="less" scoped>
.none {
  display: none;
}
.overWindowHidden {
  overflow: hidden;
  height: 100%;
}
#app {
  height: calc(100% - 50px);
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 998;
    display: block;
  }
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("./assets/img/316709.jpg");
    background-size: cover;
    // background-attachment: fixed;
    z-index: -1;
  }
}
.router-view {
  padding-top: 50px;
  margin-left: 220px;
  min-height: 100%;
}

div#nav {
  left: 0;
  right: 0;
  line-height: 50px;
  height: 50px;
  position: fixed;
  z-index: 999;
  background-image: linear-gradient(to right, #065279, #7266ba);
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 0 20px;
  .left-menu {
    display: none;
  }
  .left {
    font-size: 19px;
    font-weight: 700;
    line-height: 50px;
    color: #ffffff;
    svg {
      padding: 0 5px;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    a {
      padding: 0 10px;
      transition: all 0.2s;
      &:hover {
        transform: rotate(10deg);
      }
      svg {
        padding: 0 3px;
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  .router-view {
    margin-left: auto;
  }
  div#nav {
    .left-menu {
      font-size: 19px;
      line-height: 50px;
      display: block;
      color: #ffffff;
    }
    .right {
      display: none;
    }
    .right-menu {
      font-size: 20px;
      line-height: 50px;
      display: block;
      color: #ffffff;
      .navright {
        display: block;
        position: absolute;
        right: 2px;
        border-radius: 10px;
        width: 25vw;
        background-color: #065279;
        top: 48px;
        font-size: 17px;
        &::before {
          content: "";
          display: block;
          position: absolute;
          top: -18%;
          left: 63%;
          border: 10px solid transparent;
          border-bottom: 15px solid #065279;
        }
        a {
          display: block;
        }
      }
    }
  }
  .navleft {
    transform: translateX(-109%);
  }
}
</style>
