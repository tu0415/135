<template>
    <div class="login">

        <headerContent></headerContent>
        <div class="loginContent">
            <div class="imgbox">
                <img src="../assets/images/logo1.png" alt="">
            </div>
            <div class="item">
                <img src="../assets/images/user_icon.png" alt="">
                <input type="text" placeholder="用户名">
            </div>
            <div class="item clear">
                <img class="fl" src="../assets/images/password_icon.png" alt="">
                <input class="fl" :type="flag == true?'password':'text'" placeholder="密码">
                <div class="eye fr" :class="flag == true?'hide':'show'" @click="changType"></div>
            </div>
            <p class="forget">忘记密码 ?</p>
            <div class="bottom">
                <button disabled="disabled">登 录</button>
            </div>
        </div>
    </div>
</template>

<script>
import headerContent from "@/components/headerContent"
export default {
    data() {
        return {
            flag: true
        }
    },
    methods: {
        changType() {
            this.flag = !this.flag
        }
    },
     components: {
        headerContent,
    },
}
</script>

<style scoped lang="less">
.login {
    width: 100%;
    height: 100%;
    background: url("../assets/images/login_bg.png") no-repeat;
    background-size: 100% 100%;
    min-height: 840px;
    position: relative;
    .loginContent {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        margin: 0 auto;
        background-color: #fff;
        padding: 56px 48px;
        width: 536px;
        box-sizing: border-box;
        .imgbox {
            text-align: center;
            img {
                width: 70px;
                height: 80px;
            }
        }
        .item {
            border-bottom: 1px solid #e5e5e5;
            margin-top: 40px;
            padding-bottom: 10px;
            img {
                width: 20px;
                height: 20px;
                margin-right: 12px;
            }
            input {
                border: none;
                font-size: 18px;
                color: rgba(83, 98, 124, 0.9);
                width: 80%;
            }
            .eye {
                width: 20px;
                height: 20px;
            }
            .show {
                background: url("../assets/images/eye_icon.png") no-repeat;
                background-size: 100% 100%;
            }
            .hide {
                background: url("../assets/images/eye_icon1.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .forget {
            color: #0a67ff;
            font-size: 14px;
            margin: 10px 0 40px;
        }
        .bottom {
            width: 100%;
            height: 62px;
            text-align: center;
            line-height: 62px;
            background-color: #0a67ff;
            button {
                font-size: 24px;
                color: #fff;
            }
        }
    }
}
</style>
