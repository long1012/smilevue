const BASEURL ="https://www.easy-mock.com/mock/5ae42225e3aaf3049f067466/smilevue/";
const LOCALURL = "http://localhost:3000/"
const URL={
    getShopingMallInfo: BASEURL+"index",     //首页接口信息
    getGoodsInfo:BASEURL+"goodsInfo",
    registerUser: LOCALURL + 'user/register', //用户注册接口
    login: LOCALURL + 'user/login', //用户登录接口
    getDetailGoodsInfo: LOCALURL + 'goods/getDetailGoodsInfo', //获取商品详情信息
    getCateGoryList: LOCALURL + 'goods/getCateGoryList', //获取大类信息
    getCategorySubList: LOCALURL + 'goods/getCategorySubList', //获取小类信息
    getGoodsListBycategorySubId: LOCALURL + 'goods/getGoodsListBycategorySubId' //得到小类商品信息

}


module.exports=URL