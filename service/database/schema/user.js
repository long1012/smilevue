const mongooes = require("mongoose");
const Schema = mongooes.Schema;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
let ObjeciId = Schema.Types.ObjectId;

//创建userschema
const userSchema = new Schema({
    UserId : ObjeciId,
    userName : {unique:true,type:String},
    password : String,
    createeAt:{type:Date,default:Date.now()},
    lastLongAt : {type:Date,default:Date.now()} 
},{
    collection:'user'  //在mongodb常见数据表时，会默认在末尾添加一个s，该方法可以去掉默认的s
})
userSchema.pre("save",function(next){
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt) =>{
        if(err) return next(err)
        bcrypt.hash(this.password,salt,(err,hash) =>{
            if (err) return next(err)
            this.password=hash
            next()
        })
    })
})
userSchema.method={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password, password,(err,isMatch)=>{
                if(!err){
                    resolve(isMatch)
                }else{
                    reject(err)
                }
            })
        })
    }
}




//发布模型
mongooes.model('User', userSchema)