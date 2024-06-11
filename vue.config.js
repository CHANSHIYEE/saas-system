module.exports={
  devServer:{
    port:8088,
    host:'localhost'
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
 lintOnSave:false
})
