<template>
    <div class="main">
        <v-header crumbs_title="项目管理" search="true" ref="vheader" @searchList="setList" @whileList="getList"></v-header>
        <v-table :table="table[currentPage3 - 1]" @getpmList="getList"></v-table>
        <div class="block">
            <el-pagination
            :current-page.sync="currentPage3"
            :page-size="pageMsgNum"
            layout="prev, pager, next, jumper"
            :total="total"
            background>
            </el-pagination>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from "components/vHeader/vHeader"
import vFooter from "components/vFooter/vFooter"
import vTable from "components/vTable/vTable"
import { pmList } from "service/getData"

export default {
    components: {
        vHeader,
        vFooter,
        vTable
    },
    data () {
        return {
            total: null, // 总共多少页
            currentPage3: 1, // 当前第几页
            pageMsgNum: 10, // 一页多少条
            table: []
        }
    },
    mounted () {
        this.getList(this.$route.params.pmid)
    },
    methods: {
        // 查询项目列表
        getList (id) {
            pmList({type_id: id}).then(res => {
                this.total = res.count;
                this.table = res.project_data;
            });
        },
        // 搜索
        setList (data) {
            this.table = [...data]
        }
    }
}
</script>


<style scoped lang="less">
    @import "../style/mixin.less";
    
    .el-tabs__content {
        overflow-x: scroll; 
    }
    .main {
        position: relative;
        min-height: 100%;
    }
    .block {
        padding: 15px 15px 121px 15px;
        width: 600px;
        margin: 0 auto;
    }
</style>