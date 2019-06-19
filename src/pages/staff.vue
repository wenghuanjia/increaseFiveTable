<template>
    <div class="main">
        <v-header crumbs_title="人员管理" search="true" ref="vheader"></v-header>
        <v-table :table="table[currentPage3 - 1]"></v-table>
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
import { pmList, getProject } from "service/getData"
import { getStore } from "common/common"

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
    created () {
        var user = getStore('user');
        user = JSON.parse(user);
        if (user.name != '管理员') {
            this.$message.error('没有权限');
            this.$router.go(-1);
        }
    },
    mounted () {

        var search = this.$route.query.search;
        // 从首页进来
        if (search) {
            getProject({id: search}).then(res =>{
                this.table = [[res]]
                this.total = 1
            })
        } else {
            this.getList()
        }
    },
    methods: {
        // 查询项目列表
        getList () {
            pmList({}).then(res => {
                var data = [];
                var data_child = [];
                var count = 0;
                var arr = [].concat.apply([], res.project_data);  
                for(var i = 0; i < arr.length; i++) {

                    if (i == arr.length - 1) {
                        if (Number(arr[i].status) >= 1) {
                            count++;
                            data_child.push(arr[i]);
                        }
                        data.push(data_child);
                        data_child = [];

                    } else {
                        if (Number(arr[i].status) >= 1) {
                            count++;
                            data_child.push(arr[i]);
                            if (data_child.length == 10) {
                                data.push(data_child);
                                data_child = [];
                            }
                        }
                    }
                }
                this.total = count;
                this.table = data;
            });
        },
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