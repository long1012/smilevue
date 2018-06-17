const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require("./database/init.js")
const mongoose = require('mongoose')

const Router = require('koa-router')
let user = require('./appApi/user.js')

//装在所有子路由
let router = new Router()
router.use('/user',user.routes());
//加载路由中间件

app.use(router.routes())
app.use(router.allowedMethods())


;(async()=>{
    await connect();
    initSchemas();
    const user=mongoose.model('user');
    let onUser = new user({userName:'xiaolong3',password:'123456'});
    onUser.save().then(()=>{
        console.log('插入成功')
    })
})()
app.use(async (ctx) => {
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(3000, () => {
    console.log('node success')
})
