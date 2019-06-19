<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <thead>
                <tr>
                    <td colspan="7">经费筹集情况：(单位：万元)</td>
                </tr>
            </thead>
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>总投入经费：(万元)</td>
                    <td colspan="6"><input type="text" class="form-control" v-model="text1" /></td>
                </tr>
                <tr>
                    <td rowspan="2"></td>
                    <td rowspan="2">省科技厅资金</td>
                    <td colspan="4">其他资金</td>
                    <td rowspan="2">合计</td>
                </tr>
                <tr>
                    <td>自有资金</td>
                    <td>贷款</td>
                    <td>其他政府部门投入</td>
                    <td>其它</td>
                </tr>
                <tr>
                    <td>已投入经费</td>
                    <td><input type="text" class="form-control" v-model="text2" /></td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                    <td><input type="text" class="form-control" v-model="text4" /></td>
                    <td><input type="text" class="form-control" v-model="text5" /></td>
                    <td><input type="text" class="form-control" v-model="text6" /></td>
                    <td><input type="text" class="form-control" v-model="text7" /></td>
                </tr>
                <tr>
                    <td>新增经费</td>
                    <td><input type="text" class="form-control" v-model="text8" /></td>
                    <td><input type="text" class="form-control" v-model="text9" /></td>
                    <td><input type="text" class="form-control" v-model="text10" /></td>
                    <td><input type="text" class="form-control" v-model="text11" /></td>
                    <td><input type="text" class="form-control" v-model="text12" /></td>
                    <td><input type="text" class="form-control" v-model="text13" /></td>
                </tr>
                <tr>
                    <td colspan="7">其他政府部门、境外资金及其他资金投入情况说明：</td>
                </tr>
                <tr>
                    <td colspan="7"><textarea name="" id="" style="width:100%" v-model="text14"></textarea></td>
                </tr>
                <tr>
                    <td colspan="7">新增经费预算：(单位：万元)</td>
                </tr>
                <tr>
                    <td rowspan="2" colspan="2"></td>
                    <td rowspan="2" colspan="3">新增经费总额</td>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <td colspan="2">其中：省科技厅经费</td>
                </tr>
                <tr>
                    <td colspan="2">支出经费</td>
                    <td>经费额</td>
                    <td colspan="2">用途说明</td>
                    <td>经费额</td>
                    <td>用途说明</td>
                </tr>
                <tr>
                    <td colspan="2">基建费</td>
                    <td><input type="text" class="form-control" v-model="text15" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text16" /></td>
                    <td><input type="text" class="form-control" v-model="text17" /></td>
                    <td><input type="text" class="form-control" v-model="text18" /></td>
                </tr>
                <tr>
                    <td colspan="2">（一）直接费用</td>
                    <td><input type="text" class="form-control" v-model="text19" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text20" /></td>
                    <td><input type="text" class="form-control" v-model="text21" /></td>
                    <td><input type="text" class="form-control" v-model="text22" /></td>
                </tr>
                <tr>
                    <td colspan="2">1、设备费</td>
                    <td><input type="text" class="form-control" v-model="text23" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text24" /></td>
                    <td><input type="text" class="form-control" v-model="text25" /></td>
                    <td><input type="text" class="form-control" v-model="text26" /></td>
                </tr>
                <tr>
                    <td colspan="2">2、材料费</td>
                    <td><input type="text" class="form-control" v-model="text27" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text28" /></td>
                    <td><input type="text" class="form-control" v-model="text29" /></td>
                    <td><input type="text" class="form-control" v-model="text30" /></td>
                </tr>
                <tr>
                    <td colspan="2">3、测试化验加工外协费</td>
                    <td><input type="text" class="form-control" v-model="text31" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text32" /></td>
                    <td><input type="text" class="form-control" v-model="text33" /></td>
                    <td><input type="text" class="form-control" v-model="text34" /></td>
                </tr>
                <tr>
                    <td colspan="2">4、燃料动力费</td>
                    <td><input type="text" class="form-control" v-model="text35" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text36" /></td>
                    <td><input type="text" class="form-control" v-model="text37" /></td>
                    <td><input type="text" class="form-control" v-model="text38" /></td>
                </tr>
                <tr>
                    <td colspan="2">5、差旅费</td>
                    <td><input type="text" class="form-control" v-model="text39" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text40" /></td>
                    <td><input type="text" class="form-control" v-model="text41" /></td>
                    <td><input type="text" class="form-control" v-model="text42" /></td>
                </tr>
                <tr>
                    <td colspan="2">6、会议费</td>
                    <td><input type="text" class="form-control" v-model="text43" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text44" /></td>
                    <td><input type="text" class="form-control" v-model="text45" /></td>
                    <td><input type="text" class="form-control" v-model="text46" /></td>
                </tr>
                <tr>
                    <td colspan="2">7、国际合作与交流费</td>
                    <td><input type="text" class="form-control" v-model="text47" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text48" /></td>
                    <td><input type="text" class="form-control" v-model="text49" /></td>
                    <td><input type="text" class="form-control" v-model="text50" /></td>
                </tr>
                <tr>
                    <td colspan="2">8、出版/文献/信息传播/知识产权事务费</td>
                    <td><input type="text" class="form-control" v-model="text51" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text52" /></td>
                    <td><input type="text" class="form-control" v-model="text53" /></td>
                    <td><input type="text" class="form-control" v-model="text54" /></td>
                </tr>
                <tr>
                    <td colspan="2">9、租赁费</td>
                    <td><input type="text" class="form-control" v-model="text55" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text56" /></td>
                    <td><input type="text" class="form-control" v-model="text57" /></td>
                    <td><input type="text" class="form-control" v-model="text58" /></td>
                </tr>
                <tr>
                    <td colspan="2">10、人员费</td>
                    <td><input type="text" class="form-control" v-model="text59" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text60" /></td>
                    <td><input type="text" class="form-control" v-model="text61" /></td>
                    <td><input type="text" class="form-control" v-model="text62" /></td>
                </tr>
                <tr>
                    <td colspan="2">11、专家咨询费</td>
                    <td><input type="text" class="form-control" v-model="text63" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text64" /></td>
                    <td><input type="text" class="form-control" v-model="text65" /></td>
                    <td><input type="text" class="form-control" v-model="text66" /></td>
                </tr>
                <tr>
                    <td colspan="2">12、直接费其他支出</td>
                    <td><input type="text" class="form-control" v-model="text67" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text68" /></td>
                    <td><input type="text" class="form-control" v-model="text69" /></td>
                    <td><input type="text" class="form-control" v-model="text70" /></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" class="form-control" v-model="text71" /></td>
                    <td><input type="text" class="form-control" v-model="text72" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text73" /></td>
                    <td><input type="text" class="form-control" v-model="text74" /></td>
                    <td><input type="text" class="form-control" v-model="text75" /></td>
                </tr>
                <tr>
                    <td colspan="2">（二）间接费用</td>
                    <td><input type="text" class="form-control" v-model="text76" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text77" /></td>
                    <td><input type="text" class="form-control" v-model="text78" /></td>
                    <td><input type="text" class="form-control" v-model="text79" /></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text" class="form-control" v-model="text80" /></td>
                    <td><input type="text" class="form-control" v-model="text81" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text82" /></td>
                    <td><input type="text" class="form-control" v-model="text83" /></td>
                    <td><input type="text" class="form-control" v-model="text84" /></td>
                </tr>
                <tr>
                    <td colspan="2">合计</td>
                    <td><input type="text" class="form-control" v-model="text85" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text86" /></td>
                    <td><input type="text" class="form-control" v-model="text87" /></td>
                    <td><input type="text" class="form-control" v-model="text88" /></td>
                </tr>
            </tbody>  
            <tbody v-else>
                <tr>
                    <td>总投入经费：(万元)</td>
                    <td colspan="6">{{ text1 }}</td>
                </tr>
                <tr>
                    <td rowspan="2"></td>
                    <td rowspan="2">省科技厅资金</td>
                    <td colspan="4">其他资金</td>
                    <td rowspan="2">合计</td>
                </tr>
                <tr>
                    <td>自有资金</td>
                    <td>贷款</td>
                    <td>其他政府部门投入</td>
                    <td>其它</td>
                </tr>
                <tr>
                    <td>已投入经费</td>
                    <td>{{ text2 }}</td>
                    <td>{{ text3 }}</td>
                    <td>{{ text4 }}</td>
                    <td>{{ text5 }}</td>
                    <td>{{ text6 }}</td>
                    <td>{{ text7 }}</td>
                </tr>
                <tr>
                    <td>新增经费</td>
                    <td>{{ text8 }}</td>
                    <td>{{ text9 }}</td>
                    <td>{{ text10 }}</td>
                    <td>{{ text11 }}</td>
                    <td>{{ text12 }}</td>
                    <td>{{ text13 }}</td>
                </tr>
                <tr>
                    <td colspan="7">其他政府部门、境外资金及其他资金投入情况说明：</td>
                </tr>
                <tr>
                    <td colspan="7">{{ text14 }}</td>
                </tr>
                <tr>
                    <td colspan="7">新增经费预算：(单位：万元)</td>
                </tr>
                <tr>
                    <td rowspan="2" colspan="2"></td>
                    <td rowspan="2" colspan="3">新增经费总额</td>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <td colspan="2">其中：省科技厅经费</td>
                </tr>
                <tr>
                    <td colspan="2">支出经费</td>
                    <td>经费额</td>
                    <td colspan="2">用途说明</td>
                    <td>经费额</td>
                    <td>用途说明</td>
                </tr>
                <tr>
                    <td colspan="2">基建费</td>
                    <td>{{ text15 }}</td>
                    <td colspan="2">{{ text16 }}</td>
                    <td>{{ text17 }}</td>
                    <td>{{ text18 }}</td>
                </tr>
                <tr>
                    <td colspan="2">（一）直接费用</td>
                    <td>{{ text19 }}</td>
                    <td colspan="2">{{ text20 }}</td>
                    <td>{{ text21 }}</td>
                    <td>{{ text22 }}</td>
                </tr>
                <tr>
                    <td colspan="2">1、设备费</td>
                    <td>{{ text23 }}</td>
                    <td colspan="2">{{ text24 }}</td>
                    <td>{{ text25 }}</td>
                    <td>{{ text26 }}</td>
                </tr>
                <tr>
                    <td colspan="2">2、材料费</td>
                    <td>{{ text27 }}</td>
                    <td colspan="2">{{ text28 }}</td>
                    <td>{{ text29 }}</td>
                    <td>{{ text30 }}</td>
                </tr>
                <tr>
                    <td colspan="2">3、测试化验加工外协费</td>
                    <td>{{ text31 }}</td>
                    <td colspan="2">{{ text32 }}</td>
                    <td>{{ text33 }}</td>
                    <td>{{ text34 }}</td>
                </tr>
                <tr>
                    <td colspan="2">4、燃料动力费</td>
                    <td>{{ text35 }}</td>
                    <td colspan="2">{{ text36 }}</td>
                    <td>{{ text37 }}</td>
                    <td>{{ text38 }}</td>
                </tr>
                <tr>
                    <td colspan="2">5、差旅费</td>
                    <td>{{ text39 }}</td>
                    <td colspan="2">{{ text40 }}</td>
                    <td>{{ text41 }}</td>
                    <td>{{ text42 }}</td>
                </tr>
                <tr>
                    <td colspan="2">6、会议费</td>
                    <td>{{ text43 }}</td>
                    <td colspan="2">{{ text44 }}</td>
                    <td>{{ text45 }}</td>
                    <td>{{ text46 }}</td>
                </tr>
                <tr>
                    <td colspan="2">7、国际合作与交流费</td>
                    <td>{{ text47 }}</td>
                    <td colspan="2">{{ text48 }}</td>
                    <td>{{ text49 }}</td>
                    <td>{{ text50 }}</td>
                </tr>
                <tr>
                    <td colspan="2">8、出版/文献/信息传播/知识产权事务费</td>
                    <td>{{ text51 }}</td>
                    <td colspan="2">{{ text52 }}</td>
                    <td>{{ text53 }}</td>
                    <td>{{ text54 }}</td>
                </tr>
                <tr>
                    <td colspan="2">9、租赁费</td>
                    <td>{{ text55 }}</td>
                    <td colspan="2">{{ text56 }}</td>
                    <td>{{ text57 }}</td>
                    <td>{{ text58 }}</td>
                </tr>
                <tr>
                    <td colspan="2">10、人员费</td>
                    <td>{{ text59 }}</td>
                    <td colspan="2">{{ text60 }}</td>
                    <td>{{ text61 }}</td>
                    <td>{{ text62 }}</td>
                </tr>
                <tr>
                    <td colspan="2">11、专家咨询费</td>
                    <td>{{ text63 }}</td>
                    <td colspan="2">{{ text64 }}</td>
                    <td>{{ text65 }}</td>
                    <td>{{ text66 }}</td>
                </tr>
                <tr>
                    <td colspan="2">12、直接费其他支出</td>
                    <td>{{ text67 }}</td>
                    <td colspan="2">{{ text68 }}</td>
                    <td>{{ text69 }}</td>
                    <td>{{ text70 }}</td>
                </tr>
                <tr>
                    <td colspan="2">{{ text71 }}</td>
                    <td>{{ text72 }}</td>
                    <td colspan="2">{{ text73 }}</td>
                    <td>{{ text74 }}</td>
                    <td>{{ text75 }}</td>
                </tr>
                <tr>
                    <td colspan="2">（二）间接费用</td>
                    <td>{{ text76 }}</td>
                    <td colspan="2">{{ text77 }}</td>
                    <td>{{ text78 }}</td>
                    <td>{{ text79 }}</td>
                </tr>
                <tr>
                    <td colspan="2">{{ text80 }}</td>
                    <td>{{ text81 }}</td>
                    <td colspan="2">{{ text82 }}</td>
                    <td>{{ text83 }}</td>
                    <td>{{ text84 }}</td>
                </tr>
                <tr>
                    <td colspan="2">合计</td>
                    <td>{{ text85 }}</td>
                    <td colspan="2">{{ text86 }}</td>
                    <td>{{ text87 }}</td>
                    <td>{{ text88 }}</td>
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
            biao_id: 13, // 第几个表
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
            text75: "",
            text76: "",
            text77: "",
            text78: "",
            text79: "",
            text80: "",
            text81: "",
            text82: "",
            text83: "",
            text84: "",
            text85: "",
            text86: "",
            text87: "",
            text88: "",
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
                text75: this.text75,
                text76: this.text76,
                text77: this.text77,
                text78: this.text78,
                text79: this.text79,
                text80: this.text80,
                text81: this.text81,
                text82: this.text82,
                text83: this.text83,
                text84: this.text84,
                text85: this.text85,
                text86: this.text86,
                text87: this.text87,
                text88: this.text88,
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
                text75: this.text75,
                text76: this.text76,
                text77: this.text77,
                text78: this.text78,
                text79: this.text79,
                text80: this.text80,
                text81: this.text81,
                text82: this.text82,
                text83: this.text83,
                text84: this.text84,
                text85: this.text85,
                text86: this.text86,
                text87: this.text87,
                text88: this.text88,

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

    input[type="checkbox"] {
        -webkit-appearance: checkbox;
        margin: 0px;
    }

    .title {
        text-align: center;
    }
</style>
