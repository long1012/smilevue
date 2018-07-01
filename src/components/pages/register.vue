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
                <van-button type="primary" @click="registerAction()" size="large" :loading="openLoding">马上注册</van-button>
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
            registerAction(){
                if(this.checkForm()){
                    this.checkForm() && this.axiosRegister()
                }
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