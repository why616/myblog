<template>
  <div class="right">
    <ul class="nav">
      <li class="nav-item"  @click="click(num0)">
        <a :class="{ active: show == 0 }">
          <font-awesome-icon icon="candy-cane" />
        </a>
      </li>
      <li class="nav-item"   @click="click(num1)">
        <a :class="{ active: show == 1 }">
          <font-awesome-icon icon="cannabis" />
        </a>
      </li>
      <li class="nav-item" @click="click(num2)">
        <a :class="{ active: show == 2 }">
          <font-awesome-icon icon="comment-alt" />
        </a>
      </li>
    </ul>
    <div class="content">
      <div class="hot" :class="{ active: show == 0 }">
        <h3 class="header-name">随机文章</h3>
        <article>
          <img src="../assets/img/akl.png" alt="" />
          <section>文字溢出时，使用...表示还有其他的省略了</section>
        </article>
        <article>
          <img src="../assets/img/akl.png" alt="" />
          <section>white-space 设置文本内空格的效果</section>
        </article>
      </div>
      <div class="sentence" :class="{ active: show == 1 }">
        <h3 class="header-name">每日一句</h3>
        <article>
          <img src="../assets/img/akl.png" alt="" />
          <section>消失吧...随风消散吧！</section>
        </article>
      </div>
      <div class="latest-reply" :class="{ active: show == 2 }">
          <h3 class="header-name">最新留言</h3>
        <article>
          <img src="../assets/img/akl.png" alt="" />
          <section>你是不是有点那啥...有点二，中二的那种...</section>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        console.log("侧边栏重新加载啦");
    },
  data() {
    return {
      show: 0,
      num0: 0,
      num1: 1,
      num2: 2
    };
  },
  methods:{
      click(num){
          this.show = num;
      }
    //   click2(){
    //       this.show = 2
    //   },
    //   click3(){
    //       this.show = 3
    //   }
  }
};
</script>

<style lang="less" scoped>
.right {
  flex-shrink: 0;
  width: 240px;
  flex-basis: 240px;
  background-color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s;
  &:hover {
    background-color:rgba(255, 255, 255, 0.9);
  }
  .nav {
    .nav-item {
      display: table-cell;
      width: 1%;

      a {
        display: block;
        padding: 15px 25px;
        text-align: center;
        color: rgb(152, 166, 173);
        line-height: 16px;
        &.active {
          border-bottom: 1px solid #66ccff;
        }
        &:not(.active) {
          border-bottom: 1px solid rgb(222, 229, 231);
        }
        svg {
          padding: 5px;
        }
      }
    }
  }
  .content {
    &>div {
        transition: opacity .2s linear;
      &.active {
        opacity: 1;
        display: block;
      }
      &:not(.active) {
        opacity: 0;
        display: none;
      }
    }

    .hot {
      .header-name {
        margin: 15px;
        color: #065279;
      }
      article {
        margin: 15px;
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;

          float: left;
        }
        section {
          overflow: hidden;
          word-break: break-all;
        }
      }
    }
    .sentence {
      .header-name {
        margin: 15px;
        color: #065279;
      }
      article {
        margin: 15px;
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;

          float: left;
        }
        section {
          overflow: hidden;
          word-break: break-all;
        }
      }
    }
    .latest-reply {
      .header-name {
        margin: 15px;
        color: #065279;
      }
      article {
        margin: 15px;
        img {
          width: 40px;
          height: 40px;
          margin-right: 10px;
          border-radius: 50%;

          float: left;
        }
        section {
          overflow: hidden;
          word-break: break-all;
        }
      }
    }
  }
}
</style>