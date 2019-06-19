<template>
    <div class="table">
        <el-table :data="table" style="width: 100%" :border="true">
            <el-table-column label="企业名称" align="center">
                <template slot-scope="scope">
                    {{ scope.row.company_name }}
                </template>
            </el-table-column>
            <el-table-column label="项目名称" align="center">
                <template slot-scope="scope">
                    <el-button type="text" @click="openModel(scope.row.id, scope.row.status)">{{ scope.row.name }}</el-button>
                </template>
            </el-table-column>
            <el-table-column label="年度/审批" align="center">
                <template slot-scope="scope">
                    {{ scope.row.year }}
                </template>
            </el-table-column>
            <el-table-column label="技术员" align="center">
                <template slot-scope="scope">
                    {{ scope.row.user_nickname }}
                </template>
            </el-table-column>
            <!-- <el-table-column label="技术员" align="center">
                <template slot-scope="scope">
                    {{ scope.row.jishu }}
                </template>
            </el-table-column> -->
            <el-table-column label="提交时间" align="center">
                <template slot-scope="scope">
                    {{ scope.row.create_time }}
                </template>
            </el-table-column>
            <el-table-column label="状态" align="center">
                <template slot-scope="scope">
                    <el-button type="text" @click="openModelaudit(scope.row.status)">{{ scope.row.type_status }}</el-button>
                    <!-- <el-button type="text">{{ scope.row.type_status }}</el-button> -->
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <!-- 查看 -->
                    <el-button size="mini" type="text" v-if="user.name == '管理员' || user.name == '超级管理员' || user.name == '业务员'" @click="openModel(scope.row.id, scope.row.status)">查看</el-button>

                    <!-- 业务修改 -->
                    <el-button size="mini" type="text" v-if="scope.row.status == 0 && $route.path != '/staff' && user.name == '业务员'" @click="handleEdit(scope.row.id, scope.row.status, scope.row.project_type_id)">修改</el-button>
                    <!-- 技术修改 -->
                    <el-button size="mini" type="text" v-if="(scope.row.status == 2 || scope.row.status == 5) && $route.path != '/staff' && user.name == '技术员'" @click="handleEdit(scope.row.id, scope.row.status, scope.row.project_type_id)">修改</el-button>

                    <!-- 业务提交 -->
                    <el-button size="mini" type="text" v-if="scope.row.status == 0 && $route.path != '/staff' && user.name == '业务员'" @click="handleDelete(scope.row.id)">提交</el-button>
                    <!-- 技术提交 -->
                    <el-button size="mini" type="text" v-if="(scope.row.status == 2 || scope.row.status == 5) && $route.path != '/staff' && user.name == '技术员'" @click="handleDelete(scope.row.id)">提交</el-button>

                    <!-- 管理添加负责人 -->
                    <el-button size="mini" type="text" v-if=" RegExp(/\/staff/).test($route.path) && scope.row.status == 1" @click="addprincipal(scope.$index, scope.row)">添加负责人</el-button>
                    
                    <!-- 审核批准 -->
                    <el-button size="mini" type="text" v-if="scope.row.status == 3 && $route.path != '/staff' && user.name == '审核员'" @click="setratify(scope.row.id, scope.row.status)">批注</el-button>

                    <!-- 审核员提交批注 -->
                    <el-button size="mini" type="text" v-if="scope.row.status == 3 && $route.path != '/staff' && user.name == '审核员'" @click="sub_setratify(scope.row.id, scope.row.status)">提交批注</el-button>

                    <!-- 审核提交 -->
                    <el-button size="mini" type="text" v-if="scope.row.status == 3 && $route.path != '/staff' && user.name == '审核员'" @click="audit(scope.row.id)">审核</el-button>

                    <!-- 删除 -->
                    <el-button size="mini" type="text" v-if="user.name == '管理员' || user.name == '超级管理员' || user.name == '业务员'" @click="deletepm(scope.row.id)">删除</el-button>

                </template>
            </el-table-column>
        </el-table>

        <!-- 查看模态框 -->
        <el-dialog title="企业信息表" width="90%" center :visible.sync="dialogTableVisible">
            <!-- 标签页 -->
            <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
                <el-tab-pane label="广东省工程技术研究中心认定申请书" name="t0"  v-if="showtab(1)"></el-tab-pane>
                <el-tab-pane label="申报单位基本情况" name="t1" v-if="showtab(2)"></el-tab-pane>
                <el-tab-pane label="依托单位上一年度经济效益与研究开发经费情况" name="t2" v-if="showtab(3)"></el-tab-pane>
                <el-tab-pane label="研究开发人员情况表" name="t3" v-if="showtab(4)"></el-tab-pane>
                <el-tab-pane label="基建条件及仪器设备情况" name="t4" v-if="showtab(5)"></el-tab-pane>
                <el-tab-pane label="工程技术研究开发能力和水平" name="t5" v-if="showtab(6)"></el-tab-pane>
                <el-tab-pane label="附件清单" name="t6" v-if="showtab(7)"></el-tab-pane>
                <el-tab-pane label="广东省科技计划项目" name="t7" v-if="showtab(8)"></el-tab-pane>
                <el-tab-pane label="项目基本情况表" name="t8" v-if="showtab(9)"></el-tab-pane>
                <el-tab-pane label="项目内容" name="t9" v-if="showtab(10)"></el-tab-pane>
                <el-tab-pane label="项目实施绩效" name="t10" v-if="showtab(11)"></el-tab-pane>
                <el-tab-pane label="项目计划进度" name="t11" v-if="showtab(12)"></el-tab-pane>
                <el-tab-pane label="经费情况表" name="t12" v-if="showtab(13)"></el-tab-pane>
                <el-tab-pane label="项目承担单位基本情况表（1）" name="t13" v-if="showtab(14)"></el-tab-pane>
                <el-tab-pane label="项目承担单位基本情况表（2）" name="t14" v-if="showtab(15)"></el-tab-pane>
                <el-tab-pane label="参与单位基本情况表（1）（适用于企业）" name="t15" v-if="showtab(16)"></el-tab-pane>
                <el-tab-pane label="参与单位基本情况表（2）（适用于高校、科研院所）" name="t16" v-if="showtab(17)"></el-tab-pane>
                <el-tab-pane label="主承担单位及参与单位分工及经费分配情况" name="t17" v-if="showtab(18)"></el-tab-pane>
                <el-tab-pane label="项目组人员情况" name="t18" v-if="showtab(19)"></el-tab-pane>
                <el-tab-pane label="项目负责人基本信息" name="t19" v-if="showtab(20)"></el-tab-pane>
                <el-tab-pane label="本申请项目所附附件清单" name="t20" v-if="showtab(21)"></el-tab-pane>
                <el-tab-pane label="广州市科技计划项目" name="t21" v-if="showtab(22)"></el-tab-pane>
                <el-tab-pane label="申报单位基本情况" name="t22" v-if="showtab(23)"></el-tab-pane>
                <el-tab-pane label="合作单位基本情况" name="t23" v-if="showtab(24)"></el-tab-pane>
                <el-tab-pane label="申报单位近三年主要经济指标及财务状况" name="t24" v-if="showtab(25)"></el-tab-pane>
                <el-tab-pane label="申报单位近年知识产权、科研、人员等状况" name="t25" v-if="showtab(26)"></el-tab-pane>
                <el-tab-pane label="纳统企业2017年企业研发活动情况" name="t26" v-if="showtab(27)"></el-tab-pane>
                <el-tab-pane label="申报单位年度审计报告信息" name="t27" v-if="showtab(28)"></el-tab-pane>
                <el-tab-pane label="企业申报单位财务状况" name="t28" v-if="showtab(29)"></el-tab-pane>
                <el-tab-pane label="重复申报自查" name="t29" v-if="showtab(30)"></el-tab-pane>
                <el-tab-pane label="项目组成员信息" name="t30" v-if="showtab(31)"></el-tab-pane>
                <el-tab-pane label="项目负责人工作经历" name="t31" v-if="showtab(32)"></el-tab-pane>
                <el-tab-pane label="项目经费预算" name="t32" v-if="showtab(33)"></el-tab-pane>
                <el-tab-pane label="项目基本情况（附可行性报告）" name="t33" v-if="showtab(34)"></el-tab-pane>
                <el-tab-pane label="工作进度安排" name="t34" v-if="showtab(35)"></el-tab-pane>
                <el-tab-pane label="项目主要验收指标" name="t35" v-if="showtab(36)"></el-tab-pane>
                <el-tab-pane label="项目申报单位与合作单位合作内容" name="t36" v-if="showtab(37)"></el-tab-pane>
                <el-tab-pane label="主要情况" name="t38" v-if="showtab(39)"></el-tab-pane>
                <el-tab-pane label="知识产权汇总表" name="t39" v-if="showtab(40)"></el-tab-pane>
                <el-tab-pane label="人力资源情况表" name="t40" v-if="showtab(41)"></el-tab-pane>
                <el-tab-pane label="企业研究开发活动情况表（近三年执行的活动，按单一活动填报）" name="t41" v-if="showtab(42)"></el-tab-pane>
                <el-tab-pane label="企业年度研究开发费用结构明细表(按近三年每年分别填报)" name="t42" v-if="showtab(43)"></el-tab-pane>
                <el-tab-pane label="上年度高新技术产品（服务）情况表（按单一产品（服务）填报）" name="t43" v-if="showtab(44)"></el-tab-pane>
                <el-tab-pane label="企业创新能力" name="t44" v-if="showtab(45)"></el-tab-pane>
                <el-tab-pane label="附件清单" name="t37" v-if="showtab(38)"></el-tab-pane>

                <el-tab-pane label="每月填写研发费用表" name="t45" v-if="showtab(46)"></el-tab-pane>
                <el-tab-pane label="研发人员" name="t46" v-if="showtab(47)"></el-tab-pane>
                <el-tab-pane label="研发项目" name="t47" v-if="showtab(48)"></el-tab-pane>
                <el-tab-pane label="知识产权管理模块" name="t48" v-if="showtab(49)"></el-tab-pane>
                <el-tab-pane label="高新材料收集管理" name="t49" v-if="showtab(50)"></el-tab-pane>

                <router-view :flag="flag" v-if="dialogTableVisible" :deriveFlag="deriveFlag" @hide_table="set_table"></router-view>
            </el-tabs>
        </el-dialog>

        <!-- 审核状态 -->
        <el-dialog title="审核状态" width="50%" center :visible.sync="auditstate">
            <div style="height: 300px;width: 300px; margin: 0 auto;">
                <el-steps direction="vertical" :active="status">
                    <el-step title="填写报告书"></el-step>
                    <el-step title="县区主管审核" description="德庆县科学技术局"></el-step>
                    <el-step title="地市科技局审核" description="肇庆市科学及数据"></el-step>
                    <el-step title="受理纸质材料" description="（科技厅受理窗口）"></el-step>
                    <el-step title="已受理纸质材料"></el-step>
                </el-steps>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { ywsubmit, check, del } from "service/getData"
import { getStore } from "common/common"
import { mapState, mapMutations } from "vuex"

export default {
    props: ['table'],
    inject: ['reload'],
    data () {
        return {
            num: 1,
            dialogTableVisible: false, // 查看模态框
            auditstate: false, // 审核状态模态框
            flag: false, // 是否禁用
            activeName: 't0',
            activeId: null, // id
            setFlag: false, // 是否修改
            status: 1, // 进度条状态 
            deriveFlag: false, // 导出
            showarr: [] // 显示表格
        }
    },
    created () {
        if (this.$route.name) {
            this.activeName = this.$route.name;
        } else {
            var url = this.$route.path;
            this.activeName = url.substr(url.lastIndexOf('/') + 1);
        }
        var user = getStore('user');
        this.user = JSON.parse(user);
    },
    methods: {
        ...mapMutations(['SET_STATE_FLAG', 'SET_AUDIT_FLAG']),
        // 显示哪个表格
        showtab (index) {
            var flag = false;
            var showarr = this.showarr;
            var self = this;
            showarr.find(function (value) {
                if (value == index) {
                    if (self.num == 1) {
                        self.activeName = `t${index - 1}`;
                        
                        var params = self.$route.params.pmid;
                        if (params) {
                            self.$router.push({name: `t${index - 1}`, params: self.$route.params, query: self.$route.query});
                        } else {
                            self.$router.push({path:`t${index - 1}`, query: self.$route.query});
                        }
                        
                        // self.$router.push({name: `t${index - 1}`, query: self.$route.query});
                        self.num = self.num + 1;
                    }
                    flag = true;
                }
            });
            return flag;
        },
        // 修改显示表格
        set_table (showarr) {

            var oldarr = this.showarr
            if (showarr.join('') != oldarr.join('')) {
                this.num = 1;
            }
            this.showarr = showarr;
        },
        // 查询项目
        openModel (id, status) {
            console.log(id)
            console.log(status)
            this.activeId = id;
            // 判断批注显示隐藏
            if (status == 3 || status == 5) {
                this.SET_AUDIT_FLAG(2);
            } else {
                this.SET_AUDIT_FLAG(1);
            }
            this.setFlag = false; // 修改时刷新页面

            // 表数据状态为查看
            this.flag = true;

            var pmid = this.$route.query.pmid;
            // this.deriveFlag = status == 4 && this.user.name == '审核员' ? true : false;
            // 是否允许导出word
            this.deriveFlag = status == 4 ? true : false;
            // console.log(this.$route.query.pmid)
            pmid ? this.$router.push({query: {"pro_id": this.activeId, 'pmid': pmid}}) : this.$router.push({query: {"pro_id": this.activeId}});
            this.dialogTableVisible = true; // 查看模态框显示

        },
        // 查看项目状态
        openModelaudit (status) {
            if (status == 5) {
                this.status = 2;
            } else {
                this.status = status;
            }
            this.auditstate = true; // 模态框显示
        },
        // 修改
        handleEdit (id, status, pid) {
            this.activeId = id;
            this.SET_STATE_FLAG(1);
            // 表数据状态为修改
            this.flag = false; 
            this.setFlag = true; // 修改时刷新页面

            // 判断批注显示隐藏
            if (status == 3 || status == 5 && this.user.name == '审核员') {
                this.SET_AUDIT_FLAG(3);
            } else if (status == 3 || status == 5) {
                this.SET_AUDIT_FLAG(2);
            } else {
                this.SET_AUDIT_FLAG(1);
            }

            var pmid = this.$route.query.pmid;
            this.deriveFlag = status == 4 && this.user.name == '审核员' ? true : false;
            pmid ? this.$router.push({query: {"pro_id": this.activeId, 'pmid': pmid, 'id': pid}}) : this.$router.push({query: {"pro_id": this.activeId, 'id': pid}});
            this.dialogTableVisible = true; // 查看模态框显示

        },
        // 提交
        handleDelete (id) {
            this.$confirm('请再次确认提交', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                ywsubmit({id: id}).then(res => {
                    this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });

                    this.$emit('getpmList', this.$route.params.pmid)
                })
            }).catch(() => {

            })
        },
        // 提交批注
        sub_setratify (id) {
            this.$confirm('请再次确认提交批注', '提示', {
                confirmButtonText: '提交',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                check({id: id,status: 2}).then(res => {
                    this.$message({
                        type: 'success',
                        message: '提交批注成功!'
                    });
                    this.$emit('getpmList', true);
                })
            }).catch(() => {});
        },
        // 审核
        audit (id) {
            this.$confirm('请再次确认审核', '提示', {
                confirmButtonText: '通过',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                check({id: id,status: 1}).then(res => {
                    this.$message({
                        type: 'success',
                        message: '审核成功!'
                    });
                    this.$emit('getpmList', true)
                })
            }).catch(() => {});
        },
        // 删除项目
        deletepm (id) {
            this.$confirm('请再次确认删除', '提示', {
                confirmButtonText: '删除',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                del({id: id}).then(res => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.$emit('getpmList', true)
                })
            }).catch(() => {});
        },
        // 添加负责人
        addprincipal (e, data) {
           this.$router.push({ "path": "/staff/addprincipal", query: {"id": data.id} });
        },
        // 模态框的tabs跳转
        handleClick(tab, event) {
            var params = this.$route.params.pmid;
            if (params) {
                this.$router.push({name: tab.name, params: {pmid: params}, query: {"pro_id": this.activeId, "id": this.$route.query.id}});
            } else {
                this.$router.push({path: tab.name, query: {"pro_id": this.activeId, "id": this.$route.query.id}});
            }
        },
        // 审核员批注
        setratify(id, status) {
            this.activeId = id;
            this.flag = true; // 是否禁用
            this.setFlag = false;  // 修改时刷新页面
            this.SET_AUDIT_FLAG(3); // 批注添加
            this.deriveFlag = status == 4 && this.user.name == '审核员' ? true : false;
            this.$router.push({query: {"pro_id": this.activeId}});
            this.dialogTableVisible = true; // 查看模态框显示
        }
    },
    // 监听
    watch: {
        // 点击修改并且模态框消失，刷新页面
        dialogTableVisible (newvar, oldvar) {
            if (!newvar && this.setFlag) {
                this.reload();
            }
        }
    }
}
</script>

<style scoped lang="less">
    
</style>


