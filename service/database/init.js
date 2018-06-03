const mongoose=require("mongoose");
const db="mongodb://localhost/smile-db";
exports.connect=()=>{
    //链接数据库
    mongoose.connect(db);
    //增加数据哭监听事件
    mongoose.connection.on("disconnected",()=>{
        console.log("**********数据库已经断开")
        mongoose.connect(db);
    })
    //数据库错误
    mongoose.connection.on("error", () => {
        console.log("**********数据库错误")
        mongoose.connect(db);
    });
    //链接打开时
    mongoose.connection.on("open", () => {
        console.log("**********数据库链接成功")
    });
}
