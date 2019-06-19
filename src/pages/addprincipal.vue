<template>
    <div>
        <v-header crumbs_title="人员管理" ref="vheader" ></v-header>
        <div class="main">
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">企业名称：</div></el-col>  
                <el-col :span="22"><div class="grid-content bg-purple">{{ data.company_name }}</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">项目名称：</div></el-col>  
                <el-col :span="22"><div class="grid-content bg-purple active">{{ data.name }}</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">年度/批次：</div></el-col>  
                <el-col :span="22"><div class="grid-content bg-purple">{{ data.year }}</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">提交时间：</div></el-col>  
                <el-col :span="22"><div class="grid-content bg-purple">{{ data.create_time }}</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">状态：</div></el-col>  
                <el-col :span="22"><div class="grid-content bg-purple active">{{ data.status }}</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">业务员：</div></el-col>  
                <el-col :span="22"><div class="grid-content bg-purple">{{ data.user_nickname }}</div></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">技术员：</div></el-col>  
                <el-col :span="22">
                    <div class="grid-content bg-purple">
                        <el-select v-model="jishu_id" placeholder="请选择" size="mini">
                            <el-option v-for="item in jishu_arr" :key="item.id" :label="item.user_nickname" :value="item.id"></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="2"><div class="grid-content bg-purple">审核员：</div></el-col>  
                <el-col :span="22">
                    <div class="grid-content bg-purple">

                        <el-select v-model="shenhe_id" placeholder="请选择" size="mini">
                            <el-option v-for="item in shenhe_arr" :key="item.id" :label="item.user_nickname" :value="item.id"></el-option>
                        </el-select>

                    </div>
                </el-col>
            </el-row>
            <el-button type="primary" size="mini" @click="addprincipal">确定</el-button>
            <el-button type="info" size="mini" @click="goback">取消</el-button>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from "components/vHeader/vHeader"
import vFooter from "components/vFooter/vFooter"
import { getProject, getRoleUserList, saveManage } from "service/getData"

export default {
    components: {
        vHeader,
        vFooter
    },
    data () {
        return {
            data: {}, // 页面数据
            jishu_id: '', // 技术id
            shenhe_id: '', // 审核id
            jishu_arr: [], // 
            shenhe_arr: []
        }
    },
    mounted () {
        this.getMessage();
        this.getSelection();
    },
    methods: {
        // 查询信息
        getMessage () {
            getProject({id: this.$route.query.id}).then(res => {
                this.data = res
            })
        },
        // 下拉框信息
        getSelection () {
            getRoleUserList({name: '技术员'}).then(res => {
                this.jishu_arr = [...res]
            })
            getRoleUserList({name: '审核员'}).then(res => {
                this.shenhe_arr = [...res]
            })
        },
        // 添加负责人
        addprincipal() {
            if (!this.jishu_id || !this.shenhe_id) {
                this.$message.error("请选择负责人!");
                return;
            }
            var data = {
                id: this.$route.query.id,
                jishu_id: this.jishu_id,
                shenhe_id: this.shenhe_id
            }
            saveManage(data).then(res => {
                this.$message.success("分配人员成功！");
                setTimeout(() => {
                    this.$router.go(-1);
                }, 1000)
            })
        },
        goback () {
            this.$router.go(-1)
        }   
    }
}
</script>

<style scoped lang="less">
    .main {
        padding: 15px 15px 121px 15px;
        .el-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .active {
            color: #287DD4
        }
    }
</style>


