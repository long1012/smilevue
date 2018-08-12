const BASEURL ="https://www.easy-mock.com/mock/5ae42225e3aaf3049f067466/smilevue/";
const LOCALURL = "http://localhost:9000/"
const URL={
    getShopingMallInfo: BASEURL+"index",     //首页接口信息
    getGoodsInfo:BASEURL+"goodsInfo",
    registerUser: LOCALURL + 'user/register', //用户注册接口
    login: LOCALURL + 'user/login' //用户登录接口
}


module.exports=URL