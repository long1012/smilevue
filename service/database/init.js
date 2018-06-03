const mongoose=require("mongoose");
const db="mongodb://localhost/smilevue";
const glob = require('glob');
const {resolve} =require('path');
exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}

exports.connect=()=>{
    //链接数据库
    mongoose.connect(db);
    let maxConnectTime=0;
    return new Promise((resolve,reject)=>{
        //增加数据哭监听事件
        mongoose.connection.on("disconnected", () => {
            console.log("**********数据库已经断开")
            if (maxConnectTime<=3){
                maxConnectTime++;
                mongoose.connect(db);
            }else{
                resolve();
                throw new Error("数据库出现问题，程序无法搞定，请人为处理")
            }    
        })
        //数据库错误
        mongoose.connection.on("error", (error) => {
            console.log("**********数据库错误")
            mongoose.connect(db);
            if (maxConnectTime <= 3) {
                maxConnectTime++;
                mongoose.connect(db);
            } else {
                resolve(error);
                throw new Erroe("数据库出现问题，程序无法搞定，请认为处理")
            }    
        });
        //链接打开时
        mongoose.connection.on("open", () => {
            console.log("**********数据库链接成功")
            resolve()
        });
    });

}
