<template>
  <div class="content">
    <div class="article-header">
      <div class="title">
        <el-input v-model="title" placeholder="请输入标题">
          <template slot="prepend">标题</template>
        </el-input>
      </div>
      <div class="summary">
      
        <el-input
          type="textarea"
          :rows="2"
          maxlength:89
          placeholder="请输入简介"
          v-model="summary">
           <template slot="prepend">简介</template>
        </el-input>
        
      </div>
    </div>
    <div class="editer-content">
      <v-md-editor
        height="90vh"
        @save="saveArticleToServer"
        :disabled-menus="[]"
        @upload-image="handleUploadImage"
        v-model="content"
      ></v-md-editor>
    </div>
  </div>
</template>

<script>
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
VMdEditor.use(githubTheme);

export default {
  
  props:['id'],
  created(){
    if(this.id){
      this.$axios
        .get(`/article/content`, { params: { id: this.id } })
        .then((res) => {
          console.log(res);
          let { data } = res;
          this.title = data[0].title;
          this.summary = data[0].summary;
          this.content = data[0].content;
          this.tags = data[0].tags;
        });
    }
  },
  data(){
    return {
      title:'',
      summary:'',
      content:'',
      tags:''

    }
  },
  components:{
    VMdEditor
  },
  methods: {
     saveArticleToServer(text, html) {
       if(this.id){
         this.$prompt('请输入分类', '选择分类', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputValue:this.tags
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: '邮箱格式不正确'
        }).then(async ({ value }) => {
          //这里写axios发送~~~~~~~~~~~~
         var {data:ret} = await this.$axios.post('/article/updatearticle',{id:this.id,title:this.title,summary:this.summary,content:text,category:value});
         console.log(ret);
         if(ret.state == 'ok'){
           this.$message.success({
            message:ret.msg,
            duration:1500
          });
         }else{
           
         }
        }).catch((msg) => {
          if(msg == 'cancel'){
            this.$message({
              type: 'info',
              duration:1500,
              message: '再改改'
            });  
          }else{
            this.$message.error({
              message:msg,
              duration:1500
            });
          } 
        });
       }else{
         // console.log(text, html);
        this.$prompt('请输入分类', '选择分类', {
            confirmButtonText: '确定',
            cancelButtonText: '取消'
            // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            // inputErrorMessage: '邮箱格式不正确'
          }).then(async ({ value }) => {
            //这里写axios发送~~~~~~~~~~~~
          var {data:ret} = await this.$axios.post('/article/addnewarticle',{title:this.title,summary:this.summary,content:text,category:value});
          console.log(ret);
          if(ret.state == 'ok'){
            this.$message.success({
              message:ret.msg,
              duration:1500
            });
          }else{
            this.$message.error({
              message:ret.msg,
              duration:1500
            });
          }
          }).catch(() => {
            this.$message({
              type: 'info',
              duration:1500,
              message: '再改改'
            });       
          });
       }
      
      

    },
    
    async handleUploadImage(event, insertImage, files) {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);

      //设置请求头content-type : multipart/formdata会有问题，只能通过自动根据类型设置
      //使用FormData作为发送的数据，用xhr的方式发送，content-type会自动被识别为合适值，然后发送
      var data = new FormData();
      data.append("imgs", files[0]);
      var xhr = new XMLHttpRequest();
      xhr.open("post", "http://localhost:8888/uploads/img", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var path = xhr.responseText;
          console.log(path);

          insertImage({
            url: path,
            desc: path,
          });
        }
      };
      xhr.send(data);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  .article-header{
    margin: auto;
     width: 70vw;
    .title{
      margin: 20px auto;
      width: inherit;
      // input{
      //    border-radius: 3px;
      //    border: 2px solid rgba(248, 2, 14, 0.603);
      //   width: inherit;
      //   height: 25px;
      //   outline-color: #66ccff;
      // }
    }
    .summary{
       margin: 20px auto;
      width: inherit;
      // textarea{
      //   outline-color: #66ccff;
      //    border: 2px solid rgba(248, 2, 14, 0.603);
      //   border-radius: 3px;
      //   width: inherit;
      //   height: 25px;
      // }
    }
  }
  

  .editer-content {
    margin: auto;
    margin-bottom: 20px;
    height: 90vh;
   
    width: 70vw;
  }
}
@media only screen and (max-width: 770px) {
    .content {
        .editer-content {
            width: 95vw;
        }
    }
}
</style>