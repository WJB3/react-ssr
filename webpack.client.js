const Path=require("path")

module.exports={
    entry:"./src/client/index.js",
    mode:"development",
    output:{
        filename:"index.js",
        path:Path.resolve(__dirname,'public')
    },
    module:{
        rules:[{
            test:/\.js?$/,
            loader:"babel-loader",
            exclude:/node_modules/
        }]
    }
}