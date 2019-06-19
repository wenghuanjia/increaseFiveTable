<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td colspan="5">（一）总体情况</td>
                </tr>
                <tr>
                    <td></td>
                    <td colspan="2">企业职工</td>
                    <td colspan="2">科技人员</td>
                </tr>
                <tr>
                    <td>总数（人）-10</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text1" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text2" /></td>
                </tr>
                <tr>
                    <td>其中：在职人员</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text3" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text4" /></td>
                </tr>
                <tr>
                    <td>兼职人员</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text5" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text6" /></td>
                </tr>
                <tr>
                    <td>临时聘用人员</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text7" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td>外籍人员</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text9" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td>留学归国人员</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text11" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text12" /></td>
                </tr>
                <tr>
                    <td>千人计划人员</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text13" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text14" /></td>
                </tr>
                <tr>
                    <td colspan="5">（二）全体人员结构</td>
                </tr>
                <tr>
                    <td>学  历</td>
                    <td>博  士</td>
                    <td>硕  士</td>
                    <td>本  科</td>
                    <td>大专及以下</td>
                </tr>
                <tr>
                    <td>人  数</td>
                    <td><input type="text" class="form-control" v-model="text15" /></td>
                    <td><input type="text" class="form-control" v-model="text16" /></td>
                    <td><input type="text" class="form-control" v-model="text17" /></td>
                    <td><input type="text" class="form-control" v-model="text18" /></td>
                </tr>
                <tr>
                    <td>职  称</td>
                    <td>高级职称</td>
                    <td>中级职称</td>
                    <td>初级职称</td>
                    <td>高级技工</td>
                </tr>
                <tr>
                    <td>人  数</td>
                    <td><input type="text" class="form-control" v-model="text19" /></td>
                    <td><input type="text" class="form-control" v-model="text20" /></td>
                    <td><input type="text" class="form-control" v-model="text21" /></td>
                    <td><input type="text" class="form-control" v-model="text22" /></td>
                </tr>
                <tr>
                    <td>年  龄</td>
                    <td>30及以下</td>
                    <td>31-40</td>
                    <td>41-50</td>
                    <td>51及以上</td>
                </tr>
                <tr>
                    <td>人  数</td>
                    <td><input type="text" class="form-control" v-model="text23" /></td>
                    <td><input type="text" class="form-control" v-model="text24" /></td>
                    <td><input type="text" class="form-control" v-model="text25" /></td>
                    <td><input type="text" class="form-control" v-model="text26" /></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5">（一）总体情况</td>
                </tr>
                <tr>
                    <td></td>
                    <td colspan="2">企业职工</td>
                    <td colspan="2">科技人员</td>
                </tr>
                <tr>
                    <td>总数（人）-10</td>
                    <td colspan="2">{{ text1 }}</td>
                    <td colspan="2">{{ text2 }}</td>
                </tr>
                <tr>
                    <td>其中：在职人员</td>
                    <td colspan="2">{{ text3 }}</td>
                    <td colspan="2">{{ text4 }}</td>
                </tr>
                <tr>
                    <td>兼职人员</td>
                    <td colspan="2">{{ text5 }}</td>
                    <td colspan="2">{{ text6 }}</td>
                </tr>
                <tr>
                    <td>临时聘用人员</td>
                    <td colspan="2">{{ text7 }}</td>
                    <td colspan="2">{{ text8 }}</td>
                </tr>
                <tr>
                    <td>外籍人员</td>
                    <td colspan="2">{{ text9 }}</td>
                    <td colspan="2">{{ text10 }}</td>
                </tr>
                <tr>
                    <td>留学归国人员</td>
                    <td colspan="2">{{ text11 }}</td>
                    <td colspan="2">{{ text12 }}</td>
                </tr>
                <tr>
                    <td>千人计划人员</td>
                    <td colspan="2">{{ text13 }}</td>
                    <td colspan="2">{{ text14 }}</td>
                </tr>
                <tr>
                    <td colspan="5">（二）全体人员结构</td>
                </tr>
                <tr>
                    <td>学  历</td>
                    <td>博  士</td>
                    <td>硕  士</td>
                    <td>本  科</td>
                    <td>大专及以下</td>
                </tr>
                <tr>
                    <td>人  数</td>
                    <td>{{ text15 }}</td>
                    <td>{{ text16 }}</td>
                    <td>{{ text17 }}</td>
                    <td>{{ text18 }}</td>
                </tr>
                <tr>
                    <td>职  称</td>
                    <td>高级职称</td>
                    <td>中级职称</td>
                    <td>初级职称</td>
                    <td>高级技工</td>
                </tr>
                <tr>
                    <td>人  数</td>
                    <td>{{ text19 }}</td>
                    <td>{{ text20 }}</td>
                    <td>{{ text21 }}</td>
                    <td>{{ text22 }}</td>
                </tr>
                <tr>
                    <td>年  龄</td>
                    <td>30及以下</td>
                    <td>31-40</td>
                    <td>41-50</td>
                    <td>51及以上</td>
                </tr>
                <tr>
                    <td>人  数</td>
                    <td>{{ text23 }}</td>
                    <td>{{ text24 }}</td>
                    <td>{{ text25 }}</td>
                    <td>{{ text26 }}</td>
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
            biao_id: 41, // 第几个表
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
