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
                <img v-lazy="cate.image" width="90%">
                {{cate.mallCategoryName}}
            </div>
        </div>
        <!-- adBanner area-->
        <div>
            <img v-lazy="adBanner" width="100%">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                locationIcon:require('../../assets/images/location.png'),
                bannerPic:[],
                category:[],
                adBanner:'',
            }
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
</style>