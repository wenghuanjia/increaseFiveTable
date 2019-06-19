<template>
    <div class="t3">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>固定资产总值（万元）</td>
                    <td colspan="6"><input type="text" class="form-control" v-model="text1" /></td>
                </tr>
                <tr>
                    <td colspan="1">工程试验用房（平方米）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text2" /></td>
                    <td colspan="2">办公用房（平方米）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text3" /></td>
                </tr>
                <tr>
                    <td colspan="1">仪器设备装备总数（台）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text4" /></td>
                    <td colspan="2">仪器设备装备总值（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text5" /></td>
                </tr>
                <tr>
                    <td colspan="7" class="title">主要仪器设备装备情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>名称</td>
                    <td>型号</td>
                    <td>产地</td>
                    <td>原值（万元）</td>
                    <td>购置日期</td>
                    <td>运行状况</td>
                </tr>
                <tr v-for="(value, key, index) in text6" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text3']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text4']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text5']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text6']" /></td>
                </tr>
                <tr>
                    <td colspan="7"><el-button type="primary" size="mini" @click="add_text6('text6')">+</el-button></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>固定资产总值（万元）</td>
                    <td colspan="6">{{ text1 }}</td>
                </tr>
                <tr>
                    <td colspan="1">工程试验用房（平方米）</td>
                    <td colspan="2">{{ text2 }}</td>
                    <td colspan="2">办公用房（平方米）</td>
                    <td colspan="2">{{ text3 }}</td>
                </tr>
                <tr>
                    <td colspan="1">仪器设备装备总数（台）</td>
                    <td colspan="2">{{ text4 }}</td>
                    <td colspan="2">仪器设备装备总值（万元）</td>
                    <td colspan="2">{{ text5 }}</td>
                </tr>
                <tr>
                    <td colspan="7" class="title">主要仪器设备装备情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>名称</td>
                    <td>型号</td>
                    <td>产地</td>
                    <td>原值（万元）</td>
                    <td>购置日期</td>
                    <td>运行状况</td>
                </tr>
                <tr v-for="(value, key, index) in text6" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ text6[key]['text1'] }}</td>
                    <td>{{ text6[key]['text2'] }}</td>
                    <td>{{ text6[key]['text3'] }}</td>
                    <td>{{ text6[key]['text4'] }}</td>
                    <td>{{ text6[key]['text5'] }}</td>
                    <td>{{ text6[key]['text6'] }}</td>
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
            biao_id: 5, // 第几个表
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: {
                "text1": {},
                "text2": {},
                "text3": {},
                "text4": {},
                "text5": {},
                "text6": {},
                "text7": {},
                "text8": {},
                "text9": {},
                "text10": {}
            },
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
                    this.text6 = json.parse(res.data[0]['content']['text6']);

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
        add_text6 (text) {
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
                text3: this.text3,
                text4: this.text4,
                text5: this.text5,
                text6: this.text6,
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

    .title {
        text-align: center;
    }
</style>
