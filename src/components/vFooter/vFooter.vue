<template>
    <footer class="footer">
        <!-- <el-row>
            <el-col :span="24"><div>主办：{{ footer.sponsor }}</div></el-col>
        </el-row> -->
        <!-- <el-row>
            <el-col :span="4" :offset="2"><div>友情链接:{{ footer.blogroll }}</div></el-col>
            <el-col :span="4"><div>主管:{{ footer.governor }}</div></el-col>
            <el-col :span="4"><div>技术支持电话:{{ footer.phone }}</div></el-col>
            <el-col :span="4"><div>技术支持:{{ footer.technology }}</div></el-col>
            <el-col :span="4"><div><a href="http://www.miibeian.gov.cn">粤ICP备{{ footer.ICP }}</a></div></el-col>
        </el-row> -->
        <el-row>
            <el-col :span="24"><div>友情链接：{{ footer.blogroll }}</div></el-col>
        </el-row>

        <el-row>
            <el-col :span="24"><div>技术支持：{{ footer.technology }}</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div>版权所有：{{ footer.copyright }} <span><a href="http://www.miibeian.gov.cn">粤ICP备{{ footer.ICP }}</a></span> 网站识别码4400000084</div></el-col>
        </el-row>
    </footer>
</template>

<script>
export default {
    data () {
        return {
            footer: {
                sponsor: "广东省人民政府办公厅",
                blogroll: "科研之友",
                governor: "广东省科学技术厅",
                phone: "020-83163338",
                email: "yanlian@gdstc.gov.cn",
                ICP: "18134819号-2",
                technology: "广州市盐联信息技术有限公司",
                copyright: "广州市盐联信息技术有限公司",
            }
        }
    }
}
</script>

<style scoped lang="less">
@import "../../style/mixin.less";
    .footer {
        // position: absolute;
        // left: 0;
        // bottom: 0;
        position: fixed;
        left: 0;
        bottom: 0;
        .wh(100%, auto);
        background: #EAEBEB;
        text-align: center;
        .sc(12px, #666);
        padding: 5px 0px;
    }
</style>


