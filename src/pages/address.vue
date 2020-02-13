<template>
    <div class="message">
        <!-- 头部 -->
        <manageHeader v-bind:selectIndex="3"></manageHeader>

        <!-- 主体内容 -->
        <div class="mangeContent">
            <div class="box w">
                <div class="box_content clear w">
                    <!-- 左侧内容 -->
                    <leftContent class="fl"></leftContent>
                    <div class="box_content_right fr">
                        <div class="content">
                            <h3>已创建地址</h3>
                            <div class="search">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                    <el-form-item label="" style="width:195px;height:38px;margin-right:0">
                                        <el-select v-model="formInline.region" placeholder="活动区域">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="" style="width:195px;height:38px;margin-right:0">
                                        <el-select v-model="formInline.region" placeholder="全部API">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="" style="width:195px;height:38px;margin-right:0">
                                        <el-select v-model="formInline.region" placeholder="按地址搜索">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-button type="primary">搜索</el-button>
                                    <div class="check_all ">查看全部</div>
                                    <div class="check_all educe ">导出</div>
                                </el-form>
                            </div>
                            <div class="warning">
                                <p>注意：0 不参与签名 </p>
                                <p>提示：每条记录最多通知10次，3次通知失败，将不再主动通知，可在交易记录点击手动通知查看交易</p>
                            </div>
                            <div class="list_box">
                                <ul>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                    <li class="disJcsbAc">
                                        <div>
                                            <span class="address_txt">ETH地址：Ydctz6j0rcv9vtcsrcYdctz6j0rcv9vtcsrc</span>
                                            <div class="btn"></div>
                                        </div>
                                        <img class="address_code" src="../assets/images/eth_icon.png" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="paging">
                            <el-pagination background layout="prev, pager, next" :total="100">
                            </el-pagination>
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
            formInline: {
                user: '',
                region: ''
            }
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
.message {
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
                background-color: #fff;
                width: 897px;
                .content {
                    padding: 30px 30px 0 30px;
                    .search {
                        margin: 24px 0;
                        .check_all {
                            width: 78px;
                            height: 38px;
                            font-size: 14px;
                            color: #333333;
                            border: 1px solid rgba(10, 103, 255, 1);
                            border-radius: 4px;
                            display: inline-block;
                            text-align: center;
                            line-height: 38px;
                        }
                    }
                    .warning {
                       background:#fff4e8;
                       padding: 14px 12px;
                    }
                    .list_box {
                        margin-top: 16px;
                        ul {
                            li {
                                border-bottom: 1px solid #DEE2ED;
                                padding: 12px 18px;
                                .address_txt {
                                    color: #A5A6AA;
                                }
                                .address_code {
                                    width: 24px;
                                    height: 24px;
                                }
                            }
                            li:last-child{
                                border-bottom: none;
                            }
                        }
                    }
                }
                .paging {
                    text-align: center;
                    margin: 36px 0;
                }
            }
        }
    }
}
</style>

<style lang="less">
.message {
    .mangeContent {
        .box {
            .box_content_right {
                .content {
                    .el-collapse {
                        border-top: none;
                        /* border-bottom: 1px solid #EBEEF5; */
                    }
                    .item_one {
                        .el-collapse-item__header {
                            font-size: 18px;
                            color: #161616;
                            border-bottom: none;
                        }
                    }
                    .el-collapse-item__wrap {
                        border-bottom: none;
                    }
                }
            }
        }
    }
}
</style>



