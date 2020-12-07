function Controllers(prefix){
    var map = {};
    return {
        add : function(path,excutiveF){
            if(map[prefix+path] == undefined){
                map[prefix+path] = excutiveF;
            }else{
                throw new Error(prefix+path+" 已有重复定义");
            }
        },
        getMappings : function(){
            return map;
        }
    }
}

module.exports = Controllers;