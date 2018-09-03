<template>
    <div>
        <div class="navvar-div">
            <van-nav-bar title="购物车" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cartInfo: [],
                isEmpty:false
            }
        },
        created(){
            this.getCartInfo()
        },
        methods: {
            //得到购物车数据的方法
            getCartInfo() {
                if(localStorage.cartInfo){
                    this.cartInfo = JSON.parse(localStorage.cartInfo)
                }
                console.log(JSON.stringify(this.cartInfo)+'this.cartInfo')
                this.isEmpty=this.cartInfo.length > 0 ? true : false
            }
        },
    }
</script>

<style scoped>

</style>