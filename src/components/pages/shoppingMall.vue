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
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'shopping Mal',
                locationIcon:require('../../assets/images/location.png')
            }
        },
    }
</script>

<style scoped>
    .search-bar{
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
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
</style>