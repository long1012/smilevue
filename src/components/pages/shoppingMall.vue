<template>
    <div>
        <div class="search-bar">
            <van-row class="test-row">
                <van-col span="3">
                    <img :src="locationIcon" alt="" width="80%" class="location-icon">
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input"/>
                </van-col>
                <van-col span="5" class="btn-fine">
                    <van-button size="mini">查找</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- swiper -->
        <div class="swiper">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(banner,index) in bannerPic" :key="index">
                    <img v-lazy="banner.image" alt="" width="100%"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type bar -->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key="index">
                <img v-lazy="cate.image" width="90%"><br />
                {{cate.mallCategoryName}}
            </div>
        </div>
        <!-- adBanner area-->
        <div>
            <img v-lazy="adBanner" width="100%">
        </div>
        <!-- recommend goods area -->
        <div class="recommend-area">
            <div class="recommend-title">商品推介</div>
            <div class="recommend-body">
                <swiper :options="swiperOptions">
                    <!-- 绑定一屏显示几个产品，swiperOptions在data中定义 -->
                    <swiper-slide v-for="(item,index) in recommendGoods" :key=index>
                        <div class="recommend-item">
                            <img :src="item.image" alt="" width="80%">
                            <div>{{item.goodsName}}</div>
                            <div>¥{{item.price}}(¥{{item.mallPrice}})</div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <Floor :floorData="floor1" :floorTitle="floorName.floor1"></Floor>
        <Floor :floorData="floor2" :floorTitle="floorName.floor2"></Floor>
        <Floor :floorData="floor3" :floorTitle="floorName.floor3"></Floor>
    </div>
</template>

<script>
    import axios from 'axios'
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    import Floor from '../component/floor.vue'
    export default {
        data() {
            return {
                swiperOptions:{
                    slidesPerView:3
                },
                locationIcon:require('../../assets/images/location.png'),
                bannerPic:[],
                category:[],
                adBanner:'',
                recommendGoods:[],
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:{}
            }
        },
        components:{
            swiper,
            swiperSlide,
            Floor
        },
        created(){
            axios({
                url:'https://www.easy-mock.com/mock/5ae42225e3aaf3049f067466/smilevue/index',
                method:'get'
            }).then(response=>{
               let res=response.data.data;
                console.log(response);
                if(response.status==200){
                    this.category=res.category;
                    this.adBanner=res.advertesPicture.PICTURE_ADDRESS
                    this.bannerPic=res.slides;
                    this.recommendGoods=res.recommend;
                    this.floor1=res.floor1;
                    this.floor2=res.floor2;
                    this.floor3=res.floor3;
                    this.floorName=res.floorName;
                }
            }).catch(error=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    .search-bar{
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width:100%;
        height: 1.3rem;
        border:0;
        border-bottom: 1px solid #fff !important;
        background: #e5017d;
        color:#fff;
    }
    .location-icon{
        padding-left: .3rem;
        padding-top:.15rem;

    }
    .btn-fine{
        text-align: center;
    }
    .swiper{
        clear:both;
        max-height: 15rem;
        overflow: hidden;
    }
    .type-bar{
        background-color: #fff;
        margin:0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size:14px;
        display:flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .type-bar div{
        padding:.3rem;
        font-size:12px;
        text-align: center;
    }
    .recommend-area{
        background-color: #fff;
        margin-top:.3rem;
    }
    .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        padding:.2rem;
        color: #e5017d
    }
    .recommend.body{
        border-bottom: 1px solid #eee;

    }
    .recommend-item{
        width:99%;
        border-right:1px solid #eee;
        font-size:12px;
        text-align: center;
    }
    
</style>