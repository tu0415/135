<template>
    <div class="mange">
        <!-- 头部 -->
        <manageHeader v-bind:selectIndex="1"></manageHeader>

        <!-- 主体内容 -->
        <div class="mangeContent">
            <div class="box w">
                <div class="box_content clear w">
                    <!-- 左侧内容 -->
                    <leftContent class="fl"></leftContent>
                    <div class="box_content_right fr">
                        <!-- tab栏 -->
                        <div class="tab">
                            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                                <!-- 搜索盒子 -->
                                <el-tab-pane label="API设置" name="first">
                                    <div class="first_cont">
                                        <div class="first_cont_item">
                                            <p class="first_title">接入流程：</p>
                                            <p class="txt">1.获取AIP秘钥,并配置回调通知地址 </p>
                                            <p class="txt">2.创建收币地址</p>
                                            <p class="txt">3.收币地址收到币时，回调通知 </p>
                                            <p class="txt">4.根据需求调用转账接口 </p>
                                        </div>
                                        <div class="first_cont_item">
                                            <p class="first_title">注意事项：</p>
                                            <p class="txt">1.请勿泄露API密钥信息，此密钥将用于创建地址，导出私钥等操作</p>
                                            <p class="txt">2.申请新密钥后请及时配置密钥信息</p>
                                            <p class="txt">4.平台正式上线后请及时更换AppSecret</p>
                                            <p class="txt">5.Appid新增对应api接口开关控制 </p>
                                        </div>
                                        <div class="apply">申请密钥（可申请1个）</div>
                                        <div class="key_box">
                                            <div class="select">API密钥
                                                <i class="el-icon-caret-bottom"></i>
                                            </div>
                                            <ul>
                                                <li class="clear">
                                                    <div class="fl">AppID</div>
                                                    <div class="fl">AppSecret</div>
                                                    <div class="fl">操作</div>
                                                </li>
                                                <li class="clear">
                                                    <div class="fl clrar list_left">
                                                        <i class="el-icon-success fl" style="margin-top:16px"></i>
                                                        <span class="fl key_code">Ydctz6j0rcv9vtcsrc</span>
                                                        <div class="copy fl">复制AppID</div>
                                                    </div>
                                                    <div class="fl">AppSecret</div>
                                                    <div class="fl clear list_right">
                                                        <span class="fl">API开关</span>
                                                        <span class="fl">配置</span>
                                                        <span class="fl" ref="delect" @mouseover="mouseOver" @mouseout="mouseout">删除</span>
                                                        <div class="hint" v-if="hint">
                                                            <p>删除后将删除此密钥绑定的 所有数据且不可恢复！
                                                            </p>
                                                            <div class="triangle"></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="数据请求文档" name="second">
                                      <div class="third_cont second_cont">
                                        <div class="third_cont_title clear">
                                            <div class="line fl"></div>
                                            <p class="fl ">Api响应格式，如下：</p>
                                        </div>
                                        <div class="response_cont">
                                            { <br> &nbsp;&nbsp; &nbsp; “appid”: “Appid”,<br> &nbsp;&nbsp; &nbsp; “Name”: “币种名称”, <br> &nbsp;&nbsp; &nbsp; “time”: 1555647991, <br> &nbsp;&nbsp; &nbsp; “Data”: “返回的数据”, <br> &nbsp;&nbsp; &nbsp; “sign”: “签名（data数据的签名），签名方法查看签名示例” <br> }
                                        </div>
                                        <div class="hint_box">
                                            <p>重要：0 不参与签名</p>
                                            <p>提示：每条记录最多通知10次，3次通知失败，将不再主动通知，可在交易记录点击手动通知查看交易</p>
                                        </div>
                                        <p class="data_explain">数据说明：</p>
                                        <div class="success_box">
                                            接收到数据后必须返回 “success” 或 “SUCCESS” 。不返回则持续通知3次，3次失败则不再通知
                                        </div>
                                        <div class="data_give">
                                            <el-collapse v-model="dataName" accordion>
                                                <el-collapse-item title="一致性 Consistency" name="1" >
                                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                                </el-collapse-item>
                                                <el-collapse-item title="反馈 Feedback" name="2">
                                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                                </el-collapse-item>
                                                <el-collapse-item title="效率 Efficiency" name="3">
                                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                                </el-collapse-item>
                                                <el-collapse-item title="可控 Controllability" name="4">
                                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                                </el-collapse-item>
                                            </el-collapse>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="充值数据示例" name="third">
                                    <div class="third_cont">
                                        <div class="third_cont_title clear">
                                            <div class="line fl"></div>
                                            <p class="fl ">Api响应格式，如下：</p>
                                        </div>
                                        <div class="response_cont">
                                            { <br> &nbsp;&nbsp; &nbsp; “appid”: “Appid”,<br> &nbsp;&nbsp; &nbsp; “Name”: “币种名称”, <br> &nbsp;&nbsp; &nbsp; “time”: 1555647991, <br> &nbsp;&nbsp; &nbsp; “Data”: “返回的数据”, <br> &nbsp;&nbsp; &nbsp; “sign”: “签名（data数据的签名），签名方法查看签名示例” <br> }
                                        </div>
                                        <div class="hint_box">
                                            <p>重要：0 不参与签名</p>
                                            <p>提示：每条记录最多通知10次，3次通知失败，将不再主动通知，可在交易记录点击手动通知查看交易</p>
                                        </div>
                                        <p class="data_explain">数据说明：</p>
                                        <div class="success_box">
                                            接收到数据后必须返回 “success” 或 “SUCCESS” 。不返回则持续通知3次，3次失败则不再通知
                                        </div>
                                        <div class="data_give">
                                            <el-collapse v-model="dataName" accordion>
                                                <el-collapse-item title="一致性 Consistency" name="1" >
                                                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                                </el-collapse-item>
                                                <el-collapse-item title="反馈 Feedback" name="2">
                                                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                                                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                                                </el-collapse-item>
                                                <el-collapse-item title="效率 Efficiency" name="3">
                                                    <div>简化流程：设计简洁直观的操作流程；</div>
                                                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                                </el-collapse-item>
                                                <el-collapse-item title="可控 Controllability" name="4">
                                                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                                                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                                                </el-collapse-item>
                                            </el-collapse>
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="签名示例" name="foue">地址</el-tab-pane>
                                <el-tab-pane label="异常指南" name="five">地址</el-tab-pane>
                                <el-tab-pane label="网页测试+源码下载" name="six">地址</el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <footerContent></footerContent>

        <!-- API开关 -->
        <div class="shade" v-if="false">
            <div class="shade_box ">
                <img class="close" src="../assets/images/close.png" alt="">
                <p class="shade_box_title">AppSecret</p>
                <div class="matters_box">
                    <p>注意事项：</p>
                    <p>1.可关闭不必要的功能以防数据泄露</p>
                    <p>2.接口无法开启时表示此Appid对应的接口出现异常，请联系客服。</p>
                </div>
                <div class="list">
                    <ul>
                        <li class="clear li_title">
                            <p class="fl name">接口名称</p>
                            <p class="fl status">状态</p>
                            <p class="fl name">接口名称</p>
                            <p class="fl status">状态</p>
                        </li>
                        <li class="clear li_cont">
                            <p class="fl name">创建地址 [get_address]</p>
                            <div class="switch fl status">
                                <el-switch v-model="value1"></el-switch>
                            </div>
                            <p class="fl name">接口名称</p>
                            <div class="switch fl status">
                                <el-switch v-model="value1"></el-switch>
                            </div>
                        </li>
                        <li class="clear li_cont">
                            <p class="fl name">创建地址 [get_address]</p>
                            <div class="switch fl status">
                                <el-switch v-model="value1"></el-switch>
                            </div>
                            <p class="fl name">接口名称</p>
                            <div class="switch fl status">
                                <el-switch v-model="value1"></el-switch>
                            </div>
                        </li>
                        <li class="clear li_cont">
                            <p class="fl name">创建地址 [get_address]</p>
                            <div class="switch fl status">
                                <el-switch v-model="value1"></el-switch>
                            </div>
                            <p class="fl name">接口名称</p>
                            <div class="switch fl status">
                                <el-switch v-model="value1"></el-switch>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- API配置 -->
        <div class="shade" v-if="false">
            <div class="shade_box configuration">
                <img class="close" src="../assets/images/close.png" alt="">
                <p class="shade_box_title">API配置</p>
                <div class="matters_box">
                    <p>注意事项：</p>
                    <p>1.通知地址用于接收充值信息，可关闭通知主动查询</p>
                    <p>2.通知地址请加上’http://'或者'https://‘,通知地址不能带参数，不能包含中文</p>
                    <p>3.接口需要安全验证，请绑定服务器ip</p>
                </div>
                <div class="from">
                    <div class="from_item">
                        <p class="name">AppID：</p>
                        <input class="first" type="text" placeholder="Ydctz6j0rcv9vtcsrc">
                    </div>
                    <div class="from_item">
                        <p class="name">通知地址：</p>
                        <input type="text">
                    </div>
                    <div class="from_item">
                        <p class="name">绑定IP：</p>
                        <input type="text">
                    </div>
                    <div class="from_item clear multiple">
                        <p class="name fl">主动通知：</p>
                        <div class="inform_switch fl">
                            <el-switch v-model="value1"></el-switch>
                        </div>
                    </div>
                    <div class="from_item clear multiple">
                        <p class="name fl">主动通知：</p>
                        <div class="receive_way fl">
                            <el-radio v-model="radio" label="1">ARRAY</el-radio>
                            <el-radio v-model="radio" label="2">JSON</el-radio>
                            <el-radio v-model="radio" label="3">XML</el-radio>
                        </div>
                    </div>
                    <div class="from_item">
                        <p class="name">安全密码：</p>
                        <input type="password">
                    </div>
                </div>
                <div class="btn">保存</div>
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
            activeName: 'third',
            value1: false,
            radio: '1',
            hint: false,
            dataName: '1'
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

        mouseOver() {
            this.hint = true
            this.$refs.delect.style.color = '#0a67ff'
        },
        mouseout() {
            this.hint = false
            this.$refs.delect.style.color = '#A5A6AA'
        }

    },
}
</script>
<style lang="less">
.tab {
    .el-tabs__item {
        padding: 0 32px;
    }

    .el-tabs__item.is-active {
        background-color: #0a67ff;
        color: #fff;
    }
    .el-tabs--card > .el-tabs__header .el-tabs__item {
        border-bottom-color: #dee2ed;
    }

    .el-tabs--card > .el-tabs__header {
        border-bottom: none;
    }
    .data_give {
        .el-collapse-item__header {
            background:rgba(244,249,255,1);
            padding-left: 12px;
            color:#A5A6AA;
            font-size:14px;
            .el-collapse-item__arrow { 
                margin: 0 0 0 10px;
            }
        }
    }
}

</style>

<style scoped lang="less">
.mange {
    position: relative;
    padding: 15px 0 15px;

    .mangeContent {
        height: 100%;
        box-sizing: border-box;
        background-color: #f4f9ff;
        .box {
            padding: 80px 0 90px 0;
            box-sizing: border-box;
            .box_content_right {
                background-color: #fff;
                padding: 30px 30px 40px 30px;
                box-sizing: border-box;
                width: 897px;
                .tab {
                    .first_cont {
                        padding: 36px 10px 0 30px;
                        .first_cont_item {
                            margin-bottom: 30px;
                            .first_title {
                                color: #161616;
                                font-size: 24px;
                                margin-bottom: 10px;
                            }
                            .txt {
                                color: #a5a6aa;
                                line-height: 24px;
                            }
                            
                        }
                        .apply {
                            color: #0a67ff;
                            font-size: 18px;
                            padding: 13px 17px 14px;
                            border: 1px solid rgba(10, 103, 255, 1);
                            display: inline-block;
                            margin-bottom: 36px;
                        }
                        .key_box {
                            color: #a5a6aa;
                            .select {
                                display: inline-block;
                                color: #a5a6aa;
                                padding: 13px 46px;
                                background: rgba(244, 249, 255, 1);
                            }
                            ul {
                                li {
                                    height: 46px;
                                    line-height: 46px;
                                    border-bottom: 1px solid #e5e5e5;
                                    > div {
                                        width: 33%;
                                        text-align: center;
                                        margin: 0 auto;
                                    }
                                    .copy {
                                        color: #ffffff;
                                        font-size: 9px;
                                        background-color: #0a67ff;
                                        padding: 0 5px;
                                        height: 24px;
                                        line-height: 24px;
                                        margin-top: 10px;
                                    }
                                    .done {
                                        width: 14px;
                                        height: 14px;
                                        border-radius: 50%;
                                        background: rgba(165, 166, 170, 1);
                                    }
                                    .list_left {
                                        padding: 0 20px;
                                    }
                                    .key_code {
                                        padding: 0 5px;
                                    }
                                    .list_right {
                                        text-align: center;
                                        position: relative;
                                        span {
                                            width: 33%;
                                            text-align: center;
                                        }
                                        .hint {
                                            background-color: #0a67ff;
                                            color: #ffffff;
                                            font-size: 14px;
                                            padding: 14px 16px;
                                            position: absolute;
                                            box-sizing: border-box;
                                            width: 200px;
                                            top: -72px;
                                            right: -20px;
                                            p {
                                                line-height: 22px;
                                            }
                                            .triangle {
                                                width: 0;
                                                height: 0;
                                                border-width: 10px;
                                                border-style: solid;
                                                position: absolute;
                                                right: 60px;
                                                bottom: -18px;
                                                border-color: #0a67ff
                                                    transparent transparent
                                                    transparent;
                                            }
                                        }
                                    }
                                }
                                li:first-child {
                                    background: rgba(244, 249, 255, 1);
                                    border-top: 1px solid #e5e5e5;
                                }
                            }
                        }
                    }
                    .third_cont {
                        padding: 25px 0 0 30px;
                        .line {
                            width: 4px;
                            height: 24px;
                            margin-right: 24px;
                            margin-top: 1px;
                            background: rgba(10, 103, 255, 1);
                            p {
                                color: #161616;
                                font-size: 20px;
                            }
                        }
                    }
                    .response_cont {
                        background: rgba(10, 103, 255, 0.1);
                        padding: 14px 12px;
                        font-size: 16px;
                        color: #333333;
                        margin: 18px 0;
                    }
                    .hint_box {
                        padding: 14px 12px;
                        background: rgba(247, 147, 26, 0.1);
                        color: #f7931a;
                        font-size: 14px;
                    }
                    .data_explain {
                        font-size: 16px;
                        color: #a5a6aa;
                        margin: 16px 0;
                    }
                    .success_box {
                        background: rgba(10, 103, 255, 0.1);
                        color: #333333;
                        font-size: 16px;
                        padding: 14px 12px;
                    }
                    .data_give {
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    .shade {
        .shade_box {
            padding: 48px;
            position: relative;
            width: 696px;
            top: 244px;
            .close {
                width: 24px;
                height: 24px;
                position: absolute;
                right: 48px;
                top: 36px;
            }
            .shade_box_title {
                text-align: center;
                color: #53627c;
                font-size: 24px;
            }
            .matters_box {
                text-align: center;
                background: rgba(247, 147, 26, 0.1);
                font-size: 16px;
                padding: 15px 0;
                font-family: PingFang SC;
                margin: 24px 0;
                color: #f7931a;
            }
            .list {
                li {
                    text-align: center;
                    line-height: 46px;
                    border-bottom: 1px solid #dee2ed;
                    .name {
                        width: 200px;
                    }
                    .status {
                        width: 100px;
                    }
                }
                .li_title {
                    background-color: #f4f9ff;
                    border-bottom: none;
                }
            }
        }
        .configuration {
            width: 536px;
            .matters_box {
                padding: 16px 35px;
                p {
                    line-height: 22px;
                }
            }
            .from {
                .from_item {
                    margin-bottom: 15px;
                    .name {
                        color: #d6d6d6;
                        font-size: 16px;
                        margin-bottom: 15px;
                    }
                    .first {
                        border: none;
                        background: rgba(10, 103, 255, 0.1);
                    }
                    input {
                        width: 100%;
                        border: 1px solid #e5e5e5;
                        line-height: 46px;
                        padding-left: 12px;
                        font-size: 16px;
                        color: #333333;
                    }
                    .inform_switch {
                        margin: 2px 0 0 10px;
                    }
                    .receive_way {
                        margin-top: 5px;
                        margin-left: 10px;
                    }
                }
                .multiple {
                    margin-bottom: 0;
                }
            }
            .btn {
                width: 100%;
                color: #0a67ff;
                height: 62px;
                border: 1px solid rgba(10, 103, 255, 1);
                text-align: center;
                line-height: 62px;
                font-size: 24px;
                margin-top: 35px;
                
            }
        }
    }
}
</style>


