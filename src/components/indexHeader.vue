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
                    <li class="fl" v-for="(item,index) in navList" :key="index" :class="{ active : tabIndex == item.id }">
                        <a  @click="changeTabsEvt(item)" :class="{ active : tabIndex == item.id }">{{item.name }}</a>
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
                id: '1',
                url: 'index',
                anchor: '#slideshow'
            }, {
                name: '虚拟币支付',
                id: '2',
                url: 'flash',
                anchor: '#slideshow'
            }, {
                name: '开发文档',
                id: '3',
                url: 'videoIndex',
                anchor: '#port'
            }, {
                name: '常见问题',
                id: '4',
                url: 'wallet',
                anchor: '#common'
            }, {
                name: '收费方式',
                id: '5',
                url: 'app',
                anchor: '#charge'
            }],
            tabIndex: 1,

        }
    },
   
    methods: {
        changeTabsEvt(item) {
            this.tabIndex = item.id
            document.querySelector(item.anchor).scrollIntoView(true);
        },

    },
    watch: {

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
    background-color: #fff;
    z-index: 1;
    .content {
        height: 100%;
        line-height: 80px;
        padding: 0 30px;
        .logo {
            width: 150px;
            height: 36px;
            background: url("../assets/images/logo_icon1.png") no-repeat;
            background-size: 100% 100%;
            margin-top: 22px;
        }
        .btn {
            li {
                font-size: 14px;
                color: #53627c;
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
                color: #fff;
            }
        }
        .nav {
            li {
                width: 86px;
                height: 80px;
                text-align: center;
                a {
                    color: #53627c;
                    font-size: 16px;
                }
                a.active {
                    color: #0a67ff;
                }
            }
            li.active {
                border-top: 4px solid #0a67ff;
                line-height: 72px;
            }
        }
    }
}
</style>
