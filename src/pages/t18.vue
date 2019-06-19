<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td colspan="10">项目负责人</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>*姓名</td>
                    <td>*职称</td>
                    <td>*职务</td>
                    <td>*最高学位</td>
                    <td>*现从事专业</td>
                    <td>*所在单位</td>
                    <td>*身份证件号码</td>
                    <td>*在本项目中承担的工作任务</td>
                    <td>签名</td>
                </tr>
                <tr v-for="(value, key, index) in text1" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text3']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text4']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text5']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text6']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text7']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text8']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text9']" /></td>
                </tr>
                <tr style="padding-top: 20px;">
                    <td colspan="10">主要参与人员</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>*姓名</td>
                    <td>职称</td>
                    <td>职务</td>
                    <td>学位</td>
                    <td>现从事专业</td>
                    <td>*所在单位</td>
                    <td>*身份证件号码</td>
                    <td>在本项目中承担的工作任务</td>
                    <td>签名</td>
                </tr>
                <tr v-for="(value, key, index) in text2" :key="'a' + index">
                    <td>{{ index + 1 }}</td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text3']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text4']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text5']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text6']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text7']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text8']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text9']" /></td>
                </tr>
                <tr>
                    <td colspan="10"><el-button type="primary" size="mini" @click="add_text('text2')">+</el-button></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="10">项目负责人</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>*姓名</td>
                    <td>*职称</td>
                    <td>*职务</td>
                    <td>*最高学位</td>
                    <td>*现从事专业</td>
                    <td>*所在单位</td>
                    <td>*身份证件号码</td>
                    <td>*在本项目中承担的工作任务</td>
                    <td>签名</td>
                </tr>
                <tr v-for="(value, key, index) in text1" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ text1[key]['text1'] }}</td>
                    <td>{{ text1[key]['text2'] }}</td>
                    <td>{{ text1[key]['text3'] }}</td>
                    <td>{{ text1[key]['text4'] }}</td>
                    <td>{{ text1[key]['text5'] }}</td>
                    <td>{{ text1[key]['text6'] }}</td>
                    <td>{{ text1[key]['text7'] }}</td>
                    <td>{{ text1[key]['text8'] }}</td>
                    <td>{{ text1[key]['text9'] }}</td>
                </tr>
                <tr>
                    <td colspan="10" style="padding-top: 20px;">主要参与人员</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>*姓名</td>
                    <td>职称</td>
                    <td>职务</td>
                    <td>学位</td>
                    <td>现从事专业</td>
                    <td>*所在单位</td>
                    <td>*身份证件号码</td>
                    <td>在本项目中承担的工作任务</td>
                    <td>签名</td>
                </tr>
                <tr v-for="(value, key, index) in text2" :key="'a' + index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ text2[key]['text1'] }}</td>
                    <td>{{ text2[key]['text2'] }}</td>
                    <td>{{ text2[key]['text3'] }}</td>
                    <td>{{ text2[key]['text4'] }}</td>
                    <td>{{ text2[key]['text5'] }}</td>
                    <td>{{ text2[key]['text6'] }}</td>
                    <td>{{ text2[key]['text7'] }}</td>
                    <td>{{ text2[key]['text8'] }}</td>
                    <td>{{ text2[key]['text9'] }}</td>
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
import json from "jsonify"

export default {
    props: ['flag', 'deriveFlag'],
    data () {
        return {
            pzhu: '', // 批注
            id: null, // 修改需要的id
            loading: true, // 加载中
            biao_id: 19, // 第几个表
            text1: {text1:{},text2:{},text3:{}},
            text2:{text1:{}},
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
                    this.text1 = json.parse(res.data[0]['content']['text1']);
                    this.text2 = json.parse(res.data[0]['content']['text2']);
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
            for (var even in this[text]) {
                len++;
            }
            this.$set(this[text], 'text' + len, {})
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
