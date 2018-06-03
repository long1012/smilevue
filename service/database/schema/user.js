const mongooes = require("mongoose");
const Schema = mongooes.Schema;

let ObjeciId = Schema.Types.ObjectId;

//创建userschema
const userSchema = new Schema({
    UserId : ObjeciId,
    userName : {unique:true,type:String},
    password : String,
    createeAt:{type:Date,default:Date.now()},
    lastLongAt : {type:Date,default:Date.now()} 
})

//发布模型
mongooes.model('user', userSchema)