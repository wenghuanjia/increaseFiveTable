<template>
    <div class="addfirm">
        <v-header crumbs_title="添加企业" ref="vheader"></v-header>
        <div class="from">
            <div class="table-form clear">
        		<span class="title fl">企业名称：</span>
        		<el-input placeholder="请输入企业名称" size="mini" v-model="companyname" clearable class="company fl"></el-input>
        	</div>
        	<div class="table-button">
        		<el-button type="primary" size="mini">确定</el-button>
        		<el-button type="info" size="mini" @click="goback">取消</el-button>
        	</div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from "components/vHeader/vHeader"
import vFooter from "components/vFooter/vFooter"

export default {
    components: {
        vHeader,
        vFooter
    },
    data () {
        return {
            companyname: ''
        }
    },
    methods: {
        goback () {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped lang="less">
    @import "../style/mixin.less";
    .from {
        padding: 10px 15px;
    }
    .table-form {
        margin-bottom: 10px;
    }
    .title {
        line-height: 28px;
    }
    .company {
        width: 200px;
    }
</style>


