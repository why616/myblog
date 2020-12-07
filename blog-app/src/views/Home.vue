<template>
 <div class="wrapper">
     <router-view class="router-view" />
     <right />
 </div>
</template>

<script>




export default {
 components:{
    
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