<template>
    <div class="message">
        <!-- 头部 -->
        <manageHeader v-bind:selectIndex="5"></manageHeader>

        <!-- 主体内容 -->
        <div class="mangeContent">
            <div class="box w">
                <div class="box_content clear w">
                    <!-- 左侧内容 -->
                    <leftContent class="fl"></leftContent>
                    <div class="box_content_right fr">
                        <div class="search flex">
                            <div class="demo-input-suffix" style="width:380px;margin-right:20px">
                                <el-input placeholder="请输入搜索关键词" prefix-icon="el-icon-search" v-model="input2">
                                </el-input>
                            </div>
                            <el-button type="primary">搜索</el-button>
                        </div>
                        <div class="history">
                            <ul class="disJcsbAc flexWrap">
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                                <li class="flex" >
                                    <span>BTC转出流程</span>
                                </li>
                               
                              
                            </ul>
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
            input1: '',
            input2: '',
            input3: '',
            input4: ''
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
                padding-top: 77px;
                .history {
                    padding: 0 305px 0 213px; 
                    ul {
                        li {
                            width: 90px;
                            height: 20px;
                            border: 1px solid rgba(222, 226, 237, 1);
                            border-radius: 2px;
                            margin-top: 8px;
                            //
                            span {
                                -webkit-transform: scale(0.6);
                                transform: scale(0.6);
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
</style>



