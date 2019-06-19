<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td rowspan="3">2015-2017年获得知识产权（件）</td>
                    <td rowspan="2">专利申请总数</td>
                    <td rowspan="2">专利授权总数</td>
                    <td colspan="2">其中发明</td>
                    <td colspan="2">其中实用新型</td>
                    <td colspan="2">其他</td>
                </tr>
                <tr>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" v-model="text1" /></td>
                    <td><input type="text" class="form-control" v-model="text2" /></td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                    <td><input type="text" class="form-control" v-model="text4" /></td>
                    <td><input type="text" class="form-control" v-model="text5" /></td>
                    <td><input type="text" class="form-control" v-model="text6" /></td>
                    <td><input type="text" class="form-control" v-model="text7" /></td>
                    <td><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td rowspan="16">2015-2017年高新技术产品</td>
                    <td colspan="3">产品名称</td>
                    <td colspan="5">产值（万元）</td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text9" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text11" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text12" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text13" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text14" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text15" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text16" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text17" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text18" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text19" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text20" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text21" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text22" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text23" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text24" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text25" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text26" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text27" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text28" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text29" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text30" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text31" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text32" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text33" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text34" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text35" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text36" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text37" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text38" /></td>
                </tr>
                <tr>
                    <td rowspan="16">企业研发机构</td>
                    <td colspan="3">企业研发机构名称</td>
                    <td colspan="5">企业研发机构等级</td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text39" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text40" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text41" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text42" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text43" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text44" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text45" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text46" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text47" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text48" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text49" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text50" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text51" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text52" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text53" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text54" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text55" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text56" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text57" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text58" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text59" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text60" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text61" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text62" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text63" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text64" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text65" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text66" /></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text67" /></td>
                    <td colspan="5"><input type="text" class="form-control" v-model="text68" /></td>
                </tr>
                <tr>
                    <td>通过认定或认证情况</td>
                    <td colspan="8"><input type="text" class="form-control" v-model="text69" /></td>
                </tr>
                <tr>
                    <td rowspan="2">人员情况</td>
                    <td>职工总数</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text70" /></td>
                    <td>专业技术人员数</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text71" /></td>
                </tr>
                <tr>
                    <td>其中：高级职称</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text72" /></td>
                    <td>中级职称</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text73" /></td>
                </tr>
                <tr>
                    <td>其它有关情况说明</td>
                    <td colspan="8"><input type="text" class="form-control" v-model="text74" /></td>
                </tr>
            </tbody>   
            <tbody v-else>
                <tr>
                    <td rowspan="3">2015-2017年获得知识产权（件）</td>
                    <td rowspan="2">专利申请总数</td>
                    <td rowspan="2">专利授权总数</td>
                    <td colspan="2">其中发明</td>
                    <td colspan="2">其中实用新型</td>
                    <td colspan="2">其他</td>
                </tr>
                <tr>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                </tr>
                <tr>
                    <td>{{ text1 }}</td>
                    <td>{{ text2 }}</td>
                    <td>{{ text3 }}</td>
                    <td>{{ text4 }}</td>
                    <td>{{ text5 }}</td>
                    <td>{{ text6 }}</td>
                    <td>{{ text7 }}</td>
                    <td>{{ text8 }}</td>
                </tr>
                <tr>
                    <td rowspan="16">2015-2017年高新技术产品</td>
                    <td colspan="3">产品名称</td>
                    <td colspan="5">产值（万元）</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text9 }}</td>
                    <td colspan="5">{{ text10 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text11 }}</td>
                    <td colspan="5">{{ text12 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text13 }}</td>
                    <td colspan="5">{{ text14 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text15 }}</td>
                    <td colspan="5">{{ text16 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text17 }}</td>
                    <td colspan="5">{{ text18 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text19 }}</td>
                    <td colspan="5">{{ text20 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text21 }}</td>
                    <td colspan="5">{{ text22 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text23 }}</td>
                    <td colspan="5">{{ text24 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text25 }}</td>
                    <td colspan="5">{{ text26 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text27 }}</td>
                    <td colspan="5">{{ text28 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text29 }}</td>
                    <td colspan="5">{{ text30 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text31 }}</td>
                    <td colspan="5">{{ text32 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text33 }}</td>
                    <td colspan="5">{{ text34 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text35 }}</td>
                    <td colspan="5">{{ text36 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text37 }}</td>
                    <td colspan="5">{{ text38 }}</td>
                </tr>
                <tr>
                    <td rowspan="16">企业研发机构</td>
                    <td colspan="3">企业研发机构名称</td>
                    <td colspan="5">企业研发机构等级</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text39 }}</td>
                    <td colspan="5">{{ text40 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text41 }}</td>
                    <td colspan="5">{{ text42 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text43 }}</td>
                    <td colspan="5">{{ text44 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text45 }}</td>
                    <td colspan="5">{{ text46 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text47 }}</td>
                    <td colspan="5">{{ text48 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text49 }}</td>
                    <td colspan="5">{{ text50 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text51 }}</td>
                    <td colspan="5">{{ text52 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text53 }}</td>
                    <td colspan="5">{{ text54 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text55 }}</td>
                    <td colspan="5">{{ text56 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text57 }}</td>
                    <td colspan="5">{{ text58 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text59 }}</td>
                    <td colspan="5">{{ text60 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text61 }}</td>
                    <td colspan="5">{{ text62 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text63 }}</td>
                    <td colspan="5">{{ text64 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text65 }}</td>
                    <td colspan="5">{{ text66 }}</td>
                </tr>
                <tr>
                    <td colspan="3">{{ text67 }}</td>
                    <td colspan="5">{{ text68 }}</td>
                </tr>
                <tr>
                    <td>通过认定或认证情况</td>
                    <td colspan="8">{{ text69 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">人员情况</td>
                    <td>职工总数</td>
                    <td colspan="2">{{ text70 }}</td>
                    <td>专业技术人员数</td>
                    <td colspan="4">{{ text71 }}</td>
                </tr>
                <tr>
                    <td>其中：高级职称</td>
                    <td colspan="2">{{ text72 }}</td>
                    <td>中级职称</td>
                    <td colspan="4">{{ text73 }}</td>
                </tr>
                <tr>
                    <td>其它有关情况说明</td>
                    <td colspan="8">{{ text74 }}</td>
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
            biao_id: 26, // 第几个表
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
            text38: "",
            text39: "",
            text40: "",
            text41: "",
            text42: "",
            text43: "",
            text44: "",
            text45: "",
            text46: "",
            text47: "",
            text48: "",
            text49: "",
            text50: "",
            text51: "",
            text52: "",
            text53: "",
            text54: "",
            text55: "",
            text56: "",
            text57: "",
            text58: "",
            text59: "",
            text60: "",
            text61: "",
            text62: "",
            text63: "",
            text64: "",
            text65: "",
            text66: "",
            text67: "",
            text68: "",
            text69: "",
            text70: "",
            text71: "",
            text72: "",
            text73: "",
            text74: "",
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
                text38: this.text38,
                text39: this.text39,
                text40: this.text40,
                text41: this.text41,
                text42: this.text42,
                text43: this.text43,
                text44: this.text44,
                text45: this.text45,
                text46: this.text46,
                text47: this.text47,
                text48: this.text48,
                text49: this.text49,
                text50: this.text50,
                text51: this.text51,
                text52: this.text52,
                text53: this.text53,
                text54: this.text54,
                text55: this.text55,
                text56: this.text56,
                text57: this.text57,
                text58: this.text58,
                text59: this.text59,
                text60: this.text60,
                text61: this.text61,
                text62: this.text62,
                text63: this.text63,
                text64: this.text64,
                text65: this.text65,
                text66: this.text66,
                text67: this.text67,
                text68: this.text68,
                text69: this.text69,
                text70: this.text70,
                text71: this.text71,
                text72: this.text72,
                text73: this.text73,
                text74: this.text74,
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
                text38: this.text38,
                text39: this.text39,
                text40: this.text40,
                text41: this.text41,
                text42: this.text42,
                text43: this.text43,
                text44: this.text44,
                text45: this.text45,
                text46: this.text46,
                text47: this.text47,
                text48: this.text48,
                text49: this.text49,
                text50: this.text50,
                text51: this.text51,
                text52: this.text52,
                text53: this.text53,
                text54: this.text54,
                text55: this.text55,
                text56: this.text56,
                text57: this.text57,
                text58: this.text58,
                text59: this.text59,
                text60: this.text60,
                text61: this.text61,
                text62: this.text62,
                text63: this.text63,
                text64: this.text64,
                text65: this.text65,
                text66: this.text66,
                text67: this.text67,
                text68: this.text68,
                text69: this.text69,
                text70: this.text70,
                text71: this.text71,
                text72: this.text72,
                text73: this.text73,
                text74: this.text74,

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
