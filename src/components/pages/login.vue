<template>
    <div>
        <van-nav-bar 
            title="登录"
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
                :error-message="usernameErrorMsg"
            />
            <van-field 
                v-model="passWord"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                :error-message="passwordErrorMsg"
            />
            <div class="register-button">
                <van-button type="primary" @click="loginAction()" size="large" :loading="openLoding">登录</van-button>
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
                openLoding:false,  //是否开启注册的loading状态
                usernameErrorMsg:'',   //当用户名出现错误的时候
                passwordErrorMsg:'',   //当密码出现错误的时候
            }
        },
        methods:{
            goBack:function(){
                this.$router.go(-1);
            },
            loginAction(){
                if(this.checkForm()){
                    this.checkForm() && this.axiosLogin()
                }
            },
            axiosLogin(){
                this.openLoding=true;
                axios({
                    url:url.login,
                    method:"post",
                    data:{
                        userName:this.userName,
                        password:this.passWord
                    }
                }).then(response=>{
                    if(response.data.code == 200 && response.data.message){
                        Toast.success('登录成功')
                        this.$router.push('/')
                    }else{
                        Toast.fail("登录失败");
                        this.openLoding=false;
                    }
                }).catch((error)=>{
                    alert(error)
                    Toast.fail("登录失败");
                    this.openLoding=false;
                })
            },
            //表单验证方法
            checkForm(){
                let isOk= true
                if(this.userName.length<5){
                    this.usernameErrorMsg="用户名不能小于5位"
                    isOk= false
                }else{
                    this.usernameErrorMsg=''
                }
                if(this.passWord.length<6){
                    this.passwordErrorMsg="密码不能少于6位"
                    isOk= false
                }else{
                    this.passwordErrorMsg=''
                }
                return isOk
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