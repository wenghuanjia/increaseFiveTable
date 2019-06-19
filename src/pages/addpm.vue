<template>
    <div class="main">
        <v-header getaddpm="true" ref="vheader"></v-header>
        <div class="form">
            <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
                <el-tab-pane label="广东省工程技术研究中心认定申请书" name="addpm/t0" v-if="showtab(1)"></el-tab-pane>
                <el-tab-pane label="申报单位基本情况" name="addpm/t1" v-if="showtab(2)"></el-tab-pane>
                <el-tab-pane label="依托单位上一年度经济效益与研究开发经费情况" name="addpm/t2" v-if="showtab(3)"></el-tab-pane>
                <el-tab-pane label="研究开发人员情况表" name="addpm/t3" v-if="showtab(4)"></el-tab-pane>
                <el-tab-pane label="基建条件及仪器设备情况" name="addpm/t4" v-if="showtab(5)"></el-tab-pane>
                <el-tab-pane label="工程技术研究开发能力和水平" name="addpm/t5" v-if="showtab(6)"></el-tab-pane>
                <el-tab-pane label="附件清单" name="addpm/t6" v-if="showtab(7)"></el-tab-pane>
                <el-tab-pane label="广东省科技计划项目" name="addpm/t7" v-if="showtab(8)"></el-tab-pane>
                <el-tab-pane label="项目基本情况表" name="addpm/t8" v-if="showtab(9)"></el-tab-pane>
                <el-tab-pane label="项目内容" name="addpm/t9" v-if="showtab(10)"></el-tab-pane>
                <el-tab-pane label="项目实施绩效" name="addpm/t10" v-if="showtab(11)"></el-tab-pane>
                <el-tab-pane label="项目计划进度" name="addpm/t11" v-if="showtab(12)"></el-tab-pane>
                <el-tab-pane label="经费情况表" name="addpm/t12" v-if="showtab(13)"></el-tab-pane>
                <el-tab-pane label="项目承担单位基本情况表（1）" name="addpm/t13" v-if="showtab(14)"></el-tab-pane>
                <el-tab-pane label="项目承担单位基本情况表（2）" name="addpm/t14" v-if="showtab(15)"></el-tab-pane>
                <el-tab-pane label="参与单位基本情况表（1）（适用于企业）" name="addpm/t15" v-if="showtab(16)"></el-tab-pane>
                <el-tab-pane label="参与单位基本情况表（2）（适用于高校、科研院所）" name="addpm/t16" v-if="showtab(17)"></el-tab-pane>
                <el-tab-pane label="主承担单位及参与单位分工及经费分配情况" name="addpm/t17" v-if="showtab(18)"></el-tab-pane>
                <el-tab-pane label="项目组人员情况" name="addpm/t18" v-if="showtab(19)"></el-tab-pane>
                <el-tab-pane label="项目负责人基本信息" name="addpm/t19" v-if="showtab(20)"></el-tab-pane>
                <el-tab-pane label="本申请项目所附附件清单" name="addpm/t20" v-if="showtab(21)"></el-tab-pane>
                <el-tab-pane label="广州市科技计划项目" name="addpm/t21" v-if="showtab(22)"></el-tab-pane>
                <el-tab-pane label="申报单位基本情况" name="addpm/t22" v-if="showtab(23)"></el-tab-pane>
                <el-tab-pane label="合作单位基本情况" name="addpm/t23" v-if="showtab(24)"></el-tab-pane>
                <el-tab-pane label="申报单位近三年主要经济指标及财务状况" name="addpm/t24" v-if="showtab(25)"></el-tab-pane>
                <el-tab-pane label="申报单位近年知识产权、科研、人员等状况" name="addpm/t25" v-if="showtab(26)"></el-tab-pane>
                <el-tab-pane label="纳统企业2017年企业研发活动情况" name="addpm/t26" v-if="showtab(27)"></el-tab-pane>
                <el-tab-pane label="申报单位年度审计报告信息" name="addpm/t27" v-if="showtab(28)"></el-tab-pane>
                <el-tab-pane label="企业申报单位财务状况" name="addpm/t28" v-if="showtab(29)"></el-tab-pane>
                <el-tab-pane label="重复申报自查" name="addpm/t29" v-if="showtab(30)"></el-tab-pane>
                <el-tab-pane label="项目组成员信息" name="addpm/t30" v-if="showtab(31)"></el-tab-pane>
                <el-tab-pane label="项目负责人工作经历" name="addpm/t31" v-if="showtab(32)"></el-tab-pane>
                <el-tab-pane label="项目经费预算" name="addpm/t32" v-if="showtab(33)"></el-tab-pane>
                <el-tab-pane label="项目基本情况（附可行性报告）" name="addpm/t33" v-if="showtab(34)"></el-tab-pane>
                <el-tab-pane label="工作进度安排" name="addpm/t34" v-if="showtab(35)"></el-tab-pane>
                <el-tab-pane label="项目主要验收指标" name="addpm/t35" v-if="showtab(36)"></el-tab-pane>
                <el-tab-pane label="项目申报单位与合作单位合作内容" name="addpm/t36" v-if="showtab(37)"></el-tab-pane>
                <el-tab-pane label="主要情况" name="addpm/t38" v-if="showtab(39)"></el-tab-pane>
                <el-tab-pane label="知识产权汇总表" name="addpm/t39" v-if="showtab(40)"></el-tab-pane>
                <el-tab-pane label="人力资源情况表" name="addpm/t40" v-if="showtab(41)"></el-tab-pane>
                <el-tab-pane label="企业研究开发活动情况表（近三年执行的活动，按单一活动填报）" name="addpm/t41" v-if="showtab(42)"></el-tab-pane>
                <el-tab-pane label="企业年度研究开发费用结构明细表(按近三年每年分别填报)" name="addpm/t42" v-if="showtab(43)"></el-tab-pane>
                <el-tab-pane label="上年度高新技术产品（服务）情况表（按单一产品（服务）填报）" name="addpm/t43" v-if="showtab(44)"></el-tab-pane>
                <el-tab-pane label="企业创新能力" name="addpm/t44" v-if="showtab(45)"></el-tab-pane>
                <el-tab-pane label="附件清单" name="addpm/t37" v-if="showtab(38)"></el-tab-pane>

                <!-- 添加五张新表 -->
                <el-tab-pane label="每月填写研发费用表" name="addpm/t45" v-if="showtab(46)"></el-tab-pane>
                <el-tab-pane label="研发人员" name="addpm/t46" v-if="showtab(47)"></el-tab-pane>
                <el-tab-pane label="研发项目" name="addpm/t47" v-if="showtab(48)"></el-tab-pane>
                <el-tab-pane label="知识产权管理模块" name="addpm/t48" v-if="showtab(49)"></el-tab-pane>
                <el-tab-pane label="高新材料收集管理" name="addpm/t49" v-if="showtab(50)"></el-tab-pane>
                <router-view></router-view>
            </el-tabs>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from "components/vHeader/vHeader"
import vFooter from "components/vFooter/vFooter"
import { addProject } from "service/getData"

export default {
    data () {
        return {
            activeName: 'addpm/t0',
            showarr: []
        }
    },
    components: {
        vHeader,
        vFooter
    },
    async created () {
        this.id = this.$route.query.id; // 项目类型id
        // 显示哪个表
        await addProject({project_type_id: this.id}).then(res => {
            this.showarr = res;
            this.activeName = `addpm/t${res[0] - 1}`;
            this.$router.push({ path: '/' + this.activeName, query: { 'id': this.$route.query.id, 'pro_id': this.$route.query.pro_id} })
        });
    },
    mounted () {
    },
    methods: {
        handleClick(tab, event) {
            this.$router.push({ path: '/' + tab.paneName, query: { 'id': this.$route.query.id, 'pro_id': this.$route.query.pro_id} })
        },
        // 显示哪个表格
        showtab (index) {
            var flag = false;
            var showarr = this.showarr;
            showarr.find(function (value) {
                if (value == index) {
                    flag = true;
                }
            });
            return flag;
        }
    }
}
</script>

<style scoped lang="less">
    .main {
        position: relative;
        min-height: 100%;
    }
    .form {
        padding: 15px 15px 121px 15px;
    }
</style>


