<template>
  <router-link class="panel" to="123456" append @click.native="changeShowContent(false)">
    <div class="mask"></div>
    <div class="bg">
      <div class="bg-area"></div>
    </div>
    <div class="title">
      <h3>这是一段关于该标签的介绍</h3>
      <div class="detail">
        这是一段详细介绍，非常非常非常非常非常非常非常非常非常非常非常非常非常非常地详细
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed:{
    // ...mapState(['searchBase'])
  },
  methods:{
    ...mapMutations(['changeShowContent'])
  }
};
</script>

<style lang="less" scoped>
.panel {
  display: block;
  box-sizing: border-box;
  width: 100%;

  border-radius: 5px;

  margin-bottom: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  .bg {
    border-radius: inherit;
    transition: all 0.2s;
    width: 100%;
    height: 300px;
    overflow: hidden;
    .bg-area {
      background-image: url("../assets/img/175237.jpg");
      background-size: cover;
      transition: all 0.2s;
      width: 100%;
      height: 100%;
    }
  }
  .title {
    border-radius: inherit;
    position: relative;
    transition: all 0.2s;
    box-sizing: border-box;
    height: 300px;
    margin-top: -300px;
    padding: 139px 30px 0 30px;
    background-color: rgba(0, 0, 0, 0.3);

    h3 {
      text-align: center;
      transition: all 0.2s;
      font-size: 22px;
      color: #fff;
      text-shadow: 0 0 3px #ffffff;
    }
    .detail {
      transition: all 0.2s;
      font-size: 14px;
      line-height: 2;
      opacity: 0;
      color: #fff;
    }
  }
  &:hover {
    .bg {
      .bg-area {
        transform: scale(1.05);
        filter: blur(3px);
      }
    }
    .title {
      padding: 80px 30px 1px 30px;
      background-color: rgba(0, 0, 0, 0.5);

      .detail {
        opacity: 1;
        transform: translateY(80px);
      }
    }
  }
}
</style>
