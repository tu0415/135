<template>
    <div class="header">
        <div class="content clear">
            <div class="logo fl"></div>
            <div class="nav fr">
                <ul class="clear">
                    <li class="fl" v-for="(item,index) in navList" :key="index">
                        <a href="javascript:;" @click="changeTabsEvt(item.url,index)" :class="index == selectIndex ? 'active' : ''">{{item.name }}</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: ["selectIndex"],
    data() {
        return {
            navList: [{
                name: '首页',
                id: 'index',
                url: 'homePage'
            }, {
                name: 'Api管理',
                id: 'manageApi',
                url: 'manageApi'
            }, {
                name: '账户升级',
                id: 'account',
                url: 'account'
            }, {
                name: '地址管理',
                id: 'address',
                url: 'address'
            }, {
                name: '消息通知',
                id: 'message',
                url: 'message'
            }, {
                name: '帮助中心',
                id: 'helpCenter',
                url: 'helpCenter'
            },
            {
                name: '开通其他币',
                id: 'app',
                url: 'app'
            }
            ],
        }
    },
    methods: {
        changeTabsEvt(item, index) {
            if (index == this.selectIndex) {

                // location.reload();
                return false
            }
            this.$router.push(item);
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
    z-index: 10;
    background-color: #fff;
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
                color: #fff;
                width: 62px;
                height: 26px;
                border: 1px solid #fff;
                margin-top: 24px;
                display: inline;
                padding: 5px 10px;
                margin-left: 20px;
            }
        }
        .nav {
            li {
                width: 86px;
                height: 80px;
                a {
                    color: #53627c;
                    font-size: 14px;
                }
                a.active {
                    color: #0a67ff;
                }
            }
        }
    }
}
</style>
