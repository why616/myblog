<template>
 <div class="content">
     <div class="editer-content">
         <v-md-editor  height="90vh" 
         @save = "saveArticleToServer"
         :disabled-menus="[]"
         @upload-image="handleUploadImage"
         ></v-md-editor>
     </div>
      
 </div>
</template>

<script>
export default {
 methods:{
     saveArticleToServer(text,html){
         console.log(text,html);
     },
     async handleUploadImage(event, insertImage, files) {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      console.log(files);
      var data = new FormData();
    //   ups.append('imgs',files[0]);
    data.append("imgs",files[0]);
    var xhr = new XMLHttpRequest();
    xhr.open("post",'http://localhost:8888/uploads/img',true);

    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            var path = xhr.responseText;
            console.log(path);
           
            insertImage({
                url:
                     path,
                desc: '',
            });
        }
    }
    xhr.send(data);




      // 此处只做示例
      
    }
 }
}
</script>

<style lang="less" scoped>
.content{
   
    
    position: relative;
    .editer-content{
        position: absolute;
        margin: auto;
        height:90vh;
        top:50px;
        bottom:0;
        left: 0;
        right: 0;
        width: 75vw;

    }
}
</style>