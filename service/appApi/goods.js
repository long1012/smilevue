const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
let router = new Router()

const mongoose = require('mongoose')
const fs = require('fs')


router.get('/insertAllGoodsInfo', async (ctx) => {

    fs.readFile('./newGoods.json', 'utf8', (err, data) => {
        data = JSON.parse(data)
        let saveCount = 0
        const Goods = mongoose.model('Goods')
        data.map((value, index) => {
            console.log(value)
            let newGoods = new Goods(value)
            newGoods.save().then(() => {
                saveCount++
                console.log('成功' + saveCount)
            }).catch(error => {
                console.log('失败：' + error)
            })
        })


    })
    ctx.body = "开始导入数据"
})
router.get('/insertAllCategory', async (ctx) => {
    fs.readFile('./data_json/category.json', 'utf8', (err, data) => {
        data = JSON.parse(data)
        let saveCount = 0
        const Category = mongoose.model('Category')
        data.map((value, index) => {
            console.log(value)
            let newCategory = new Category(value)
            newCategory.save().then(() => {
                saveCount++
                console.log('成功' + saveCount)
            }).catch(error => {
                console.log('失败：' + error)
            })
        })


    })
    ctx.body = "开始导入数据......"

})
router.get('/insertAllCategorySub', async (ctx) => {
    fs.readFile('./category_sub.json', 'utf8', (err, data) => {
        console.log(data)
        data = JSON.parse(data)
        let saveCount = 0
        const CategorySub = mongoose.model('CategorySub')
        data.RECORDS.map((value, index) => {
            console.log(value)
            let newCategorySub = new CategorySub(value)
            newCategorySub.save().then(() => {
                saveCount++
                console.log('成功' + saveCount)
            }).catch(error => {
                console.log('失败：' + error)
            })
        })


    })
    ctx.body = "开始导入数据子数据......"

})
//获取商品详情信息的接口
router.post('/getDetailGoodsInfo',async(ctx)=>{
    let goodsId = ctx.request.body.goodsId
    const Goods = mongoose.model('Goods')
    await Goods.findOne({ID:goodsId}).exec()
    .then(async(result)=>{
        ctx.body={code:200,message:result}
    })
    .catch(error=>{
        console.log(error)
        ctx.body={code:500,message:error}
    })
})
//读取大类数据
router.get('/getCategoryList',async(ctx)=>{
    try{
        const Category = mongoose.model('Category')
        let result = await Category.find().exec()
        ctx.body = {code:200,message:result}
    }catch(error){
        ctx.body = {code:500,message:error}
    }
})
//读取小类的数据
router.post('/getCategorySubList', async (ctx) => {
    try {
        let catrgoryId = ctx.request.body.categoryId
        //let catrgoryId = 1
        const CategorySub = mongoose.model('CategorySub')
        let result = await CategorySub.find({ MALL_CATEGORY_ID: catrgoryId}).exec()
        ctx.body = { code: 200, message: result }
    } catch (error) {
        ctx.body = { code: 500, message: error }
    }
})
//根据类别获取商品列表
router.post('/getGoodsListBycategorySubId', async (ctx) => {
    try {
        let categorySubId = ctx.request.body.categorySubId   //子类ID
        let page = ctx.request.body.page    //当前页数
        let num = 10                //每页显示数量
        let start = (page - 1) * num    //开始位置


        const Goods = mongoose.model('Goods')
        let result = await Goods.find({ SUB_ID: categorySubId })
        .skip(start).limit(num).exec()
        ctx.body = { code: 200, message: result }
    } catch (error) {
        ctx.body = { code: 500, message: error }
    }
})
module.exports = router;