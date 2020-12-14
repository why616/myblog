<template>
  <router-link class="panel" :to="url" append @click.native="changeShowContent(false)">
    <div class="mask"></div>
    <div class="bg">
      <div class="bg-area"></div>
    </div>
    <div class="title">
      <h3>{{title}}</h3>
      <div class="detail">
        {{summary}}
      </div>
      <div>

      </div>
      <div class="extra">
        <div class="separate"></div>
        <div class="article-msg">
          <div class="cre-time">
            <font-awesome-icon icon="clock"></font-awesome-icon>
            <span>{{YYMMDDctime}}</span>
          </div>
          <div class="las-modi">
            <font-awesome-icon icon="edit"></font-awesome-icon>
            <span>{{YYMMDDutime}}</span>
          </div>
          <div class="view-times">
            <font-awesome-icon icon="eye"></font-awesome-icon>
            <span>{{views}}次浏览</span>
          </div>
        </div>
      </div>
      
    </div>
  </router-link>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props:['title','summary','url','ctime','utime','views'],
  data(){
    return{
      YYMMDDctime:this.getYYMMDD(this.ctime),
      YYMMDDutime:this.getYYMMDD(this.utime)
    }
  },
  computed:{
    // ...mapState(['searchBase'])
  },
  methods:{
    getYYMMDD(time){
      time = new Date(time);
      return time.getFullYear()+"年"+(time.getMonth()+1)+"月"+time.getDate()+"日";
    },
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
      position: absolute;
       bottom: 60px;
       width: calc(100% - 60px);
    }
    .extra{
      position: absolute;
      bottom: 23px;
      width: calc(100% - 60px);
      opacity: 0;
      transition: all 0.2s;
      .separate{
        background-color: rgba(255,255,255,.7);
        width: 100%;
        height: 1px;
        margin-bottom: 10px;

        // opacity: 0;
        transition: all 0.2s;
        // transform: translateY(112px);
      }
      .article-msg{
        display: flex;
        // opacity: 0;
        // transform: translateY(119px);
        font-size: 13px;
        .cre-time,
        .las-modi,
        .view-times{
          margin:0 15px;
          span{
            margin-left: 2px;
            letter-spacing:1px;
          }
        }
        .cre-time{
          margin-left: 0px;
        }
        .las-modi{

        }
        .view-times{

        }
      }
    }
    
    // @media only screen and (max-width: 1058px){
    //   .separate{
    //     background-color: rgba(255,255,255,.7);
    //     height: 1px;
    //     opacity: 0;
    //     transition: all 0.2s;
    //     transform: translateY(90px);
    //   }
    //   .article-msg{
    //     display: flex;
    //     opacity: 0;
    //     transform: translateY(98px);
    //     font-size: 14px;
    //     .cre-time{
          
    //     }
    //     .las-modi{

    //     }
    //     .view-times{

    //     }
    //   }
    // }
    

  }
  &:hover {
    .bg {
      .bg-area {
        transform: scale(1.05);
        filter: blur(3px);
      }
    }
    .title {
      padding: 100px 30px 1px 30px;
      background-color: rgba(0, 0, 0, 0.5);

      .detail {
        opacity: 1;
        
      }
      .extra{
        opacity: 1;
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  .panel{
    
    .title {
      padding: 80px 30px 1px 30px;
      background-color: rgba(0, 0, 0, 0.5);
      overflow: auto;
      .detail {
        opacity: 1;
        // transform: translateY(60px);
        top:150px;
      }
      .extra{
        opacity: 0;
      }
    }
  }
}
</style>
