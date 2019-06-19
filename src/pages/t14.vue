<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <thead>
                <tr>
                    <td colspan="6">单位基本信息</td>
                </tr>
            </thead>
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>单位名称</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text1" /></td>
                    <td>组织机构代码</td>
                    <td><input type="text" class="form-control" v-model="text2" /></td>
                </tr>
                <tr>
                    <td>注册资金</td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                    <td>所在地区</td>
                    <td><input type="text" class="form-control" v-model="text4" /></td>
                    <td>银行信用等级</td>
                    <td><input type="text" class="form-control" v-model="text5" /></td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td><input type="text" class="form-control" v-model="text6" /></td>
                    <td>所属行业</td>
                    <td><input type="text" class="form-control" v-model="text7" /></td>
                    <td>单位级别</td>
                    <td><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td>职工总人数</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text9" /></td>
                    <td>研究人员数</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td>上年研发经费（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text11" /></td>
                    <td>技工贸总收入（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text12" /></td>
                </tr>
                <tr>
                    <td colspan="2">是否科技特派员派出单位</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text13" /></td>
                </tr>
                <tr>
                    <td colspan="6">近3年承担科技计划项目数量</td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td colspan="2">国家级</td>
                    <td>省部级</td>
                    <td>其他</td>
                </tr>
                <tr>
                    <td colspan="2">项目数（项）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text14" /></td>
                    <td><input type="text" class="form-control" v-model="text15" /></td>
                    <td><input type="text" class="form-control" v-model="text16" /></td>
                </tr>
                <tr>
                    <td colspan="2">项目总经费（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text17" /></td>
                    <td><input type="text" class="form-control" v-model="text18" /></td>
                    <td><input type="text" class="form-control" v-model="text19" /></td>
                </tr>
                <tr>
                    <td colspan="6">建立的科研平台</td>
                </tr>
                <tr>
                    <td colspan="2">平台类型</td>
                    <td>国家级</td>
                    <td>省级</td>
                    <td>市级</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td colspan="2">1.重点实验室</td>
                    <td><input type="text" class="form-control" v-model="text20" /></td>
                    <td><input type="text" class="form-control" v-model="text21" /></td>
                    <td><input type="text" class="form-control" v-model="text22" /></td>
                    <td><input type="text" class="form-control" v-model="text23" /></td>
                </tr>
                <tr>
                    <td colspan="2">2.博士后科研流动站</td>
                    <td><input type="text" class="form-control" v-model="text24" /></td>
                    <td><input type="text" class="form-control" v-model="text25" /></td>
                    <td><input type="text" class="form-control" v-model="text26" /></td>
                    <td><input type="text" class="form-control" v-model="text27" /></td>
                </tr>
                <tr>
                    <td colspan="2">3.工程技术开发中心</td>
                    <td><input type="text" class="form-control" v-model="text28" /></td>
                    <td><input type="text" class="form-control" v-model="text29" /></td>
                    <td><input type="text" class="form-control" v-model="text30" /></td>
                    <td><input type="text" class="form-control" v-model="text31" /></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" class="form-control" v-model="text32" placeholder="其他（请注明）"></td>
                    <td><input type="text" class="form-control" v-model="text33" /></td>
                    <td><input type="text" class="form-control" v-model="text34" /></td>
                    <td><input type="text" class="form-control" v-model="text35" /></td>
                    <td><input type="text" class="form-control" v-model="text36" /></td>
                </tr>
                <tr>
                    <td colspan="6"><input type="text" class="form-control" v-model="text37" placeholder="（可补充）"></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>单位名称</td>
                    <td colspan="3">{{ text1 }}</td>
                    <td>组织机构代码</td>
                    <td>{{ text2 }}</td>
                </tr>
                <tr>
                    <td>注册资金</td>
                    <td>{{ text3 }}</td>
                    <td>所在地区</td>
                    <td>{{ text4 }}</td>
                    <td>银行信用等级</td>
                    <td>{{ text5 }}</td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td>{{ text6 }}</td>
                    <td>所属行业</td>
                    <td>{{ text7 }}</td>
                    <td>单位级别</td>
                    <td>{{ text8 }}</td>
                </tr>
                <tr>
                    <td>职工总人数</td>
                    <td colspan="2">{{ text9 }}</td>
                    <td>研究人员数</td>
                    <td colspan="2">{{ text10 }}</td>
                </tr>
                <tr>
                    <td>上年研发经费（万元）</td>
                    <td colspan="2">{{ text11 }}</td>
                    <td>技工贸总收入（万元）</td>
                    <td colspan="2">{{ text12 }}</td>
                </tr>
                <tr>
                    <td colspan="2">是否科技特派员派出单位</td>
                    <td colspan="4">{{ text13 }}</td>
                </tr>
                <tr>
                    <td colspan="6">近3年承担科技计划项目数量</td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td colspan="2">国家级</td>
                    <td>省部级</td>
                    <td>其他</td>
                </tr>
                <tr>
                    <td colspan="2">项目数（项）</td>
                    <td colspan="2">{{ text14 }}</td>
                    <td>{{ text15 }}</td>
                    <td>{{ text16 }}</td>
                </tr>
                <tr>
                    <td colspan="2">项目总经费（万元）</td>
                    <td colspan="2">{{ text17 }}</td>
                    <td>{{ text18 }}</td>
                    <td>{{ text19 }}</td>
                </tr>
                <tr>
                    <td colspan="6">建立的科研平台</td>
                </tr>
                <tr>
                    <td colspan="2">平台类型</td>
                    <td>国家级</td>
                    <td>省级</td>
                    <td>市级</td>
                    <td>无</td>
                </tr>
                <tr>
                    <td colspan="2">1.重点实验室</td>
                    <td>{{ text20 }}</td>
                    <td>{{ text21 }}</td>
                    <td>{{ text22 }}</td>
                    <td>{{ text23 }}</td>
                </tr>
                <tr>
                    <td colspan="2">2.博士后科研流动站</td>
                    <td>{{ text24 }}</td>
                    <td>{{ text25 }}</td>
                    <td>{{ text26 }}</td>
                    <td>{{ text27 }}</td>
                </tr>
                <tr>
                    <td colspan="2">3.工程技术开发中心</td>
                    <td>{{ text28 }}</td>
                    <td>{{ text29 }}</td>
                    <td>{{ text30 }}</td>
                    <td>{{ text31 }}</td>
                </tr>
                <tr>
                    <td colspan="2">{{ text32 }}</td>
                    <td>{{ text33 }}</td>
                    <td>{{ text34 }}</td>
                    <td>{{ text35 }}</td>
                    <td>{{ text36 }}</td>
                </tr>
                <tr>
                    <td colspan="6">{{ text37 }}</td>
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
            biao_id: 15, // 第几个表
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
            text20: "",
            text21: "",
            text22: "",
            text23: "",
            text24: "",
            text25: "",
            text26: "",
            text27: "",
            text28: "",
            text29: "",
            text30: "",
            text31: "",
            text32: "",
            text33: "",
            text34: "",
            text35: "",
            text36: "",
            text37: "",
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
                text20: this.text20,
                text21: this.text21,
                text22: this.text22,
                text23: this.text23,
                text24: this.text24,
                text25: this.text25,
                text26: this.text26,
                text27: this.text27,
                text28: this.text28,
                text29: this.text29,
                text30: this.text30,
                text31: this.text31,
                text32: this.text32,
                text33: this.text33,
                text34: this.text34,
                text35: this.text35,
                text36: this.text36,
                text37: this.text37,
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
                text20: this.text20,
                text21: this.text21,
                text22: this.text22,
                text23: this.text23,
                text24: this.text24,
                text25: this.text25,
                text26: this.text26,
                text27: this.text27,
                text28: this.text28,
                text29: this.text29,
                text30: this.text30,
                text31: this.text31,
                text32: this.text32,
                text33: this.text33,
                text34: this.text34,
                text35: this.text35,
                text36: this.text36,
                text37: this.text37,
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
