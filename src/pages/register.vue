<template>
    <div class="register">
         <headerContent></headerContent>
        <div class="loginContent">
            <div class="imgbox">
                <img src="../assets/images/logo1.png" alt="">
            </div>
            <div class="tab">
                <ul class="clear">
                    <li class="fl">
                        <span @click="select(1)" :class="{active : tabIndex == 1}">手机注册</span>
                    </li>
                    <li class="fl">
                        <span @click="select(2)" :class="{active : tabIndex == 2}">邮箱注册</span>
                    </li>
                </ul>
            </div>
            <div class="itembox" v-if="tabIndex == 1">
                <div class="item">
                    <input type="text" placeholder="请填写手机号码">
                </div>
                <div class="item">
                    <input type="text" placeholder="请填写密码">
                </div>
                <div class="item">
                    <input type="text" placeholder="确认密码">
                </div>
                <div class="item clear">
                    <input class="fl" type="text" placeholder="请填写手机验证码">
                    <span class="fr code">获取验证码</span>
                </div>
                <div class="item">
                    <input type="text" placeholder="请填邀请码（选填）">
                </div>
            </div>
            <div class="itembox" v-if="tabIndex == 2">
                <div class="item">
                    <input type="text" placeholder="请填写邮箱地址">
                </div>
                <div class="item">
                    <input type="text" placeholder="请填写密码">
                </div>
                <div class="item">
                    <input type="text" placeholder="确认密码">
                </div>
                <div class="item clear">
                    <input class="fl" type="text" placeholder="请填写邮箱验证码">
                    <span class="fr code">获取验证码</span>
                </div>
                <div class="item">
                    <input type="text" placeholder="请填邀请码（选填）">
                </div>
            </div>
            <div class="bottom">
                <button disabled="disabled">注 册</button>
            </div>
        </div>
    </div>
</template>

<script>
import headerContent from "@/components/headerContent"
export default {
    data() {
        return {
            tabIndex:1,
            
        }
    },
    methods: {
        select(index) {
            this.tabIndex = index
        }
    },
     components: {
        headerContent,
    },
}
</script>

<style scoped lang="less">
.register {
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
        padding: 36px 48px;
        width: 536px;
        box-sizing: border-box;
        .imgbox {
            text-align: center;
            img {
                width: 70px;
                height: 80px;
            }
        }

        .tab {
            ul {
                margin: 20px auto;
                width: 100%;
                text-align: center;
                padding: 0 30px;
                li {
                    color: #53627c;
                    font-size: 18px;
                    width: 50%;
                    span {
                        height: 30px;
                        display: inline-block;
                    }
                    span.active {
                        border-bottom: 2px solid #0a67ff;
                    }
                }
            }
        }

        .item {
            border-bottom: 1px solid #e5e5e5;
            color: #d6d6d6;
            font-size: 18px;
            padding: 12px 0;
            margin-bottom: 5px;
            .code {
                font-size: 14px;
                color: #0a67ff;
            }
        }

        .bottom {
            margin-top: 28px;
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
