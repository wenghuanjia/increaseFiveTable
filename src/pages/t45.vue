<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <!-- <thead>每月填写研发费用表</thead> -->
            <tbody>
                <tr>
                    <td colspan="6" style="vertical-align: middle;text-align:center;">每月填写研发费用表</td>
                </tr>
                <!-- 研发人员工资 -->
                <tr>
                    <td rowspan="35" style="vertical-align: middle;text-align:center;">研发费用：</td>
                </tr>
                <tr>
                    <td rowspan="4" style="vertical-align: middle;text-align:center;">研发人员工资</td>
                    <td>直接从事研发活动人员工资薪金</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text1"/></td>
                </tr>
                <tr>
                    <td>直接从事研发活动人员五险一金</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text2" /></td>
                </tr>
                <tr>
                    <td>外聘研发人员的劳务费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text3" /></td>
                </tr>
                <tr>
                    <td>合计</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="合计" v-model="text4" /></td>
                </tr>
                <tr>
                    <td colspan="6"></td>
                </tr>
                <!-- 直接投入 -->
                <tr>
                    <td rowspan="7" style="vertical-align: middle;text-align:center;">直接投入</td>
                    <td>研发活动直接消耗材料</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text5" /></td>
                </tr>
                <tr>
                    <td>研发活动直接消耗燃料</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text6" /></td>
                </tr>
                <tr>
                    <td>研发活动直接消耗动力费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text7" /></td>
                </tr>
                <tr>
                    <td>用于中间试验和产品试制的模具、工艺装备开发及制造费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text8" /></td>
                </tr>
                <tr>
                    <td>用于不构成固定资产的样品、样机及一般测试手段购置费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text9" /></td>
                </tr>
                <tr>
                    <td>用于试制产品的检验费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text10" /></td>
                </tr>
                <tr>
                    <td>用于研发活动的仪器、设备的运行维护、调整、检验、维修等费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text11" /></td>
                </tr>
                <tr>
                    <td colspan="6"></td>
                </tr>
                <!-- 折旧费用 -->
                <tr>
                    <td rowspan="2" style="vertical-align: middle;text-align:center;">折旧费用</td>
                    <td>用于研发活动的仪器的折旧费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text12" /></td>
                </tr>
                <tr>
                    <td>用于研发活动的设备的折旧费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text13" /></td>
                </tr>
                <tr>
                    <td colspan="6"></td>
                </tr>
                <!-- 无形资产摊销 -->
                <tr>
                    <td rowspan="3" style="vertical-align: middle;text-align:center;">无形资产摊销</td>
                    <td>用于研发活动的软件的摊销费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text14" /></td>
                </tr>
                <tr>
                    <td>用于研发活动的专利权的摊销费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text15" /></td>
                </tr>
                <tr>
                    <td>用于研发活动的非专利技术（包括许可证、专有技术、设计和计算方法等）的摊销费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text16" /></td>
                </tr>
                <tr>
                    <td colspan="6"></td>
                </tr>
                <!-- 新产品设计费 -->
                <tr>
                    <td rowspan="3" style="vertical-align: middle;text-align:center;">新产品设计费</td>
                    <td>新产品设计费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text17" /></td>
                </tr>
                <tr>
                    <td>新药研制的临床试验费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text18" /></td>
                </tr>
                <tr>
                    <td>勘探开发技术的现场试验费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text19" /></td>
                </tr>
                <tr>
                    <td colspan="6"></td>
                </tr>
                <!-- 其他相关费用 -->
                <tr>
                    <td rowspan="5" style="vertical-align: middle;text-align:center;">其他相关费用</td>
                    <td>技术图书资料费、资料翻译费、专家咨询费、高新科技研发保险费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text20" /></td>
                </tr>
                <tr>
                    <td>研发成果的检索、分析、评议、论证、鉴定、评审、评估、验收费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text21" /></td>
                </tr>
                <tr>
                    <td>知识产权的申请费、注册费、代理费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text22" /></td>
                </tr>
                <tr>
                    <td>职工福利费、补充养老保险费、补充医疗保险费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text23" /></td>
                </tr>
                <tr>
                    <td>差旅费、会议费</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text24" /></td>
                </tr>
                <tr>
                    <td colspan="6"></td>
                </tr>
                <!-- 委托研发 -->
                <tr>
                    <td rowspan="4" style="vertical-align: middle;text-align:center;">委托研发</td>
                    <td>委托境内机构或个人进行研发活动所发生的费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text25" /></td>
                </tr>
                <tr>
                    <td>委托境外机构进行研发活动发生的费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text26" /></td>
                </tr>
                <tr>
                    <td>其中：允许加计扣除的委托境外机构进行研发活动发生的费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text27" /></td>
                </tr>
                <tr>
                    <td>委托境外个人进行研发活动发生的费用</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text28" /></td>
                </tr>
                <tr>
                    <td colspan="6"></td>
                </tr>
                <!-- 总资产 -->
                <tr>
                    <td style="vertical-align: middle;text-align:center;">总资产：</td>
                    <td><input type="text" class="form-control" placeholder="请输入" v-model="text29" />
                    <td>总收入：</td>
                    <td><input type="text" class="form-control" placeholder="请输入" v-model="text30" /></td>
                    <td style="vertical-align: middle;text-align:center;">研发费用合计：</td>
                    <td><input type="text" class="form-control" placeholder="请输入" v-model="text31" /></td>
                </tr>
                <tr>
                    <td style="vertical-align: middle;text-align:center;">净资产：</td>
                    <td><input type="text" class="form-control" placeholder="请输入" v-model="text32" />
                    <td>高新产品收入：</td>
                    <td colspan="3"><input type="text" class="form-control" placeholder="请输入" v-model="text33" /></td>
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
        <!-- <el-button type="primary" size="mini" @click="set_data" v-if="state_flag == 2">修改</el-button>
        <el-button type="primary" size="mini" @click="setpostil" v-if="audit_flag == 3">添加批注</el-button>
        <el-button type="primary" size="mini" v-if="deriveFlag" @click="derived_field">导出word</el-button> -->
        
        <el-button type="primary" size="mini" @click="set_data" v-if="state_flag == 2">修改</el-button>
        <el-button type="primary" size="mini" @click="derived_field" v-if="state_flag == 2">导出word</el-button>
    </div>
</template>

<script>
import { create, read, update, edit, index } from "service/getData"
import { mapState, mapMutations } from "vuex"
import json from "jsonify"

export default {
    props: ['flag', 'deriveFlag'],
    // 33个 text
    data () {
        return {
            pzhu: '', // 批注
            id: null, // 修改需要的id
            loading: true, // 加载中
            biao_id: 46, // 第几个表
            text1: "",
            text2: "",
            text3: "",
            // text4: "",
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
            // text11: {text1:{}},
            // text12: {text1:{}},
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
        ...mapState(['state_flag', 'audit_flag']),
        text4: {
            get() {
                return Number(this.text1) + Number(this.text2) + Number(this.text3)
            },
            set() {
            }
        }
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
                console.log(res)
                this.$emit('hide_table', res.showArr);
                if (res.data.length >= 1) {
                    var data = res.data[0]['content'];
                    Object.keys(data).forEach(key => {
                        this[key] = data[key]
                    })
                    // this.text11 = json.parse(res.data[0]['content']['text11']);
                    // this.text12 = json.parse(res.data[0]['content']['text12']);
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
        // 添加一行数据
        add_text (text) {
            var len = 1;
            for (var event in this[text]) {
                len++;
            }
            this.$set(this[text], `text${len}`, {});
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
                biao_id: this.biao_id, // 第几个表
                pro_id: this.pro_id, // 项目id
                project_type_id: this.project_type_id // 项目类型id
            }
            create(data).then(res => {
                loading.close();
                // console.log(res)
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
