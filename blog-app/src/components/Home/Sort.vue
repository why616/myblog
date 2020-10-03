<template>
 <div class="wrapper">
     
     <router-view class="router-view" />
     <right />

 </div>
</template>

<script>

import right from './components/Right.vue';


export default {
 components:{
     right
 }
}
</script>

<style lang="less" scoped>
    .router-view{
        
    }
    .wrapper{
       display: flex;
       
    }
</style>