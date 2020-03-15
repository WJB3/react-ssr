const Path=require("path")
const nodeExternals=require("webpack-node-externals");

module.exports={
    target:"node",
    entry:"./src/server/index.js",
    mode:"development",
    output:{
        filename:"bundle.js",
        path:Path.resolve(__dirname,'build')
    },
    externals:[nodeExternals()],//配置以后 require引用的node_modules不会被打包，还会保存之前的引用形式https://www.cnblogs.com/fanqshun/p/10073493.html
    module:{
        rules:[{
            test:/\.js?$/,
            loader:"babel-loader",
            exclude:/node_modules/
        }]
    }
}