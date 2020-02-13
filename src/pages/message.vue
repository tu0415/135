<template>
    <div class="message">
        <!-- 头部 -->
        <manageHeader v-bind:selectIndex="4"></manageHeader>

        <!-- 主体内容 -->
        <div class="mangeContent">
            <div class="box w">
                <div class="box_content clear w">
                    <!-- 左侧内容 -->
                    <leftContent class="fl"></leftContent>
                    <div class="box_content_right fr">
                        <div class="content">
                            <div class="list">
                                <el-collapse accordion class="item_one">
                                    <el-collapse-item>
                                        <template slot="title">
                                            <i class="line"></i>
                                            一致性 Consistency
                                        </template>
                                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                    </el-collapse-item>
                                </el-collapse>
                                <p class="time_box disJcsbAc">
                                    <span class="time">2020:01:01</span>
                                    <span class="read flex noread">标记已读</span>
                                </p>
                            </div>
                            <div class="list">
                                <el-collapse accordion class="item_one">
                                    <el-collapse-item>
                                        <template slot="title">
                                            <i class="line"></i>
                                            一致性 Consistency
                                        </template>
                                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                    </el-collapse-item>
                                </el-collapse>
                                <p class="time_box disJcsbAc">
                                    <span class="time">2020:01:01</span>
                                    <span class="read flex noread">标记已读</span>
                                </p>
                            </div>
                            <div class="list">
                                <el-collapse accordion class="item_one">
                                    <el-collapse-item>
                                        <template slot="title">
                                            <i class="line"></i>
                                            一致性 Consistency
                                        </template>
                                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                    </el-collapse-item>
                                </el-collapse>
                                <p class="time_box disJcsbAc">
                                    <span class="time">2020:01:01</span>
                                    <span class="read flex noread">标记已读</span>
                                </p>
                            </div>
                            <div class="list">
                                <el-collapse accordion class="item_one">
                                    <el-collapse-item>
                                        <template slot="title">
                                            <i class="line"></i>
                                            一致性 Consistency
                                        </template>
                                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                    </el-collapse-item>
                                </el-collapse>
                                <p class="time_box disJcsbAc">
                                    <span class="time">2020:01:01</span>
                                    <span class="read flex noread">标记已读</span>
                                </p>
                            </div>
                            <div class="list">
                                <el-collapse accordion class="item_one">
                                    <el-collapse-item>
                                        <template slot="title">
                                            <i class="line"></i>
                                            一致性 Consistency
                                        </template>
                                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                                    </el-collapse-item>
                                </el-collapse>
                                <p class="time_box disJcsbAc">
                                    <span class="time">2020:01:01</span>
                                    <span class="read flex noread">标记已读</span>
                                </p>
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
                    padding: 0 50px 0 30px;
                    .list {
                        padding-top: 25px;
                        .item_one {
                            font-size: 20px;
                            .line {
                                width: 4px;
                                height: 20px;
                                background: rgba(10, 103, 255, 1);
                                margin-right: 8px;
                            }
                        }
                        .time_box {
                            padding: 20px 0;
                            border-bottom: 1px solid #ebeef5;
                            .time {
                                color: #a5a6aa;
                                font-size: 14px;
                            }
                            .read {
                                width: 64px;
                                height: 24px;
                                font-size: 12px;
                            }
                            .read.isread {
                                background-color: #0a67ff;
                                color: #fff;
                            }
                            .read.noread {
                                color: #333333;
                                border: 1px solid rgba(10, 103, 255, 1);
                            }
                        }
                    }
                    .list:last-child {
                        .time_box {
                            border-bottom: none;
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



