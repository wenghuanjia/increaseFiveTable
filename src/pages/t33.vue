<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>
                        <div>（一）项目概述（限150字以内）</div>
                        <div>（上报人大审议内容，简要说明项目实施的主要内容和绩效目标）</div>
                        <textarea name="" id="" style="width: 100%" rows="3" v-model="text1"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（二）项目必要性、可行性概述（限2000字以内）</div>
                        <div>（简要描述项目申报原因及背景、前期准备工作、项目实施的必要性和可行性）</div>
                        <textarea name="" id="" style="width: 100%" rows="3" v-model="text2"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（三）项目立项依据（限500字以内）</div>
                        <div>（研究意义、国内外研究/技术发展现状和趋势、预期的应用前景）</div>
                        <textarea name="" id="" style="width: 100%" rows="3" v-model="text3"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（四）项目研究内容（限2000字以内）</div>
                        <div>（研究目标和内容、拟解决的关键技术问题、主要创新点、采用的方法、技术路线以及工艺流程、项目的协同创新机制模式）</div>
                        <textarea name="" id="" style="width: 100%" rows="3" v-model="text4"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（五）项目研究基础（限1000字以内）</div>
                        <div>（技术基础，研发条件，产品有效性、安全性测试/报告，功能、性能试验或仿真验证/测试报告、验证报告，项目负责人及团队简介，项目组主要成员近三年科研经历及奖励等）</div>
                        <textarea name="" id="" style="width: 100%" rows="3" v-model="text5"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（六）项目效益分析（限500字以内）</div>
                        <div>（项目市场分析、预期经济和社会效益分析）</div>
                        <textarea name="" id="" style="width: 100%" rows="3" v-model="text6"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（七）项目预期风险及规避措施（限500字以内）</div>
                        <div>（预期风险、规避措施）</div>
                        <textarea name="" id="" style="width: 100%" rows="3" v-model="text7"></textarea>
                    </td>
                </tr>
            </tbody> 
            <tbody v-else>
                <tr>
                    <td>
                        <div>（一）项目概述（限150字以内）</div>
                        <div>（上报人大审议内容，简要说明项目实施的主要内容和绩效目标）</div>
                        {{ text1 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（二）项目必要性、可行性概述（限2000字以内）</div>
                        <div>（简要描述项目申报原因及背景、前期准备工作、项目实施的必要性和可行性）</div>
                        {{ text2 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（三）项目立项依据（限500字以内）</div>
                        <div>（研究意义、国内外研究/技术发展现状和趋势、预期的应用前景）</div>
                        {{ text3 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（四）项目研究内容（限2000字以内）</div>
                        <div>（研究目标和内容、拟解决的关键技术问题、主要创新点、采用的方法、技术路线以及工艺流程、项目的协同创新机制模式）</div>
                        {{ text4 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（五）项目研究基础（限1000字以内）</div>
                        <div>（技术基础，研发条件，产品有效性、安全性测试/报告，功能、性能试验或仿真验证/测试报告、验证报告，项目负责人及团队简介，项目组主要成员近三年科研经历及奖励等）</div>
                        {{ text5 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（六）项目效益分析（限500字以内）</div>
                        <div>（项目市场分析、预期经济和社会效益分析）</div>
                        {{ text6 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（七）项目预期风险及规避措施（限500字以内）</div>
                        <div>（预期风险、规避措施）</div>
                        {{ text7 }}
                    </td>
                </tr>
            </tbody>            
        </table>
        
        <div v-if="audit_flag == 3">
            <p style="margin-bottom: 10px;">批注</p>
            <input type="text" class="form-control" placeholder="批注" v-model="pzhu" style="margin-bottom: 15px;">
        </div>
        <div v-if="audit_flag == 2">
            <p style="margin-bottom: 10px;">批注:{{ pzhu }}</p>
        </div>

        <el-button type="primary" size="mini" @click="upload_data" v-if="state_flag == 1">保存</el-button>
        <el-button type="primary" size="mini" @click="set_data" v-if="state_flag == 2">修改</el-button>
        <el-button type="primary" size="mini" @click="setpostil" v-if="audit_flag == 3">添加批注</el-button>
        <!-- <el-button type="primary" size="mini" @click="derived_field" v-if="deriveFlag">导出word</el-button> -->
        <el-button type="primary" size="mini" v-if="deriveFlag" @click="derived_field">导出word</el-button>
    </div>
</template>

<script>
import { create, read, update, edit, index } from "service/getData"
import { mapState, mapMutations } from "vuex"

export default {
    props: ['flag', 'deriveFlag'],
    data () {
        return {
            pzhu: '', // 批注
            id: null, // 修改需要的id
            loading: true, // 加载中
            biao_id: 34, // 第几个表
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
            text7: "",
            pro_id: null, // 项目id
            project_type_id: "" // 项目类型id
        }
    },
    created () {
        this.project_type_id = this.$route.query.id; // 项目类型id
        this.pro_id = this.$route.query.pro_id ? this.$route.query.pro_id : null; // 项目id
        if (this.pro_id) {
            this.check_data();
        } else {
            this.loading = false;
        }
    },
    computed: {
        ...mapState(['state_flag', 'audit_flag'])
    },
    methods: {
        ...mapMutations(['SET_STATE_FLAG']),
        // 导出word
        derived_field () {
            index({
                biao_id: this.biao_id,
                pro_id: this.pro_id
            }).then(res => {
                window.open(res)
            })
        },
        // 添加批注
        setpostil () {
            const loading = this.$loading({
                lock: true,
                text: '上传中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            edit({
                biao_id: this.biao_id,
                id: this.id,
                pzhu: this.pzhu
            }).then(res => {
                loading.close();
            }).catch(err => {
                loading.close();
            })
        },
        // 查询表数据
        check_data () {
            read({pro_id: this.pro_id,biao_id: this.biao_id}).then(res => {
                this.$emit('hide_table', res.showArr);
                if (res.data.length >= 1) {
                    var data = res.data[0]['content'];
                    Object.keys(data).forEach(key => {
                        this[key] = data[key]
                    })
                    this.id = res.data[0].id;
                    this.pro_id = res.data[0].pro_id;
                    this.pzhu = res.data[0].pzhu;
                    this.SET_STATE_FLAG(2); // 修改
                } else {
                    this.SET_STATE_FLAG(1); // 添加
                }
                if (this.flag) { // 查看
                    this.SET_STATE_FLAG(3);
                }
                this.loading = false;
            })
        },
        // 修改表数据
        set_data () {
            const loading = this.$loading({
                lock: true,
                text: '上传中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            update({
                text1: this.text1,
                text2: this.text2,
                text3: this.text3,
                text4: this.text4,
                text5: this.text5,
                text6: this.text6,
                text7: this.text7,
                biao_id: this.biao_id, // 第几个表
                id: this.id, // 项目id
            }).then(res => {
                loading.close();
                this.$message.success('修改成功!');
            }).catch(err => {
                loading.close();
            });
        },
        // 添加表数据
        upload_data () {
            const loading = this.$loading({
                lock: true,
                text: '上传中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            var data = {
                text1: this.text1,
                text2: this.text2,
                text3: this.text3,
                text4: this.text4,
                text5: this.text5,
                text6: this.text6,
                text7: this.text7,
                biao_id: this.biao_id, // 第几个表
                pro_id: this.pro_id, // 项目id
                project_type_id: this.project_type_id // 项目类型id
            }
            create(data).then(res => {
                loading.close();
                this.$message.success('上传成功!');
                this.id = res.id;
                this.SET_STATE_FLAG(2);
                // 第一次添加有pro_id
                if (res.pro_id) {
                    this.$router.push({query: {'id': this.project_type_id, 'pro_id':res.pro_id}})
                }
            }).catch(err => {
                loading.close();
            })
        }
    }
}
</script>

<style scoped lang="less">
    .form-inlin {
        display: inline-block;
        width: 200px;
    }

    input[type="radio"] {
        -webkit-appearance: radio;
        margin: 0px;
    }

    input[type="checkbox"] {
        -webkit-appearance: checkbox;
        margin: 0px;
    }

    .title {
        text-align: center;
    }
</style>
