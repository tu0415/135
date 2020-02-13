<template>
    <div class="mange">
        <!-- 头部 -->
        <manageHeader v-bind:selectIndex="2"></manageHeader>

        <!-- 主体内容 -->
        <div class="mangeContent">
            <div class="box w">
                <div class="box_content clear w">
                    <!-- 左侧内容 -->
                    <leftContent class="fl"></leftContent>
                    <div class="box_content_right fr">
                        <!-- tab栏 -->
                        <div class="banner">
                            <img src="../assets/images/banner1.png" alt="">
                        </div>

                        <!-- 右侧内容 -->
                        <div class="cont_box">
                            <div class="cont_box_title">
                                <ul class="clear tab_ul">
                                    <li class="fl" style="width:124px">
                                        会员等级
                                    </li>
                                    <li class="fl" style="width:89px">
                                        API密钥
                                    </li>
                                    <li class="fl" style="width:322px">
                                        VIP权限
                                    </li>
                                    <li class="fl" style="width:135px">
                                        VIP价格
                                    </li>
                                    <li class="fl" style="width:165px">
                                        <p>开通方式</p>
                                        <p>QQ：879765490</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="list">
                                <ul>
                                    <li class="one disJcsbAc">
                                        <div class="grade flexAI" style="width:112px">
                                            <img src="../assets/images/vip.png" alt="">
                                            <p>普通会员</p>
                                        </div>
                                        <p class="flex" style="width:89px">1个</p>
                                        <div class="currency">
                                            <ul class="flex">
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                            </ul>
                                        </div>
                                        <div class="flex flexdcolumn price_box" style="width:135px">
                                            <p class="num">123</p>
                                            <p class="year">元/年</p>
                                        </div>
                                        <div class="flex btn_box " style="width:165px">
                                            <div class="flex btn_dredge red">2123</div>
                                        </div>
                                    </li>
                                    <li class="one disJcsbAc">
                                        <div class="grade flexAI" style="width:112px">
                                            <img src="../assets/images/vip.png" alt="">
                                            <p>普通会员</p>
                                        </div>
                                        <p class="flex" style="width:89px">1个</p>
                                        <div class="currency">
                                            <ul class="flex">
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                            </ul>
                                        </div>
                                        <div class="flex flexdcolumn price_box" style="width:135px">
                                            <p class="num">123</p>
                                            <p class="year">元/年</p>
                                        </div>
                                        <div class="flex btn_box " style="width:165px">
                                            <div class="flex btn_dredge red">2123</div>
                                        </div>
                                    </li>
                                    <li class="one disJcsbAc">
                                        <div class="grade flexAI" style="width:112px">
                                            <img src="../assets/images/vip.png" alt="">
                                            <p>普通会员</p>
                                        </div>
                                        <p class="flex" style="width:89px">1个</p>
                                        <div class="currency">
                                            <ul class="flex">
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                            </ul>
                                        </div>
                                        <div class="flex flexdcolumn price_box" style="width:135px">
                                            <p class="num">123</p>
                                            <p class="year">元/年</p>
                                        </div>
                                        <div class="flex btn_box " style="width:165px">
                                            <div class="flex btn_dredge red">2123</div>
                                        </div>
                                    </li>
                                    <li class="one disJcsbAc">
                                        <div class="grade flexAI" style="width:112px">
                                            <img src="../assets/images/vip.png" alt="">
                                            <p>普通会员</p>
                                        </div>
                                        <p class="flex" style="width:89px">1个</p>
                                        <div class="currency">
                                            <ul class="flex">
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                                <li class="flex">BTC：30</li>
                                            </ul>
                                        </div>
                                        <div class="flex flexdcolumn price_box" style="width:135px">
                                            <p class="num">123</p>
                                            <p class="year">元/年</p>
                                        </div>
                                        <div class="flex btn_box " style="width:165px">
                                            <div class="flex btn_dredge red">2123</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <footerContent></footerContent>
    </div>
</template>

<script>
import manageHeader from "@/components/manageHeader"
import footerContent from "@/components/footerContent"
import leftContent from "@/components/leftContent"
export default {
    data() {
        return {

        }
    },
    components: {
        manageHeader,
        footerContent,
        leftContent,
    },
    methods: {


    },
}
</script>

<style scoped lang="less">
.mange {
    position: relative;
    padding: 15px 0 0px;

    .mangeContent {
        height: 100%;
        box-sizing: border-box;
        background-color: #f4f9ff;
        .box {
            padding: 80px 0 90px 0;
            box-sizing: border-box;
            .box_content_right {
                width: 897px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .cont_box {
                padding: 16px 30px;
                background-color: #fff;
                margin-top: 20px;
                .cont_box_title {
                    .tab_ul {
                        border-bottom: 1px solid #0a67ff;
                        li {
                            border: 1px solid rgba(222, 226, 237, 1);
                            border-right: none;
                            color: #53627c;
                            font-size: 16px;
                            height: 48px;
                            line-height: 48px;
                            text-align: center;
                            p {
                                line-height: 24px;
                            }
                        }
                        li:last-child {
                            border-right: 1px solid rgba(222, 226, 237, 1);
                        }
                    }
                }
                .list {
                    .one {
                    margin-top: 16px;
                        width: 836px;
                        height: 206px;
                        background: rgba(255, 255, 255, 1);
                        box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.08);
                        // padding: 54px 32px 54px 36px;
                    }
                    li.one {
                        border-left: 12px solid #d8d8d8;
                    }
                    .grade {
                        flex-direction: column;
                        img {
                            width: 48px;
                            height: 48px;
                            margin-bottom: 20px;
                        }
                        p {
                            color: #a5a6aa;
                        }
                    }
                    .currency {
                        ul {
                            width: 322px;
                            flex-wrap: wrap;
                            li {
                                width: 86px;
                                height: 30px;
                                background: rgba(247, 147, 26, 1);
                                opacity: 1;
                                border-radius: 8px;
                                color: #ffffff;
                                font-size: 16px;
                                margin-bottom: 4px;
                                margin-right: 4px;
                            }
                        }
                    }
                    .price_box {
                        color: #53627c;
                        .num {
                            font-size: 50px;
                        }
                        .year {
                            font-size: 16px;
                        }
                    }
                    .btn_box {
                        .btn_dredge {
                            height: 32px;
                            width: 116px;
                            border-radius:44px;
                            color: #FFFFFF;
                            font-size: 14px;
                        }
                        .btn_dredge.red {
                            background: rgba(247, 26, 26, 1);
                        }
                        .btn_dredge.gray {
                            background:rgba(165,166,170,1);
                        }
                    }
                }
            }
        }
    }
}
</style>


