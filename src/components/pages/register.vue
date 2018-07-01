<template>
    <div>
        <van-nav-bar 
            title="用户注册"
            left-text="返回"
            left-arrow
            @click-left="goBack"
        />
        <div class="register-panel">
            <van-field 
                v-model="userName"
                label="用户名"
                icon="clear"
                placeholder="请输入用户名"
                required
                @click-icon="userName=''"
            />
            <van-field 
                v-model="passWord"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
            />
            <div class="register-button">
                <van-button type="primary" @click="axiosRegister()" size="large" :loading="openLoding">马上注册</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import url from '@/serviceAPI.config.js';
    import {Toast} from 'vant'
    export default {
        data() {
            return {
                userName: '',
                passWord:'',
                openLoding:false  //是否开启注册的loading状态
            }
        },
        methods:{
            goBack:function(){
                this.$router.go(-1);
            },
            axiosRegister(){
                this.openLoding=true;
                axios({
                    url:url.registerUser,
                    method:"post",
                    data:{
                        userName:this.userName,
                        password:this.passWord
                    }
                }).then(response=>{
                    if(response.data.code == 200){
                        this.$router.push('/')
                        Toast.success(response.data.message);
                    }else{
                        this.openLoding=false;
                        Toast.fail("注册失败");
                        console.log(response.data.message)
                    }
                }).catch((error)=>{
                    console.log(error)
                     Toast.fail("注册失败");
                     this.openLoding=false;
                })
            }
        }
    }
</script>

<style scoped>
    .register-panel{
        border-radius: 5px;
        width:96%;
        margin:20px auto;
        padding-bottom:80px;
    }
    .register-button{
        padding-top:10px;
        height:40;
        line-height:40px; 
    }
    
</style>