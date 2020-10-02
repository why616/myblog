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
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
@import './assets/css/reset.css';
#app{
  background-image: url("./assets/img/316709.jpg");
  background-size: cover;
  height: 100%;
}
div#nav{
  line-height: 50px;
  
  background-image: linear-gradient(to right,#065279,#7266ba);
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 0 20px;
  
  .left{
    font-size: 19px;
    font-weight: 700;
    line-height: 50px;
    color: #ffffff;
    svg{
      padding:0 5px;
    }
  }
  .right{
    display: flex;
    justify-content:space-between;
    font-size: 14px;
    a{
      padding: 0 10px;
      svg{
        padding:0 3px;
      }
    }
  }
}

</style>
