<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>技术领域</td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text1" /></td>
                </tr>
                <tr>
                    <td>获得知识产权数量(件)</td>
                    <td>Ⅰ类</td>
                    <td><input type="text" class="form-control" v-model="text2" /></td>
                    <td>ⅠⅠ类</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text3" /></td>
                </tr>
                <tr>
                    <td>人力资源情况（人）</td>
                    <td>职工总数</td>
                    <td><input type="text" class="form-control" v-model="text4" /></td>
                    <td>科技人员数</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text5" /></td>
                </tr>
                <tr>
                    <td rowspan="4">近三年经营情况（万元）</td>
                    <td>年度种类</td>
                    <td>净资产</td>
                    <td>销售收入</td>
                    <td colspan="2">利润总额</td>
                </tr>
                <tr>
                    <td>第一年</td>
                    <td><input type="text" class="form-control" v-model="text6" /></td>
                    <td><input type="text" class="form-control" v-model="text7" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td>第二年</td>
                    <td><input type="text" class="form-control" v-model="text9" /></td>
                    <td><input type="text" class="form-control" v-model="text10" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text11" /></td>
                </tr>
                <tr>
                    <td>第三年</td>
                    <td><input type="text" class="form-control" v-model="text12" /></td>
                    <td><input type="text" class="form-control" v-model="text13" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text14" /></td>
                </tr>
                <tr>
                    <td rowspan="2">近三年研究开发费用总额（万元）</td>
                    <td rowspan="2" colspan="2"><input type="text" class="form-control" v-model="text15" /></td>
                    <td rowspan="2">其中</td>
                    <td>在中国境内研发费用总额（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text16" /></td>
                </tr>
                <tr>
                    <td>基础研究投入费用总额（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text17" /></td>
                </tr>
                <tr>
                    <td colspan="2">近一年企业总收入（万元）</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text18" /></td>
                </tr>
                <tr>
                    <td colspan="2">近一年高新技术产品（服务）收入（万元）</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text19" /></td>
                </tr>
                <tr>
                    <td colspan="2">申请认定前一年内是否发生过重大安全、重大质量事故或严重环境违法行为</td>
                    <td colspan="4">
                        <label><input type="radio" v-model="radio1" value="1">是</label>
                        <label><input type="radio" v-model="radio1" value="0">否</label>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>技术领域</td>
                    <td colspan="5">{{ text1 }}</td>
                </tr>
                <tr>
                    <td>获得知识产权数量(件)</td>
                    <td>Ⅰ类</td>
                    <td>{{ text2 }}</td>
                    <td>ⅠⅠ类</td>
                    <td colspan="2">{{ text3 }}</td>
                </tr>
                <tr>
                    <td>人力资源情况（人）</td>
                    <td>职工总数</td>
                    <td>{{ text4 }}</td>
                    <td>科技人员数</td>
                    <td colspan="2">{{ text5 }}</td>
                </tr>
                <tr>
                    <td rowspan="4">近三年经营情况（万元）</td>
                    <td>年度种类</td>
                    <td>净资产</td>
                    <td>销售收入</td>
                    <td colspan="2">利润总额</td>
                </tr>
                <tr>
                    <td>第一年</td>
                    <td>{{ text6 }}</td>
                    <td>{{ text7 }}</td>
                    <td colspan="2">{{ text8 }}</td>
                </tr>
                <tr>
                    <td>第二年</td>
                    <td>{{ text9 }}</td>
                    <td>{{ text10 }}</td>
                    <td colspan="2">{{ text11 }}</td>
                </tr>
                <tr>
                    <td>第三年</td>
                    <td>{{ text12 }}</td>
                    <td>{{ text13 }}</td>
                    <td colspan="2">{{ text14 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">近三年研究开发费用总额（万元）</td>
                    <td rowspan="2" colspan="2">{{ text15 }}</td>
                    <td rowspan="2">其中</td>
                    <td>在中国境内研发费用总额（万元）</td>
                    <td colspan="2">{{ text16 }}</td>
                </tr>
                <tr>
                    <td>基础研究投入费用总额（万元）</td>
                    <td colspan="2">{{ text17 }}</td>
                </tr>
                <tr>
                    <td colspan="2">近一年企业总收入（万元）</td>
                    <td colspan="4">{{ text18 }}</td>
                </tr>
                <tr>
                    <td colspan="2">近一年高新技术产品（服务）收入（万元）</td>
                    <td colspan="4">{{ text19 }}</td>
                </tr>
                <tr>
                    <td colspan="2">申请认定前一年内是否发生过重大安全、重大质量事故或严重环境违法行为</td>
                    <td colspan="4">
                        <label><input type="radio" disabled v-model="radio1" value="1">是</label>
                        <label><input type="radio" disabled v-model="radio1" value="0">否</label>
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
            biao_id: 39, // 第几个表
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
            text7: "",
            text8: "",
            text9: "",
            text10: "",
            text11: "",
            text12: "",
            text13: "",
            text14: "",
            text15: "",
            text16: "",
            text17: "",
            text18: "",
            text19: "",
            radio1: "",
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
                this.$message.success('修改成功!');
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
                text8: this.text8,
                text9: this.text9,
                text10: this.text10,
                text11: this.text11,
                text12: this.text12,
                text13: this.text13,
                text14: this.text14,
                text15: this.text15,
                text16: this.text16,
                text17: this.text17,
                text18: this.text18,
                text19: this.text19,
                radio1: this.radio1,
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
                text8: this.text8,
                text9: this.text9,
                text10: this.text10,
                text11: this.text11,
                text12: this.text12,
                text13: this.text13,
                text14: this.text14,
                text15: this.text15,
                text16: this.text16,
                text17: this.text17,
                text18: this.text18,
                text19: this.text19,
                radio1: this.radio1,
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
