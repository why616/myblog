<template>
 <div class="wrapper">
     <left />
     <main-content />
     <right />

 </div>
</template>

<script>
import left from './components/Left.vue';
import right from './components/Right.vue';
import mainContent from './components/Content.vue';

export default {
 components:{
     left,
     right,
     mainContent
 }
}
</script>

<style lang="less" scoped>
    .wrapper{
       
        div{
            
        }
    }
</style>