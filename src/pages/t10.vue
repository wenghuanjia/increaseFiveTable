<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <thead>
                <tr>
                    <td colspan="5">（七）项目实施绩效（单位：项数）</td>
                </tr>
            </thead>
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td colspan="5">1.主要成果指标</td>
                </tr>
                <tr>
                    <td>成果形式</td>
                    <td>成果数量</td>
                    <td colspan="2">成果形式</td>
                    <td>成果数量</td>
                </tr>
                <tr>
                    <td>专利申请（件）</td>
                    <td><input type="text" class="form-control" v-model="text1" /></td>
                    <td colspan="2">引进人才（人）</td>
                    <td><input type="text" class="form-control" v-model="text2" /></td>
                </tr>
                <tr>
                    <td>其中：发明</td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                    <td colspan="2">培养人才（人）</td>
                    <td><input type="text" class="form-control" v-model="text4" /></td>
                </tr>
                <tr>
                    <td>实用新型</td>
                    <td><input type="text" class="form-control" v-model="text5" /></td>
                    <td colspan="2">科技人才奖励（人）</td>
                    <td><input type="text" class="form-control" v-model="text6" /></td>
                </tr>
                <tr>
                    <td>其中：国际专利</td>
                    <td><input type="text" class="form-control" v-model="text7" /></td>
                    <td rowspan="2">技术标准制定</td>
                    <td>牵头（个）</td>
                    <td><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td>软件著作权（项）</td>
                    <td><input type="text" class="form-control" v-model="text9" /></td>
                    <td>参与（个）</td>
                    <td><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td>获国家级奖项（项）</td>
                    <td><input type="text" class="form-control" v-model="text11" /></td>
                    <td colspan="2">论文论著（篇）</td>
                    <td><input type="text" class="form-control" v-model="text12" /></td>
                </tr>
                <tr>
                    <td>获省家级奖项（项）</td>
                    <td><input type="text" class="form-control" v-model="text13" /></td>
                    <td rowspan="3">被收录论文数（篇）</td>
                    <td>SCI</td>
                    <td><input type="text" class="form-control" v-model="text14" /></td>
                </tr>
                <tr>
                    <td>新产品（个）</td>
                    <td><input type="text" class="form-control" v-model="text15" /></td>
                    <td>IE</td>
                    <td><input type="text" class="form-control" v-model="text16" /></td>
                </tr>
                <tr>
                    <td>新材料（种）</td>
                    <td><input type="text" class="form-control" v-model="text17" /></td>
                    <td>CA</td>
                    <td><input type="text" class="form-control" v-model="text18" /></td>
                </tr>
                <tr>
                    <td>新装备（台/套）</td>
                    <td><input type="text" class="form-control" v-model="text19" /></td>
                    <td colspan="2">新服务（项）</td>
                    <td><input type="text" class="form-control" v-model="text20" /></td>
                </tr>
                <tr>
                    <td>新工艺（或新方法、新模式）（个）</td>
                    <td><input type="text" class="form-control" v-model="text21" /></td>
                    <td colspan="2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">创新载体项目必填</td>
                    <td colspan="3">技术服务数量</td>
                    <td><input type="text" class="form-control" v-model="text22" /></td>
                </tr>
                <tr>
                    <td colspan="3">服务企业数量</td>
                    <td><input type="text" class="form-control" v-model="text23" /></td>
                </tr>
                <tr>
                    <td rowspan="4">创新载体项目必填</td>
                    <td colspan="3">引进院士及其团队科技成果转化数量</td>
                    <td><input type="text" class="form-control" v-model="text24" /></td>
                </tr>
                <tr>
                    <td colspan="3">院士开展的战略咨询和技术指导次数</td>
                    <td><input type="text" class="form-control" v-model="text25" /></td>
                </tr>
                <tr>
                    <td colspan="3">院士年进站次数</td>
                    <td><input type="text" class="form-control" v-model="text26" /></td>
                </tr>
                <tr>
                    <td colspan="3">院士及院士团队年进站时间</td>
                    <td><input type="text" class="form-control" v-model="text27" /></td>
                </tr>
                <tr>
                    <td colspan="5">
                        <div>其他将提供的研究开发成果及形式(创新特色、成果宣传推介措施等，限200字)：</div>
                        <textarea name="" id="" style="width:100%" v-model="text28"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="5">2.本项目完成后预计经济效益情况：</td>
                </tr>
                <tr>
                    <td colspan="2">累计年新增产值（万元）</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text29" /></td>
                </tr>
                <tr>
                    <td colspan="2">累计年新增利税（万元）</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text30" /></td>
                </tr>
                <tr>
                    <td colspan="2">累计年新增出口创汇（万美元）</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text31" /></td>
                </tr>
                <tr>
                    <td colspan="2">年新增销售值（万元）</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text32" /></td>
                </tr>
                <tr>
                    <td colspan="5">
                        <div>3.本项目完成后预计社会效益情况（限300字）：</div>
                        <textarea name="" id="" style="width:100%" v-model="text33" ></textarea>
                    </td>
                </tr>
            </tbody>  
            <tbody v-else>
                <tr>
                    <td colspan="5">1.主要成果指标</td>
                </tr>
                <tr>
                    <td>成果形式</td>
                    <td>成果数量</td>
                    <td colspan="2">成果形式</td>
                    <td>成果数量</td>
                </tr>
                <tr>
                    <td>专利申请（件）</td>
                    <td>{{ text1 }}</td>
                    <td colspan="2">引进人才（人）</td>
                    <td>{{ text2 }}</td>
                </tr>
                <tr>
                    <td>其中：发明</td>
                    <td>{{ text3 }}</td>
                    <td colspan="2">培养人才（人）</td>
                    <td>{{ text4 }}</td>
                </tr>
                <tr>
                    <td>实用新型</td>
                    <td>{{ text5 }}</td>
                    <td colspan="2">科技人才奖励（人）</td>
                    <td>{{ text6 }}</td>
                </tr>
                <tr>
                    <td>其中：国际专利</td>
                    <td>{{ text7 }}</td>
                    <td rowspan="2">技术标准制定</td>
                    <td>牵头（个）</td>
                    <td>{{ text8 }}</td>
                </tr>
                <tr>
                    <td>软件著作权（项）</td>
                    <td>{{ text9 }}</td>
                    <td>参与（个）</td>
                    <td>{{ text10 }}</td>
                </tr>
                <tr>
                    <td>获国家级奖项（项）</td>
                    <td>{{ text11 }}</td>
                    <td colspan="2">论文论著（篇）</td>
                    <td>{{ text12 }}</td>
                </tr>
                <tr>
                    <td>获省家级奖项（项）</td>
                    <td>{{ text13 }}</td>
                    <td rowspan="3">被收录论文数（篇）</td>
                    <td>SCI</td>
                    <td>{{ text14 }}</td>
                </tr>
                <tr>
                    <td>新产品（个）</td>
                    <td>{{ text15 }}</td>
                    <td>IE</td>
                    <td>{{ text16 }}</td>
                </tr>
                <tr>
                    <td>新材料（种）</td>
                    <td>{{ text17 }}</td>
                    <td>CA</td>
                    <td>{{ text18 }}</td>
                </tr>
                <tr>
                    <td>新装备（台/套）</td>
                    <td>{{ text19 }}</td>
                    <td colspan="2">新服务（项）</td>
                    <td>{{ text20 }}</td>
                </tr>
                <tr>
                    <td>新工艺（或新方法、新模式）（个）</td>
                    <td>{{ text21 }}</td>
                    <td colspan="2"></td>
                    <td></td>
                </tr>
                <tr>
                    <td rowspan="2">创新载体项目必填</td>
                    <td colspan="3">技术服务数量</td>
                    <td>{{ text22 }}</td>
                </tr>
                <tr>
                    <td colspan="3">服务企业数量</td>
                    <td>{{ text23 }}</td>
                </tr>
                <tr>
                    <td rowspan="4">创新载体项目必填</td>
                    <td colspan="3">引进院士及其团队科技成果转化数量</td>
                    <td>{{ text24 }}</td>
                </tr>
                <tr>
                    <td colspan="3">院士开展的战略咨询和技术指导次数</td>
                    <td>{{ text25 }}</td>
                </tr>
                <tr>
                    <td colspan="3">院士年进站次数</td>
                    <td>{{ text26 }}</td>
                </tr>
                <tr>
                    <td colspan="3">院士及院士团队年进站时间</td>
                    <td>{{ text27 }}</td>
                </tr>
                <tr>
                    <td colspan="5">
                        <div>其他将提供的研究开发成果及形式(创新特色、成果宣传推介措施等，限200字)：</div>
                        {{ text28 }}
                    </td>
                </tr>
                <tr>
                    <td colspan="5">2.本项目完成后预计经济效益情况：</td>
                </tr>
                <tr>
                    <td colspan="2">累计年新增产值（万元）</td>
                    <td colspan="3">{{ text29 }}</td>
                </tr>
                <tr>
                    <td colspan="2">累计年新增利税（万元）</td>
                    <td colspan="3">{{ text30 }}</td>
                </tr>
                <tr>
                    <td colspan="2">累计年新增出口创汇（万美元）</td>
                    <td colspan="3">{{ text31 }}</td>
                </tr>
                <tr>
                    <td colspan="2">年新增销售值（万元）</td>
                    <td colspan="3">{{ text32 }}</td>
                </tr>
                <tr>
                    <td colspan="5">
                        <div>3.本项目完成后预计社会效益情况（限300字）：</div>
                        {{ text33 }}
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
            biao_id: 11, // 第几个表
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
