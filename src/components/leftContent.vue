<template>
    <div class="leftCount">
        <div class="userInfo">
            <div class="userHeader">
                <p>UID：121231
                    <span class="member">普通会员</span>
                </p>
                <p>到期时间：</p>
                <p>最近登录：2019-08-21 20:00:00</p>
            </div>
            <div class="infoBody">
                <p class="clear">
                    邮箱认证：
                    <span class="left ">73***@qq.com </span>
                    <span class="right fr">已认证</span>
                </p>
                <p class="clear">
                    手机认证：
                    <span class="left ">
                        未设置
                    </span>
                    <span class="right fr">
                        立即认证
                    </span>
                </p>
                <p class="clear">
                    安全密码：
                    <span class="left "> 未设置</span>
                    <span class="right fr">
                        去设置
                    </span>
                </p>
                <p class="clear">
                    登录密码：
                    <span class="left ">未设置 </span>
                    <span class="right fr">
                        修改
                    </span>
                </p>
                <div class="btn">
                    <el-button type="primary" size="small">退出登录</el-button>
                </div>
            </div>
        </div>
        <div class="qqGroup">
            <p class="group_title">
                <img src="../assets/images/user.png" alt=""> QQ交流群
            </p>
            <div class="qq_count">
                <p class="qq_count_title">进群请备注账号UID</p>
                <div class="qq_code">
                    <img src="../assets/images/wc.jpeg" alt="">
                </div>
                <p class="scan">扫一扫二维码加入群聊</p>
            </div>
        </div>
        <div class="qqGroup">
            <p class="group_title">
                <img src="../assets/images/browser.png" alt=""> 区块浏览器
            </p>
            <ul class="nav clear">
                <li>
                    <a class="active">BTC</a>
                </li>
                <li>
                    <a>USDT</a>
                </li>
                <li>
                    <a>ETH</a>
                </li>
                <li>
                    <a>VDS</a>
                </li>
            </ul>
            <div class="banner">
                <img src="../assets/images/b1.png" alt="">
            </div>
            <div class="btn">
                <el-button type="primary" size="small">更多浏览器 »</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped lang="less">
.leftCount {
    width: 291px;
    .userInfo {
        width: 291px;
        height: 356px;
        box-shadow: 0px 2px 4px rgba(232, 232, 232, 0.4);
        background: rgba(255, 255, 255, 1);
        .userHeader {
            padding: 30px;
            background: #0a67ff;
            color: #fff;
            font-size: 16px;
            p {
                margin: 0 0 10px;
                .member {
                    background: #ff624f;
                    color: #fff;
                    font-size: 12px;
                    padding: 4px 10px;
                    border-radius: 2px;
                    margin-left: 12px;
                }
            }
        }
        .infoBody {
            padding: 30px 20px;
            p {
                font-size: 14px;
                color: #333333;
                margin-bottom: 8px;
                .left {
                    color: #a5a6aa;
                }
                .right {
                    color: #1a5e86;
                }
            }
        }
        .btn {
            margin-top: 14px;
            text-align: center;
        }
    }
    .qqGroup {
        margin-top: 20px;
        padding: 15px;
        background-color: #fff;
        .group_title {
            color: #172743;
            font-size: 20px;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 10px;
            img {
                width: 20px;
                height: 20px;
                vertical-align: middle;
                margin-right: 12px;
            }
        }
        .qq_count {
            text-align: center;
            padding: 16px 0 36px;
            .qq_count_title {
                color: #333333;
            }
            .qq_code {
                width: 117px;
                height: 117px;
                margin: 24px auto 16px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .scan {
                color: #a5a6aa;
                font-size: 12px;
            }
        }
        .nav {
            margin: 16px 0;
            li {
                float: left;
                margin-right: 24px;

                a {
                    padding: 0;
                    height: 26px;
                    line-height: 26px;
                    width: 46px;
                    text-align: center;
                    font-size: 10px;
                    color: #fff;
                    background: #1A1A1A;
                     display: block;
                }
                a.active {
                    background-color: #0A67FF;
                }
            }
            li:last-child{
                margin-right: 0;
            }
        }
        .banner {
            width: 255px;
            height: 180px;
            margin:  24px 0 24px 0;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .btn {
            text-align: center;
        }
    }
}
</style>
