<template>
    <div class="index">
        <!-- 头部 -->
        <indexHeader></indexHeader>

        <!-- 轮播 -->
        <div class="slideshow" id="slideshow">
            <div class="block">
                <el-carousel height="610px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <!-- <h3 class="small">{{ item }}</h3> -->
                        <div class="img_box">
                            <img src="../assets/images/banner.png" alt="">
                        </div>
                        <div class="cont">
                            <div class="cont_name clear">
                                <div class="clear cont_name_box">
                                    <span class="circle fl"></span>
                                    <span class="ydc fl">YDC</span>
                                    <span class="virtual fl">虚拟币</span>
                                </div>
                            </div>
                            <p class="cont_title">开放式API接口对接各种应用场景</p>
                            <p class="subheading">基于区块链的分布式记账体系 通道永不被冻结</p>
                            <div class="btn">马上注册获取接口</div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>

        <!-- 产品介绍 -->
        <div class="product" id="product">
            <div class="product_box">
                <div class="product_title">
                    <div class="line"></div>
                    <div class="product_headline clear">
                        <div class="clear" style="width:150px;margin:0 auto 60px">
                            <img class="fl" src="../assets/images/intersperse.png" alt="">
                            <h2 class="fl">产品介绍</h2>
                        </div>
                        <p class="subhead">提供BTC、ETH、USDT、EOS、LTC、XRP、ETZ、VDS-Vollar等主流 虚拟币API接口， 迅速接入数字货币支付、收款、打款、充提币。</p>
                    </div>
                </div>
                <div class="list w">
                    <el-row>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <div class="img_one">
                                    <img src="../assets/images/btc_icon.png" alt="">
                                </div>
                                <p class="aisle">BTC支付通道</p>
                                <p class="txt">比特币API接口钱包 交易所对接
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <div class="img_one">
                                    <img src="../assets/images/btc_icon.png" alt="">
                                </div>
                                <p class="aisle">BTC支付通道</p>
                                <p class="txt">比特币API接口钱包 交易所对接
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <div class="img_one">
                                    <img src="../assets/images/btc_icon.png" alt="">
                                </div>
                                <p class="aisle">BTC支付通道</p>
                                <p class="txt">比特币API接口钱包 交易所对接
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <div class="img_one">
                                    <img src="../assets/images/btc_icon.png" alt="">
                                </div>
                                <p class="aisle">BTC支付通道</p>
                                <p class="txt">比特币API接口钱包 交易所对接
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <div class="img_one">
                                    <img src="../assets/images/btc_icon.png" alt="">
                                </div>
                                <p class="aisle">BTC支付通道</p>
                                <p class="txt">比特币API接口钱包 交易所对接
                                </p>
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="grid-content bg-purple">
                                <div class="img_one">
                                    <img src="../assets/images/btc_icon.png" alt="">
                                </div>
                                <p class="aisle">BTC支付通道</p>
                                <p class="txt">比特币API接口钱包 交易所对接
                                </p>
                            </div>
                        </el-col>

                    </el-row>
                </div>
            </div>
        </div>

        <!-- 接口方法 -->
        <div class="port w" id="port">
            <div class="port_box clear">
                <div class="port_left fl">
                    <div class="line"></div>
                    <div class="img_file clear">
                        <img class="fl" src="../assets/images/intersperse.png" alt="">
                        <h2 class="fl">开发文档</h2>
                    </div>
                    <p class="text">请登录会员中心，查看API 及开发文档,下载SDK
                    </p>
                    <p class="text1">接口为HTTP请求接口。支持PHP、 java、.net、jsp、js、c\c++\c# 对 接方便，操作简单。
                    </p>
                    <div class="btn">
                        会员查看更多
                    </div>
                </div>
                <div class="port_right fr">
                    <div class="port_right_titel clear">
                        <span class="line fl"></span>
                        <span class="name fl">API接口方法POST</span>
                        <span class="line fr"></span>
                    </div>
                    <div class="list">
                        <ul>
                            <li>>创建地址 [get_address]</li>
                            <li>>创建地址 [get_address]</li>
                            <li>>创建地址 [get_address]</li>
                            <li>>创建地址 [get_address]</li>
                            <li>>创建地址 [get_address]</li>
                            <li>>创建地址 [get_address]</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- 常见问题 -->
        <div class="common w" id="common">
            <div class="line"></div>
            <div class="common_box">
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple">
                            <div class="common_box_item clear">
                                <img class="fl" src="../assets/images/intersperse.png" alt="">
                                <h2 class="fl">常见问题</h2>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">
                            <div class="common_box_title clear">
                                <div class="circle fl">1</div>
                                <h2 class="fl">YDC支付平台交易有手续费吗？</h2>
                            </div>
                            <div class="cont">
                                <p>1、ZtPay平台交易没有额外手续费。</p>
                                <p>2、区块网络交易会收取交易手续费。例如：BTC、USDT、ETH。</p>
                                <p>3、具体手续费多少，区块网络根据当前交易量自动计算。例如：BTC手续费0.0002-0.0004上下。</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">
                            <div class="common_box_title clear">
                                <div class="circle fl">2</div>
                                <h2 class="fl">YDC支付平台交易有手续费吗？</h2>
                            </div>
                            <div class="cont">
                                <p>1、ZtPay平台交易没有额外手续费。</p>
                                <p>2、区块网络交易会收取交易手续费。例如：BTC、USDT、ETH。</p>
                                <p>3、具体手续费多少，区块网络根据当前交易量自动计算。例如：BTC手续费0.0002-0.0004上下。</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">
                            <div class="common_box_title clear">
                                <div class="circle fl">2</div>
                                <h2 class="fl">YDC支付平台交易有手续费吗？</h2>
                            </div>
                            <div class="cont">
                                <p>1、ZtPay平台交易没有额外手续费。</p>
                                <p>2、区块网络交易会收取交易手续费。例如：BTC、USDT、ETH。</p>
                                <p>3、具体手续费多少，区块网络根据当前交易量自动计算。例如：BTC手续费0.0002-0.0004上下。</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">
                            <div class="common_box_title clear">
                                <div class="circle fl">2</div>
                                <h2 class="fl">YDC支付平台交易有手续费吗？</h2>
                            </div>
                            <div class="cont">
                                <p>1、ZtPay平台交易没有额外手续费。</p>
                                <p>2、区块网络交易会收取交易手续费。例如：BTC、USDT、ETH。</p>
                                <p>3、具体手续费多少，区块网络根据当前交易量自动计算。例如：BTC手续费0.0002-0.0004上下。</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light">
                            <div class="common_box_title clear">
                                <div class="circle fl">2</div>
                                <h2 class="fl">YDC支付平台交易有手续费吗？</h2>
                            </div>
                            <div class="cont">
                                <p>1、ZtPay平台交易没有额外手续费。</p>
                                <p>2、区块网络交易会收取交易手续费。例如：BTC、USDT、ETH。</p>
                                <p>3、具体手续费多少，区块网络根据当前交易量自动计算。例如：BTC手续费0.0002-0.0004上下。</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>

        <!-- 收费方式 -->
        <div class="product charge" id="charge">
            <div class="product_box">
                <div class="product_title">
                    <div class="line"></div>
                    <div class="product_headline clear">
                        <div class="clear" style="width:150px;margin:0 auto 60px">
                            <img class="fl" src="../assets/images/intersperse.png" alt="">
                            <h2 class="fl">收费方式</h2>
                        </div>
                        <p class="subhead">
                            开通接口联系客服：
                            <span class="qq_number">
                                QQ 746004469
                            </span>
                        </p>
                        <p class="subhead">
                            支持收币通知 、支持导出私钥 、免费收币提币
                        </p>
                    </div>
                </div>
                <div class="list w charge_list clear" style="margin-top:70px;">
                    <el-col :span="8">
                        <div class="grid-content bg-purple charge_list_li ">
                            <div class="img_one1 ">
                                <img src="../assets/images/vip.png" alt="">
                            </div>
                            <p class="register">注册会员</p>
                            <p class="site">BTC 30个地址、USDT30个地址 ETH 30个地址、ETZ 30个地址
                            </p>
                            <p class="prive">0
                                <span class="year">元/年</span>
                            </p>
                            <p class="site">支持30个用户，一个地址绑定一个会员，免费收币、提币、转账</p>
                            <div class="btn">立即订购</div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple charge_list_li ">
                            <div class="img_one1 ">
                                <img src="../assets/images/vip1.png" alt="">
                            </div>
                            <p class="register">注册会员</p>
                            <p class="site">BTC 30个地址、USDT30个地址 ETH 30个地址、ETZ 30个地址
                            </p>
                            <p class="prive">0
                                <span class="year">元/年</span>
                            </p>
                            <p class="site">支持30个用户，一个地址绑定一个会员，免费收币、提币、转账</p>
                            <div class="btn">立即订购</div>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple charge_list_li ">
                            <div class="img_one1 ">
                                <img src="../assets/images/vip2.png" alt="">
                            </div>
                            <p class="register">注册会员</p>
                            <p class="site">BTC 30个地址、USDT30个地址 ETH 30个地址、ETZ 30个地址
                            </p>
                            <p class="prive">0
                                <span class="year">元/年</span>
                            </p>
                            <p class="site">支持30个用户，一个地址绑定一个会员，免费收币、提币、转账</p>
                            <div class="btn">立即订购</div>
                        </div>
                    </el-col>
                </div>
                <div class="more">获取更多地址</div>
            </div>
        </div>

        <!-- 底部 -->
        <footerContent></footerContent>
    </div>
</template>

<script>
import indexHeader from "@/components/indexHeader"
import footerContent from "@/components/footerContent"
export default {
    data() {
        return {
            tabIndex: 1,

        }
    },
    components: {
        indexHeader,
        footerContent
    },
   
    methods: {
    
    },
   
}
</script>

<style scoped lang="less">
.index {
    background-color: #f4f9ff;
    position: relative;
    .slideshow {
        margin-top: 80px;
        height: 610px;
        .img_box {
            width: 100%;
            height: 610px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .cont {
            position: absolute;
            top: 140px;
            left: 50%;
            transform: translateX(-50%);
            .cont_name {
                .cont_name_box {
                    width: 400px;
                    margin: 0 auto;
                    span {
                        font-size: 54px;
                        font-weight: bold;
                    }
                    .circle {
                        width: 60px;
                        height: 60px;
                        background: rgba(228, 228, 228, 1);
                        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
                        border-radius: 50%;
                        margin-top: 10px;
                    }
                    .ydc {
                        color: #ffffff;
                        margin: 10px 20px;
                    }
                    .virtual {
                        color: #0a67ff;
                    }
                }
            }
            .cont_title {
                font-size: 60px;
                color: #fff;
                text-align: center;
                margin: 30px 0 14px;
            }
            .subheading {
                font-size: 30px;
                color: #fff;
                text-align: center;
            }
            .btn {
                font-size: 32px;
                color: #fff;
                font-weight: 500;
                background: rgba(10, 103, 255, 1);
                width: 392px;
                height: 88px;
                line-height: 88px;
                text-align: center;
                margin: 40px auto 0;
            }
        }
    }
    .product {
        .product_box {
            .product_title {
                .line {
                    width: 78px;
                    height: 4px;
                    background-color: #0a67ff;
                    text-align: center;
                    margin: 72px auto 60px;
                }
                img {
                    width: 36px;
                    height: 36px;
                    margin: 0px 20px 0 0;
                }
                .subhead {
                    color: #53627c;
                    width: 716px;
                    font-size: 22px;
                    text-align: center;
                    margin: 0 auto;
                    line-height: 36px;
                }
            }
            .list {
                margin-top: 90px;
                .grid-content {
                    padding-left: 46px;
                    margin-bottom: 90px;
                    .img_one {
                        width: 86px;
                        height: 86px;
                        background: rgba(255, 255, 255, 1);
                        box-shadow: 16px 12px 18px rgba(148, 182, 243, 0.3);
                        border-radius: 50%;
                        text-align: center;
                        margin-bottom: 88px;
                        margin: 0 auto;
                        img {
                            width: 86px;
                            height: 86px;
                        }
                    }
                    .aisle {
                        color: #142748;
                        font-size: 24px;
                        text-align: center;
                        margin: 20px 0 48px;
                    }
                    .txt {
                        color: #4f535f;
                        font-size: 20px;
                        width: 170px;
                        text-align: center;
                        margin: 0 auto;
                    }
                }
            }
        }
    }
    .port {
        height: 534px;
        box-shadow: 0px 12px 19px 11px rgba(148, 182, 243, 0.3);
        margin-bottom: 146px;
        padding: 60px 65px 60px 60px;
        background-color: #fff;
        .port_box {
            .port_left {
                width: 235px;
                .line {
                    width: 78px;
                    height: 4px;
                    background: rgba(10, 103, 255, 1);
                    margin: 0 auto 60px;
                }
                .img_file {
                    margin-bottom: 60px;
                    img {
                        width: 36px;
                        height: 36px;
                        margin: 10px 20px;
                    }
                    h2 {
                        font-size: 38px;
                        color: #53627c;
                    }
                }
                .text {
                    font-size: 20px;
                    color: #53627c;
                    margin-bottom: 20px;
                }
                .text1 {
                    font-size: 14px;
                    color: #53627c;
                }
                .btn {
                    color: #0a67ff;
                    font-size: 20px;
                    width: 224px;
                    height: 52px;
                    border: 1px solid rgba(10, 103, 255, 1);
                    text-align: center;
                    line-height: 52px;
                    font-weight: 500;
                    margin-top: 60px;
                }
            }
            .port_right {
                width: 770px;
                .port_right_titel {
                    padding: 0 32px;
                    margin-bottom: 60px;
                    .line {
                        width: 204px;
                        height: 1px;
                        background: rgba(229, 229, 229, 1);
                        margin-top: 17px;
                    }
                    .name {
                        color: #53627c;
                        font-size: 26px;
                        padding: 0 40px;
                    }
                }
                .list {
                    line-height: 54px;
                    background: rgba(250, 250, 250, 1);
                    border: 1px solid rgba(229, 229, 229, 1);
                    li {
                        border-bottom: 1px solid rgba(229, 229, 229, 1);
                        padding-left: 24px;
                    }
                    li:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }
    .common {
        .grid-content {
            margin-bottom: 60px;
        }
        .line {
            width: 78px;
            height: 4px;
            background: rgba(10, 103, 255, 1);
            margin-bottom: 60px;
        }
        .common_box_item {
            img {
                width: 36px;
                height: 36px;
                margin-right: 20px;
                margin-top: 10px;
            }
            h2 {
                font-size: 38px;
                color: #53627c;
            }
        }
        .common_box_title {
            .circle {
                width: 38px;
                height: 38px;
                background: rgba(10, 103, 255, 1);
                border-radius: 50%;
                text-align: center;
                line-height: 38px;
                color: #ffffff;
                font-size: 24px;
                margin-right: 28px;
            }
            h2 {
                line-height: 38px;
            }
        }
        .cont {
            padding-left: 66px;
            font-size: 14px;
            color: #53627c;
            p {
                line-height: 30px;
            }
        }
    }
    .charge {
        .qq_number {
            color: #0a67ff;
            font-size: 22px;
        }

        .charge_list {
            padding: 40px 40px 44px 40px;
            .img_one1 {
                margin: 0 auto;
                width: 60px;
                text-align: center;
                img {
                    width: 60px;
                    height: 60px;
                }
            }
            .register {
                color: #333453;
                font-size: 18px;
                text-align: center;
                margin: 16px 0 36px;
            }
            .site {
                color: #a5a6aa;
                font-size: 16px;
            }
            .prive {
                color: #f71a1a;
                font-size: 40px;
                text-align: center;
                margin: 40px 0;
                .year {
                    font-size: 16px;
                }
            }
            .charge_list_li {
                border: 1px solid rgba(222, 226, 237, 1);
                width: 320px;
                padding: 40px 40px 44px;
            }
            .btn {
                width: 230px;
                height: 60px;
                background: rgba(10, 103, 255, 1);
                color: #ffffff;
                font-size: 20px;
                text-align: center;
                line-height: 60px;
                margin-top: 48px;
            }
        }
        .more {
            width: 224px;
            height: 52px;
            border: 1px solid rgba(10, 103, 255, 1);
            color: #0A67FF;
            font-size: 20px;
            line-height: 52px;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 100px;
        }
    }
}
</style>
<style lang="less">
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.index .slideshow {
    .el-carousel__button {
        height: 6px;
        width: 40px;
    }
    .el-carousel__indicator.is-active button {
        background-color: #0a67ff;
    }
}
</style>