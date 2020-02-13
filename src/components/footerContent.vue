<template>
    <div class="footer">
        <div class="footerContent">
            <p>© 2019 YDC虚拟币支付中心. All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped lang="less">
.footer {
    // position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .footerContent {
        height: 70px;
        background: rgba(23, 41, 77, 1);
        p {
            line-height: 70px;
            font-size: 12px;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            text-align: center;
        }
    }
}
</style>
