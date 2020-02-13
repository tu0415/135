<template>
    <div class="homePage">
        <!-- 头部 -->
        <manageHeader v-bind:selectIndex="0"></manageHeader>

        <!-- 主体内容 -->
        <div class="mangeContent">
            <div class="box w">
                <div class="inform clear">
                    <img class="fl" src="../assets/images/trumpet_icon.png" alt="">
                    <span class="fl">
                        发布须知：点击查看活动被推荐的9条军规和被屏蔽的6大陷阱，助你共享单日千万流量，避开错误不再白费功夫！
                    </span>
                    <a href="">查看详情></a>
                    <img class="fr" src="../assets/images/close_icon.png" alt="">
                </div>
                <div class="box_content clear w">
                    <!-- 左侧内容 -->
                    <leftContent class="fl"></leftContent>

                    <div class="box_content_right fr">
                        <!-- 币种列表 -->
                        <div class="currency" v-if="false">
                            <ul class="clear">
                                <li>
                                    <img src="../assets/images/btc_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/eth_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/usdt_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/eos_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/xrp_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/etz_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/btc_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/btc_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                                <li>
                                    <img src="../assets/images/btc_icon.png" alt="">
                                    <p class="currency_name">BTC</p>
                                    <p class="explain">比特币API接口钱包交易所对接</p>
                                    <div class="dredge">
                                        <el-button type="info" size="mini">已开通</el-button>
                                        <!-- <el-button type="primary" size="mini">立即开通</el-button> -->
                                    </div>
                                </li>
                            </ul>
                            <p class="more">更多服务开通中，敬请期待…</p>
                        </div>

                        <!-- 账户明细 -->
                        <div class="currency_info">
                            <!-- 已开通 -->
                            <div class="clear" v-if="false">
                                <div class="currency_info_left fl">
                                    <div class="name clear">
                                        <div class="fl imgbox">
                                            <img src="../assets/images/btc_icon.png" alt="">
                                            <p class="">BTC</p>
                                        </div>
                                        <span class="fl">账户余额:</span>
                                    </div>
                                    <p class="num">1689.86083000
                                        <span>BTC</span>
                                    </p>
                                    <ul class="uls clear">
                                        <li>
                                            <img src="../assets/images/btc_icon.png" alt="">
                                            <p class="">BTC</p>
                                        </li>
                                        <li>
                                            <img src="../assets/images/btc_icon.png" alt="">
                                            <p class="">BTC</p>
                                        </li>
                                        <li>
                                            <img src="../assets/images/btc_icon.png" alt="">
                                            <p class="">BTC</p>
                                        </li>
                                        <li>
                                            <img src="../assets/images/btc_icon.png" alt="">
                                            <p class="">BTC</p>
                                        </li>
                                        <li class="apply">申请收入Token >></li>
                                    </ul>
                                </div>
                                <div class="currency_info_right fr">
                                    <div class="set ">创建公账</div>
                                    <div class="transfer">转账</div>
                                </div>
                            </div>

                            <!-- 未开通 -->
                            <div class="no_dredge">
                                <img class="icon" src="../assets/images/btc_icon.png" alt="">
                                <p class="no_dredge_txt">BTC钱包API接口尚未开通！</p>
                                <div class="set">立即开通</div>
                            </div>
                        </div>

                        <!-- tab栏 -->
                        <div class="tab" >
                            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                <!-- 搜索盒子 -->
                                <div class="searchbox">
                                    <el-form ref="form" :model="form" label-width="80px">
                                        <el-form-item label="">
                                            <el-select v-model="form.region" placeholder="btc">
                                                <el-option label="区域一" value="shanghai"></el-option>
                                                <el-option label="区域二" value="beijing"></el-option>
                                            </el-select>
                                            <el-select v-model="form.region" placeholder="按应用筛选">
                                                <el-option label="区域一" value="shanghai"></el-option>
                                                <el-option label="区域二" value="beijing"></el-option>
                                            </el-select>
                                            <el-input class="search" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
                                            </el-input>
                                            <el-button class="fr" type="primary">搜索</el-button>
                                        </el-form-item>
                                    </el-form>
                                </div>
                                <el-tab-pane label="转入" name="first">
                                    <el-table :data="tableData" style="width: 100%" type='index'>
                                        <el-table-column align='center' prop="name" label="币种" width="160">
                                            <template slot-scope="scope">
                                                <img class="icon" src="../assets/images/btc_icon.png" alt="">
                                                <span>{{scope.row.date}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column align='center' prop="name" label="数量" width="160">
                                            <template slot-scope="scope">
                                                <span style="color:red">+{{scope.row.name}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column align='center' prop="name" label="哈希" width="160">
                                            <template slot-scope="scope">
                                                <span style="color:#A5A6AA">{{scope.row.name}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column align='center' prop="name" label="状态" width="160">
                                            <template slot-scope="scope">
                                                <span style="color:#A5A6AA">{{scope.row.name}}</span>
                                            </template>
                                        </el-table-column>
                                        <el-table-column align='center' prop="address" label="时间">
                                            <template slot-scope="scope">
                                                <span style="color:#A5A6AA">{{scope.row.name}}</span>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="转出" name="second">转出</el-tab-pane>
                                <el-tab-pane label="地址" name="third">地址</el-tab-pane>
                            </el-tabs>
                            <div class="paging">
                                <el-pagination background layout="prev, pager, next" :total="100">
                                </el-pagination>
                            </div>
                        </div>

                        <div class="nodata" v-if="false">
                            <img src="../assets/images/nodata.png" alt="">
                            <p>暂无数据…</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <footerContent></footerContent>

        <!-- 请先认证手机号 -->
        <div class="shade" v-if="false">
            <div class="shade_box">
                <p class="mobile">请先认证手机号</p>
                <div class="btn">
                    <button disabled="disabled">认证</button>
                </div>
            </div>
        </div>

        <!-- 手机认证 -->
        <div class="shade" v-if="false">
            <div class="shade_box authentication">
                <div class="logo_img clear">
                    <img class="fl" src="../assets/images/logo1.png" alt="">
                    <img class="close fr" src="../assets/images/close.png" alt="">
                </div>
                <p class="txt">手机认证</p>
                <div class="form">
                    <input type="text" placeholder="请填写手机号">
                </div>
                <div class="form clear form_code">
                    <input class="mobile_code fl" type="text" placeholder="请填写手机验证码">
                    <span class="fr code">获取验证码</span>
                </div>
                <div class="btn">
                    <button disabled="disabled">认证</button>
                </div>
            </div>
        </div>

        <!-- 设置安全密码 -->
        <div class="shade" v-if="false">
            <div class="shade_box authentication">
                <div class="logo_img clear">
                    <img class="fl" src="../assets/images/logo1.png" alt="">
                    <img class="close fr" src="../assets/images/close.png" alt="">
                </div>
                <p class="txt">设置安全密码</p>
                <div class="form">
                    <input type="text" placeholder="请输入安全密码">
                </div>
                <div class="form clear form_code">
                    <input class="mobile_code fl" type="text" placeholder="请填写手机验证码">
                    <span class="fr code">获取验证码</span>
                </div>
                <div class="btn">
                    <button disabled="disabled">提交</button>
                </div>
            </div>
        </div>

        <!-- 设置安全密码 -->
        <div class="shade" v-if="false">
            <div class="shade_box authentication">
                <div class="logo_img clear">
                    <img class="fl" src="../assets/images/logo1.png" alt="">
                    <img class="close fr" src="../assets/images/close.png" alt="">
                </div>
                <p class="txt">修改登录密码</p>
                <div class="form">
                    <input type="text" placeholder="请输入新密码">
                </div>
                <div class="form clear form_code">
                    <input class="mobile_code fl" type="text" placeholder="请填写手机验证码">
                    <span class="fr code">获取验证码</span>
                </div>
                <div class="btn">
                    <button disabled="disabled">提交</button>
                </div>
            </div>
        </div>

        <!-- 创建公账 -->
        <div class="shade" v-if="false">
            <div class="shade_box account">
                <img class="close" src="../assets/images/close.png" alt="">
                <p class="site">Exw9trglp…7jdU2HnekX</p>
                <div class="site_code">
                    <img src="../assets/images/btc_icon.png" alt="">
                </div>
                <div class="copy">复制</div>
                <div class="copy key">导出私钥</div>
            </div>
        </div>

        <!-- 申请收入token -->
        <div class="shade" v-if="false">
            <div class="shade_box token">
                <img class="close" src="../assets/images/close.png" alt="">
                <p class="site">申请收入Token</p>
                <div class="from_item">
                    <p class="name">代币简称：</p>
                    <input class="from_item_input" type="text">
                </div>
                <div class="from_item">
                    <p class="name">智能合约地址：</p>
                    <input class="from_item_input" type="text">
                </div>
                <div class="from_item">
                    <p class="name">小数位数：</p>
                    <input class="from_item_input" type="number">
                </div>
                <div class="from_item">
                    <p class="name">上传logo：</p>
                    <div class="clear">
                    <el-upload  class="avatar-uploader fl" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon" style="width:82px;height:82px;line-height: 82px;"></i>
                    </el-upload>
                    <el-button class="fl" type="primary" icon="el-icon-check" style="width:24px;height:24px;padding:0;margin:30px 0 0 16px" circle></el-button>
                    </div>
                </div>
                <div class="copy key">提交申请</div>
            </div>
        </div>
    </div>
</template>

<script>
import manageHeader from "@/components/manageHeader"
import footerContent from "@/components/footerContent"
import leftContent from "@/components/leftContent"
export default {
    data() {
        return {
            activeName: 'first',
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            input2: '',
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-08-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-10-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路'
                },
            ],
            imageUrl: ''
        }
    },
    components: {
        manageHeader,
        footerContent,
        leftContent,
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
}
</script>

<style scoped lang="less">
.homePage {
    position: relative;
    padding: 15px 0 15px;

    .mangeContent {
        height: 100%;
        box-sizing: border-box;
        background-color: #f4f9ff;
        .box {
            padding: 80px 0 90px 0;
            box-sizing: border-box;
            .inform {
                width: 100%;
                background-color: #fdfcea;
                padding: 10px 16px;
                color: #f96a0d;
                margin-bottom: 15px;
                box-sizing: border-box;
                img {
                    width: 18px;
                    height: 16px;
                    margin-top: 2px;
                    margin-right: 10px;
                }
            }
            .box_content_right {
                background-color: #fff;
                padding: 30px 30px 40px 30px;
                box-sizing: border-box;
                width: 897px;
                .currency {
                    ul {
                        li {
                            float: left;
                            width: 259px;
                            height: 267px;
                            background: rgba(255, 255, 255, 1);
                            border: 1px solid rgba(222, 226, 237, 1);
                            text-align: center;
                            padding: 30px;
                            box-sizing: border-box;
                            margin: 0 30px 30px 0;
                            img {
                                width: 48px;
                                height: 48px;
                            }
                            .currency_name {
                                color: #53627c;
                                font-size: 28px;
                                margin: 18px 0 8px;
                            }
                            .explain {
                                width: 112px;
                                color: #a5a6aa;
                                font-size: 16px;
                                margin: 0 auto 30px;
                            }
                            .dredge {
                            }
                        }
                        li:nth-child(3n) {
                            margin-right: 0;
                        }
                    }
                    .more {
                        text-align: center;
                        color: #d6d6d6;
                        font-size: 16px;
                        margin-top: 10px;
                    }
                }
                .currency_info {
                    border: 1px solid rgba(222, 226, 237, 1);
                    padding: 20px 17px 20px 20px;
                    .currency_info_left {
                        .name {
                            .imgbox {
                                margin-right: 12px;
                                img {
                                    width: 24px;
                                    height: 24px;
                                    margin-bottom: 4px;
                                }
                                p {
                                    font-size: 8px;
                                    color: #a5a6aa;
                                }
                            }
                            span {
                                margin-top: 10px;
                                font-size: 12px;
                                color: #142748;
                            }
                        }
                        .num {
                            color: #333333;
                            font-size: 32px;
                            padding-left: 36px;
                            span {
                                color: #a5a6aa;
                                font-size: 14px;
                            }
                        }
                        .uls {
                            padding-left: 36px;
                            margin-top: 11px;
                            li {
                                float: left;
                                margin-right: 16px;
                                img {
                                    width: 24px;
                                    height: 24px;
                                    margin-bottom: 4px;
                                }
                                p {
                                    color: #a5a6aa;
                                    font-size: 8px;
                                }
                            }
                            .apply {
                                color: #0a67ff;
                                font-size: 12px;
                                padding-top: 15px;
                            }
                        }
                    }
                    .currency_info_right {
                        > div {
                            width: 104px;
                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                        }
                        .set {
                            border: 1px solid rgba(10, 103, 255, 1);
                            color: #0a67ff;
                            margin: 22px 0 26px;
                        }
                        .transfer {
                            background-color: #0a67ff;
                            color: #ffffff;
                        }
                    }
                    .no_dredge {
                        text-align: center;
                        .icon {
                            width: 40px;
                            height: 40px;
                        }
                        .no_dredge_txt {
                            color: #142748;
                            font-size: 12px;
                            margin: 12px 0;
                        }
                        .set {
                            width: 104px;
                            height: 30px;
                            line-height: 30px;
                            border: 1px solid rgba(10, 103, 255, 1);
                            color: #0a67ff;
                            margin: 22px 0 26px;
                            margin: 0 auto;
                        }
                    }
                }
                .tab {
                    margin-top: 30px;
                    .search {
                        width: 274px;
                    }
                    .paging {
                        text-align: center;
                        margin-top: 36px;
                    }
                    .icon {
                        width: 24px;
                        height: 24px;
                    }
                }
                .nodata {
                    margin: 80px auto 126px;
                    text-align: center;
                    position: relative;
                    img {
                        width: 264px;
                        height: 264px;
                        margin: 0 auto;
                    }
                    p {
                        text-align: center;
                        position: absolute;
                        bottom: 48px;
                        left: 50%;
                        transform: translateX(-50%);
                        font-size: 14px;
                    }
                }
            }
        }
    }
    .shade {
        .shade_box {
            padding: 60px 48px 36px;
            .mobile {
                font-size: 24px;
                color: #53627c;
                margin-bottom: 50px;
                text-align: center;
            }
            .btn {
                height: 62px;
                width: 440px;
                background-color: #0a67ff;
                text-align: center;
                line-height: 42px;
                button {
                    color: #ffffff;
                    font-size: 24px;
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }

            .logo_img {
                width: 70px;
                height: 80px;
                margin: 0 auto;
                img {
                    width: 100%;
                    height: 100%;
                }
                .close {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    right: 48px;
                    top: 36px;
                }
            }

            .txt {
                color: #53627c;
                font-size: 24px;
                text-align: center;
                margin: 20px 0 30px;
            }

            .form {
                padding: 12px 0;
                border-bottom: 1px solid #e5e5e5;
                margin-bottom: 10px;
                input {
                    width: 100%;
                    color: #d6d6d6;
                    font-size: 18px;
                }
                .mobile_code {
                    width: 80%;
                }
                .code {
                    color: #0a67ff;
                }
            }
            .form_code {
                margin-bottom: 36px;
            }
        }
        .authentication {
            padding-top: 30px;
        }
        .account,
        .token {
            padding: 60px 48px 48px;
            position: relative;
            width: 536px;
            box-sizing: border-box;
            top: 150px;
            .close {
                width: 24px;
                height: 24px;
                position: absolute;
                right: 48px;
                top: 38px;
            }
            .site {
                color: #53627c;
                font-size: 24px;
                text-align: center;
            }
            .site_code {
                width: 220px;
                height: 220px;
                margin: 40px auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .copy {
                width: 100%;
                text-align: center;
                line-height: 60px;
                font-size: 24px;
                border: 1px solid rgba(10, 103, 255, 1);
                box-sizing: border-box;
                color: #0a67ff;
            }
            .key {
                background: rgba(10, 103, 255, 1);
                color: #fff;
                margin-top: 24px;
            }
        }
        .token {
            padding: 48px;
            box-sizing: border-box;
            .from_item {
                .name {
                    font-size: 16px;
                    color: #d6d6d6;
                    margin-bottom: 12px;
                }
                .from_item_input {
                    width: 100%;
                    height: 46px;
                    border: 1px solid rgba(229, 229, 229, 1);
                    margin-bottom: 12px;
                    padding-left: 12px;
                    box-sizing: border-box;
                }
            }
        }
    }
}
</style>

<style lang="less">
.homePage .tab {
    .el-tabs__item {
        padding: 0 64px;
    }
}
.homePage .el-tabs__item.is-active {
    background-color: #0a67ff;
    color: #fff;
}
.homePage .el-tabs--card > .el-tabs__header .el-tabs__item {
    border-bottom-color: #dee2ed;
}

.homePage .el-tabs--card > .el-tabs__header {
    border-bottom: none;
}

.homePage .el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:nth-child(2) {
    padding-left: 64px;
}

.homePage .el-tabs--top.el-tabs--card > .el-tabs__header .el-tabs__item:last-child {
    padding-right: 64px;
}
.homePage .el-button--primary {
    color: #fff;
    background-color: #0a67ff;
    border-color: #0a67ff;
}

.homePage .el-form-item__content {
    margin-left: 0 !important;
}

.homePage .el-select {
    width: 208px;
    margin-right: 8px;
}

.homePage .searchbox .el-button {
    padding: 12px 40px;
}

.homePage .tab .el-table .cell {
    text-align: center;
    // color:red;
}

.homePage .tab .el-table td {
    padding: 10px 0;
}

.homePage .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.homePage .avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.homePage .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.homePage .from_item .avatar {
    width: 82px;
    height: 82px;
    display: block;
}

.homePage .avatar-uploader .el-upload { 
    border:1px solid rgba(229,229,229,1);
}
</style>

