
module.exports = {
    configureWebpack: {
        externals: {
            vue:'Vue',
            'vue-router':'VueRouter',
            vuex:'Vuex',
            "element-ui": "ELEMENT"
        }
    },
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title = '靛蓝椅子的小站'
            return args;
          })
      }
}