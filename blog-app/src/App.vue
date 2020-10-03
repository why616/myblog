<template>
  <div id="app">
    <div id="nav">
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
    </div>
    <left />
    <router-view class="router-view" />
    <div class="bg"></div>
  </div>
</template>

<script>
import left from "./components/Left.vue";
export default {
  components: {
    left,
  },
};
</script>

<style lang="less" scoped>
#app {
  height: calc(100% - 50px);
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
  position: fixed;
  z-index: 999;
  background-image: linear-gradient(to right, #065279, #7266ba);
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 0 20px;

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
</style>
