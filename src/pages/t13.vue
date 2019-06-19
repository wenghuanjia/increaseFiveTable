<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <thead>
                <tr>
                    <td colspan="11">单位基本信息</td>
                </tr>
            </thead>
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td colspan="2">单位名称</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text1"  /></td>
                    <td colspan="2">组织机构代码</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text2" /></td>
                </tr>
                <tr>
                    <td>注册资金</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text3" /></td>
                    <td colspan="2">所在地区</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text4" /></td>
                    <td colspan="2">银行信用等级</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text5" /></td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text6" /></td>
                    <td colspan="2">所属行业</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text7" /></td>
                    <td colspan="2">单位级别</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td colspan="2">职工总人数</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text9" /></td>
                    <td colspan="2">研究人员数</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td colspan="2">上年度销售额（万元）</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text11" /></td>
                    <td colspan="2">上年利税（万元）</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text12" /></td>
                </tr>
                <tr>
                    <td colspan="2">上年研发经费总额（万元）</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text13" /></td>
                    <td colspan="2">研发经费占销售额比例（%）</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text14" /></td>
                </tr>
                <tr>
                    <td colspan="11">近3年承担科技计划项目数量</td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td colspan="4">国家级</td>
                    <td colspan="2">省部级</td>
                    <td colspan="3">其他</td>
                </tr>
                <tr>
                    <td colspan="2">项目数（项）</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text15" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text16" /></td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text17" /></td>
                </tr>
                <tr>
                    <td colspan="2">项目总经费（万元）</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text18" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text19" /></td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text20" /></td>
                </tr>
                <tr>
                    <td colspan="11">建立的科研平台（每类平台按最高级单选）</td>
                </tr>
                <tr>
                    <td colspan="3">平台类型</td>
                    <td colspan="2">国家级</td>
                    <td colspan="2">省级</td>
                    <td colspan="2">市级</td>
                    <td colspan="2">无</td>
                </tr>
                <tr>
                    <td colspan="3">1.工程技术开发中心</td>
                    <td colspan="2"><input type="radio" v-model="radio1" value="1"></td>
                    <td colspan="2"><input type="radio" v-model="radio1" value="2"></td>
                    <td colspan="2"><input type="radio" v-model="radio1" value="3"></td>
                    <td colspan="2"><input type="radio" v-model="radio1" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3">2.企业技术中心</td>
                    <td colspan="2"><input type="radio" v-model="radio2" value="1"></td>
                    <td colspan="2"><input type="radio" v-model="radio2" value="2"></td>
                    <td colspan="2"><input type="radio" v-model="radio2" value="3"></td>
                    <td colspan="2"><input type="radio" v-model="radio2" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3">3.企业重点实验室</td>
                    <td colspan="2"><input type="radio" v-model="radio3" value="1"></td>
                    <td colspan="2"><input type="radio" v-model="radio3" value="2"></td>
                    <td colspan="2"><input type="radio" v-model="radio3" value="3"></td>
                    <td colspan="2"><input type="radio" v-model="radio3" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3">4.博士后科研工作站</td>
                    <td colspan="2"><input type="radio" v-model="radio4" value="1"></td>
                    <td colspan="2"><input type="radio" v-model="radio4" value="2"></td>
                    <td colspan="2"><input type="radio" v-model="radio4" value="3"></td>
                    <td colspan="2"><input type="radio" v-model="radio4" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3"><input type="text" class="form-control" v-model="text21" placeholder="其他：请注明"/></td>
                    <td colspan="2"><input type="radio" v-model="radio5" value="1"></td>
                    <td colspan="2"><input type="radio" v-model="radio5" value="2"></td>
                    <td colspan="2"><input type="radio" v-model="radio5" value="3"></td>
                    <td colspan="2"><input type="radio" v-model="radio5" value="4"></td>
                </tr>
                <tr>
                    <td colspan="11"><input type="text" class="form-control" v-model="text22" placeholder="（可补充）"/></td>
                </tr>
                <tr>
                    <td colspan="11">企业资质情况</td>
                </tr>
                <tr>
                    <td colspan="4">是否科技特派员派驻单位 </td>
                    <td colspan="7"><input type="text" class="form-control" v-model="text23"></td>
                </tr>
                <tr>
                    <td colspan="4">企业认定情况 </td>
                    <td colspan="7">
                        <label><input type="radio" v-model="radio6" value="1"> 高新技术企业</label>
                        <label><input type="radio" v-model="radio6" value="2"> 双软认证企业</label>
                        <label><input type="radio" v-model="radio6" value="3"> 其它</label>
                    </td>
                </tr>
                <tr>
                    <td colspan="4">其它认定或认证情况（请说明） </td>
                    <td colspan="7">
                        <textarea name="" id="" style="width:100%" placeholder="限100字" v-model="text24"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="11">单位拥有知识产权情况</td>
                </tr>
                <tr>
                    <td colspan="10">最近三年知识产权总数 </td>
                    <td colspan="1" rowspan="2">
                        近五年牵头或参与标准制定（个）
                    </td>
                </tr>
                <tr>
                    <td colspan="2">发明专利（件）</td>
                    <td colspan="2">实用新型专利（件）</td>
                    <td colspan="2">外观设计专利（件）</td>
                    <td colspan="2">国际专利（件）</td>
                    <td>软件著作权（个）</td>
                    <td>集成电路布图设计（个）</td>
                </tr>
                <tr>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td rowspan="2"><input type="text" class="form-control" v-model="text25" /></td>
                    <td rowspan="2"><input type="text" class="form-control" v-model="text26" /></td>
                    <td rowspan="2"><input type="text" class="form-control" v-model="text27" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" v-model="text28" /></td>
                    <td><input type="text" class="form-control" v-model="text29" /></td>
                    <td><input type="text" class="form-control" v-model="text30" /></td>
                    <td><input type="text" class="form-control" v-model="text31" /></td>
                    <td><input type="text" class="form-control" v-model="text32" /></td>
                    <td><input type="text" class="form-control" v-model="text33" /></td>
                    <td><input type="text" class="form-control" v-model="text34" /></td>
                    <td><input type="text" class="form-control" v-model="text35" /></td>
                </tr>
            </tbody> 
            <tbody v-else>
                <tr>
                    <td colspan="2">单位名称</td>
                    <td colspan="4">{{ text1 }}</td>
                    <td colspan="2">组织机构代码</td>
                    <td colspan="3">{{ text2 }}</td>
                </tr>
                <tr>
                    <td>注册资金</td>
                    <td colspan="2">{{ text3 }}</td>
                    <td colspan="2">所在地区</td>
                    <td colspan="2">{{ text4 }}</td>
                    <td colspan="2">银行信用等级</td>
                    <td colspan="2">{{ text5 }}</td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td colspan="2">{{ text6 }}</td>
                    <td colspan="2">所属行业</td>
                    <td colspan="2">{{ text7 }}</td>
                    <td colspan="2">单位级别</td>
                    <td colspan="2">{{ text8 }}</td>
                </tr>
                <tr>
                    <td colspan="2">职工总人数</td>
                    <td colspan="4">{{ text9 }}</td>
                    <td colspan="2">研究人员数</td>
                    <td colspan="3">{{ text10 }}</td>
                </tr>
                <tr>
                    <td colspan="2">上年度销售额（万元）</td>
                    <td colspan="4">{{ text11 }}</td>
                    <td colspan="2">上年利税（万元）</td>
                    <td colspan="3">{{ text12 }}</td>
                </tr>
                <tr>
                    <td colspan="2">上年研发经费总额（万元）</td>
                    <td colspan="4">{{ text13 }}</td>
                    <td colspan="2">研发经费占销售额比例（%）</td>
                    <td colspan="3">{{ text14 }}</td>
                </tr>
                <tr>
                    <td colspan="11">近3年承担科技计划项目数量</td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td colspan="4">国家级</td>
                    <td colspan="2">省部级</td>
                    <td colspan="3">其他</td>
                </tr>
                <tr>
                    <td colspan="2">项目数（项）</td>
                    <td colspan="4">{{ text15 }}</td>
                    <td colspan="2">{{ text16 }}</td>
                    <td colspan="3">{{ text17 }}</td>
                </tr>
                <tr>
                    <td colspan="2">项目总经费（万元）</td>
                    <td colspan="4">{{ text18 }}</td>
                    <td colspan="2">{{ text19 }}</td>
                    <td colspan="3">{{ text20 }}</td>
                </tr>
                <tr>
                    <td colspan="11">建立的科研平台</td>
                </tr>
                <tr>
                    <td colspan="3">平台类型</td>
                    <td colspan="2">国家级</td>
                    <td colspan="2">省级</td>
                    <td colspan="2">市级</td>
                    <td colspan="2">无</td>
                </tr>
                <tr>
                    <td colspan="3">1.工程技术开发中心</td>
                    <td colspan="2"><input type="radio" disabled v-model="radio1" value="1"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio1" value="2"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio1" value="3"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio1" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3">2.企业技术中心</td>
                    <td colspan="2"><input type="radio" disabled v-model="radio2" value="1"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio2" value="2"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio2" value="3"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio2" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3">3.企业重点实验室</td>
                    <td colspan="2"><input type="radio" disabled v-model="radio3" value="1"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio3" value="2"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio3" value="3"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio3" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3">4.博士后科研工作站</td>
                    <td colspan="2"><input type="radio" disabled v-model="radio4" value="1"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio4" value="2"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio4" value="3"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio4" value="4"></td>
                </tr>
                <tr>
                    <td colspan="3">{{ text21 }}</td>
                    <td colspan="2"><input type="radio" disabled v-model="radio5" value="1"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio5" value="2"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio5" value="3"></td>
                    <td colspan="2"><input type="radio" disabled v-model="radio5" value="4"></td>
                </tr>
                <tr>
                    <td colspan="11">{{ text22 }}</td>
                </tr>
                <tr>
                    <td colspan="11">企业资质情况</td>
                </tr>
                <tr>
                    <td colspan="4">是否科技特派员派驻单位 </td>
                    <td colspan="7">{{ text23 }}</td>
                </tr>
                <tr>
                    <td colspan="4">企业认定情况 </td>
                    <td colspan="7">
                        <label><input type="radio" disabled v-model="radio6" value="1"> 高新技术企业</label>
                        <label><input type="radio" disabled v-model="radio6" value="2"> 双软认证企业</label>
                        <label><input type="radio" disabled v-model="radio6" value="3"> 其它</label>
                    </td>
                </tr>
                <tr>
                    <td colspan="4">其它认定或认证情况（请说明） </td>
                    <td colspan="7">
                        {{ text24 }}
                    </td>
                </tr>
                <tr>
                    <td colspan="11">单位拥有知识产权情况</td>
                </tr>
                <tr>
                    <td colspan="10">最近三年知识产权总数 </td>
                    <td colspan="1" rowspan="2">
                        近五年牵头或参与标准制定（个）
                    </td>
                </tr>
                <tr>
                    <td colspan="2">发明专利（件）</td>
                    <td colspan="2">实用新型专利（件）</td>
                    <td colspan="2">外观设计专利（件）</td>
                    <td colspan="2">国际专利（件）</td>
                    <td>软件著作权（个）</td>
                    <td>集成电路布图设计（个）</td>
                </tr>
                <tr>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td>申请</td>
                    <td>授权</td>
                    <td rowspan="2">{{ text25 }}</td>
                    <td rowspan="2">{{ text26 }}</td>
                    <td rowspan="2">{{ text27 }}</td>
                </tr>
                <tr>
                    <td>{{ text28 }}</td>
                    <td>{{ text29 }}</td>
                    <td>{{ text30 }}</td>
                    <td>{{ text31 }}</td>
                    <td>{{ text32 }}</td>
                    <td>{{ text33 }}</td>
                    <td>{{ text34 }}</td>
                    <td>{{ text35 }}</td>
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
            biao_id: 14, // 第几个表
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
            radio1: "",
            radio2: "",
            radio3: "",
            radio4: "",
            radio5: "",
            radio6: "",
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
                radio1: this.radio1,
                radio2: this.radio2,
                radio3: this.radio3,
                radio4: this.radio4,
                radio5: this.radio5,
                radio6: this.radio6,
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
                radio1: this.radio1,
                radio2: this.radio2,
                radio3: this.radio3,
                radio4: this.radio4,
                radio5: this.radio5,
                radio6: this.radio6,
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
