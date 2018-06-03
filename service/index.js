const Koa = require('koa')
const app = new Koa()
const { connect, initSchemas } = require("./database/init.js")
const mongoose = require('mongoose')

;(async()=>{
    await connect();
    initSchemas();
    const user=mongoose.model('user');
    let onUser = new user({userName:'xiaolong',password:'123456'});
    onUser.save().then(()=>{
        console.log('插入成功')
    })
})()
app.use(async (ctx) => {
    ctx.body = '<h1>hello Koa2</h1>'
})

app.listen(13000, () => {
    console.log('node success')
})
