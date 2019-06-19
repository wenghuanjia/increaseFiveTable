<template>
    <div class="t7" v-loading="loading">
        <table class="table table-hover table-bordered" v-for="(value, key, index) in text1" :key="index">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>产品（服务）名称</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text1[key]['text1']" /></td>
                </tr>
                <tr>
                    <td>技术领域</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text1[key]['text2']" /></td>
                </tr>
                <tr>
                    <td>技术来源</td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text3']" /></td>
                    <td>上年度销售收入（万元）</td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text4']" /></td>
                </tr>
                <tr>
                    <td>是否主要产品（服务）</td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text5']" /></td>
                    <td>知识产权编号</td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text6']" /></td>
                </tr>
                <tr>
                    <td>关键技术及主要技术指标（限400字）</td>
                    <td colspan="3"><textarea name="" id="" style="width:100%" v-model="text1[key]['text7']"></textarea></td>
                </tr>
                <tr>
                    <td>与同类产品（服务）的竞争优势（限400字）</td>
                    <td colspan="3"><textarea name="" id="" style="width:100%" v-model="text1[key]['text8']"></textarea></td>
                </tr>
                <tr>
                    <td>知识产权获得情况及其对产品（服务）在技术上发挥的支持作用（限400字）</td>
                    <td colspan="3"><textarea name="" id="" style="width:100%" v-model="text1[key]['text9']"></textarea></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>产品（服务）名称</td>
                    <td colspan="3">{{ text1[key]['text1'] }}</td>
                </tr>
                <tr>
                    <td>技术领域</td>
                    <td colspan="3">{{ text1[key]['text2'] }}</td>
                </tr>
                <tr>
                    <td>技术来源</td>
                    <td>{{ text1[key]['text3'] }}</td>
                    <td>上年度销售收入（万元）</td>
                    <td>{{ text1[key]['text4'] }}</td>
                </tr>
                <tr>
                    <td>是否主要产品（服务）</td>
                    <td>{{ text1[key]['text5'] }}</td>
                    <td>知识产权编号</td>
                    <td>{{ text1[key]['text6'] }}</td>
                </tr>
                <tr>
                    <td>关键技术及主要技术指标（限400字）</td>
                    <td colspan="3">{{ text1[key]['text7'] }}</td>
                </tr>
                <tr>
                    <td>与同类产品（服务）的竞争优势（限400字）</td>
                    <td colspan="3">{{ text1[key]['text8'] }}</td>
                </tr>
                <tr>
                    <td>知识产权获得情况及其对产品（服务）在技术上发挥的支持作用（限400字）</td>
                    <td colspan="3">{{ text1[key]['text9'] }}</td>
                </tr>
            </tbody>            
        </table>
        <div style="margin-bottom: 15px;">
            <el-button type="primary" size="mini" @click="add_text('text1')">+</el-button>
        </div>
        
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
            biao_id: 44, // 第几个表
            pro_id: null, // 项目id
            project_type_id: "", // 项目类型id
            text1: {text1:{}}
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
                    this.text1 = json.parse(res.data[0]['content']['text1'])
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
