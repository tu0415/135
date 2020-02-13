<template>
    <div class="header">
        <div class="content clear">
            <div class="logo fl"></div>
            <div class="btn fr">
                <ul class="clear">
                    <li class="">
                        <span>登录</span>
                    </li>
                    <li class="register" @click="$router.push({name:'register'})">
                        <span class="">注册</span>
                    </li>
                </ul>
            </div>
            <div class="nav fr">
                <ul class="clear">
                    <li class="fl" v-for="(item,index) in navList" :key="index">
                        <a href="javascript:;" @click="changeTabsEvt(item)" :class="{ active: item.active }">{{item.name }}</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [{
                name: '网站首页',
                id: 'index',
                url: 'index'
            }, {
                name: '虚拟币支付',
                id: 'flash',
                url: 'flash'
            }, {
                name: '开发文档',
                id: 'videoIndex',
                url: 'videoIndex'
            }, {
                name: '常见问题',
                id: 'wallet',
                url: 'wallet'
            }, {
                name: '收费方式',
                id: 'app',
                url: 'app'
            }],
        }
    },
    methods:{
        changeTabsEvt() {
            this.$router.push({name:'index'})
        }
    }
}
</script>

<style scoped lang="less">
.header {
    height: 80px;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.2);

    z-index: 1;
    .content {
        height: 100%;
        line-height: 80px;
        padding: 0 30px;
        .logo {
            width: 150px;
            height: 36px;
            background: url("../assets/images/logo.png") no-repeat;
            background-size: 100% 100%;
            margin-top: 22px;
        }
        .btn {
            li {
                font-size: 14px;
                color: #fff;
                width: 62px;
                height: 26px;
                border: 1px solid #fff;
                margin-top: 24px;
                display: inline;
                padding: 5px 10px;
                margin-left: 20px;
            }
            .register {
                background-color: #0a67ff;
                 border: 1px solid #0a67ff;
            }
        }
        .nav {
            li {
                width: 86px;
                height: 80px;
                text-align: center;
                a {
                    color: #fff;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>
