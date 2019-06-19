<template>
    <div class="t1">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>申请单位</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text1" />
                    </td>
                </tr>
                <tr>
                    <td>法人代表</td>
                    <td><input type="text" class="form-control"  v-model="text2" /></td>
                    <td>法人代码</td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                </tr>
                <tr>
                    <td>主管部门</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text4" />
                    </td>
                </tr>
                <tr>
                    <td>通信地址</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text38" />
                    </td>
                </tr>
                <tr>
                    <td>邮政编码</td>
                    <td><input type="text" class="form-control" v-model="text5" /></td>
                    <td>传真</td>
                    <td><input type="text" class="form-control" v-model="text6" /></td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text7" />
                    </td>
                </tr>
                <tr>
                    <td>联系人</td>
                    <td><input type="text" class="form-control" v-model="text8" /></td>
                    <td>联系电话</td>
                    <td><input type="text" class="form-control" v-model="text9" /></td>
                </tr>
                <tr>
                    <td>电子邮件</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text10" />
                    </td>
                </tr>
                <tr>
                    <td>经济类型</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text39" />
                    </td>
                </tr>
                <tr>
                    <td>成立时间</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text11" />
                    </td>
                </tr>
                <tr>
                    <td>注册资本</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text12" />
                    </td>
                </tr>
                <tr>
                    <td>职工总数</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text40" />
                    </td>
                </tr>
                <tr>
                    <td>工程技术人员数</td>
                    <td colspan="3">
                        <input type="text" class="form-control" v-model="text13" />
                    </td>
                </tr>
                <tr>
                    <td rowspan="3">
                        市/区工程技术研究中心建设情况
                        <label class="radio-inline">
                            <input type="radio" v-model="radio1" value="1">是
                        </label>
                        <label class="radio-inline">
                            <input type="radio" v-model="radio1" value="0">否
                        </label>
                    </td>
                    <td>批准成立时间</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text14" /></td>
                </tr>
                <tr>
                    <td>批准成立名称</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text15" /></td>
                </tr>
                <tr>
                    <td>获得资助金额</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text16" /></td>
                </tr>
                <tr>
                    <td rowspan="5">其他研发机构建设情况</td>
                    <td>市重点实验室</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text17" /></td>
                </tr>
                <tr>
                    <td>市企业技术中心</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text18" /></td>
                </tr>
                <tr>
                    <td>省重点实验室</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text19" /></td>
                </tr>
                <tr>
                    <td>省级企业技术中心</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text20" /></td>
                </tr>
                <tr>
                    <td>其他</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text21" /></td>
                </tr>
                <tr>
                    <td colspan="2">联合共建单位</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text22" /></td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td><input type="text" class="form-control" v-model="text23" /></td>
                    <td>机构代码</td>
                    <td><input type="text" class="form-control" v-model="text24" /></td>
                </tr>
                <tr>
                    <td>地址</td>
                    <td><input type="text" class="form-control" v-model="text25" /></td>
                    <td>邮政编码</td>
                    <td><input type="text" class="form-control" v-model="text26" /></td>
                </tr>
                <tr>
                    <td>联系人</td>
                    <td><input type="text" class="form-control" v-model="text27" /></td>
                    <td>联系电话</td>
                    <td><input type="text" class="form-control" v-model="text28" /></td>
                </tr>
                <tr>
                    <td>工程技术人员数</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text29" /></td>
                </tr>
                <tr>
                    <td rowspan="3">
                        市工程技术研究中心建设情况
                        <label class="radio-inline">
                            <input type="radio" v-model="radio2" value="1">是
                        </label>
                        <label class="radio-inline">
                            <input type="radio" v-model="radio2" value="0">否
                        </label>
                    </td>
                    <td>批准成立时间</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text30" /></td>
                </tr>
                <tr>
                    <td>批准成立名称</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text31" /></td>
                </tr>
                <tr>
                    <td>获得资助金额</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text32" /></td>
                </tr>
                <tr>
                    <td rowspan="5">其他研发机构建设情况</td>
                    <td>市重点实验室</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text33" /></td>
                </tr>
                <tr>
                    <td>市企业技术中心</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text34" /></td>
                </tr>
                <tr>
                    <td>省重点实验室</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text35" /></td>
                </tr>
                <tr>
                    <td>省级企业技术中心</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text36" /></td>
                </tr>
                <tr>
                    <td>其他</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text37" /></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>申请单位</td>
                    <td colspan="3">{{ text1 }}</td>
                </tr>
                <tr>
                    <td>法人代表</td>
                    <td>{{ text2 }}</td>
                    <td>法人代码</td>
                    <td>{{ text3 }}</td>
                </tr>
                <tr>
                    <td>主管部门</td>
                    <td colspan="3">{{ text4 }}</td>
                </tr>
                <tr>
                    <td>通信地址</td>
                    <td colspan="3">{{ text38 }}</td>
                </tr>
                <tr>
                    <td>邮政编码</td>
                    <td>{{ text5 }}</td>
                    <td>传真</td>
                    <td>{{ text6 }}</td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td colspan="3">{{ text7 }}</td>
                </tr>
                <tr>
                    <td>联系人</td>
                    <td>{{ text8 }}</td>
                    <td>联系电话</td>
                    <td>{{ text9 }}</td>
                </tr>
                <tr>
                    <td>电子邮件</td>
                    <td colspan="3">{{ text10 }}</td>
                </tr>
                <tr>
                    <td>经济类型</td>
                    <td colspan="3">{{ text39 }}</td>
                </tr>
                <tr>
                    <td>成立时间</td>
                    <td colspan="3">{{ text11 }}</td>
                </tr>
                <tr>
                    <td>注册资本</td>
                    <td colspan="3">{{ text12 }}</td>
                </tr>
                <tr>
                    <td>职工总数</td>
                    <td colspan="3">{{ text40 }}</td>
                </tr>
                <tr>
                    <td>工程技术人员数</td>
                    <td colspan="3">{{ text13 }}</td>
                </tr>
                <tr>
                    <td rowspan="3">
                        市/区工程技术研究中心建设情况
                        {{ radio1 == 1 ? '是' : '否' }}
                    </td>
                    <td>批准成立时间</td>
                    <td colspan="2">{{ text14 }}</td>
                </tr>
                <tr>
                    <td>批准成立名称</td>
                    <td colspan="2">{{ text15 }}</td>
                </tr>
                <tr>
                    <td>获得资助金额</td>
                    <td colspan="2">{{ text16 }}</td>
                </tr>
                <tr>
                    <td rowspan="5">其他研发机构建设情况</td>
                    <td>市重点实验室</td>
                    <td colspan="2">{{ text17 }}</td>
                </tr>
                <tr>
                    <td>市企业技术中心</td>
                    <td colspan="2">{{ text18 }}</td>
                </tr>
                <tr>
                    <td>省重点实验室</td>
                    <td colspan="2">{{ text19 }}</td>
                </tr>
                <tr>
                    <td>省级企业技术中心</td>
                    <td colspan="2">{{ text20 }}</td>
                </tr>
                <tr>
                    <td>其他</td>
                    <td colspan="2">{{ text21 }}</td>
                </tr>
                <tr>
                    <td colspan="2">联合共建单位</td>
                    <td colspan="2">{{ text22 }}</td>
                </tr>
                <tr>
                    <td>单位性质</td>
                    <td>{{ text23 }}</td>
                    <td>机构代码</td>
                    <td>{{ text24 }}</td>
                </tr>
                <tr>
                    <td>地址</td>
                    <td>{{ text25 }}</td>
                    <td>邮政编码</td>
                    <td>{{ text26 }}</td>
                </tr>
                <tr>
                    <td>联系人</td>
                    <td>{{ text27 }}</td>
                    <td>联系电话</td>
                    <td>{{ text28 }}</td>
                </tr>
                <tr>
                    <td>工程技术人员数</td>
                    <td colspan="3">{{ text29 }}</td>
                </tr>
                <tr>
                    <td rowspan="3">
                        市工程技术研究中心建设情况
                        {{ radio2 == 1 ? '是' : '否' }}
                    </td>
                    <td>批准成立时间</td>
                    <td colspan="2">{{ text30 }}</td>
                </tr>
                <tr>
                    <td>批准成立名称</td>
                    <td colspan="2">{{ text31 }}</td>
                </tr>
                <tr>
                    <td>获得资助金额</td>
                    <td colspan="2">{{ text32 }}</td>
                </tr>
                <tr>
                    <td rowspan="5">其他研发机构建设情况</td>
                    <td>市重点实验室</td>
                    <td colspan="2">{{ text33 }}</td>
                </tr>
                <tr>
                    <td>市企业技术中心</td>
                    <td colspan="2">{{ text34 }}</td>
                </tr>
                <tr>
                    <td>省重点实验室</td>
                    <td colspan="2">{{ text35 }}</td>
                </tr>
                <tr>
                    <td>省级企业技术中心</td>
                    <td colspan="2">{{ text36 }}</td>
                </tr>
                <tr>
                    <td>其他</td>
                    <td colspan="2">{{ text37 }}</td>
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
            biao_id: 2, // 第几个表
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
            radio1: "",
            radio2: "",
            pro_id: null, // 项目id
            project_type_id: "", // 项目类型id
            loading: true // 加载中
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
                radio1: this.radio1,
                radio2: this.radio2,
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
                radio1: this.radio1,
                radio2: this.radio2,
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
    input[type="radio"] {
        -webkit-appearance: radio;
    }
</style>
