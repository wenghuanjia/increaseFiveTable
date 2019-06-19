<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>*姓名</td>
                    <td><input type="text" class="form-control" v-model="text1" /></td>
                    <td>*性别</td>
                    <td><input type="text" class="form-control" v-model="text2" /></td>
                    <td>*所在单位</td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                </tr>
                <tr>
                    <td colspan="2">*身份证（外籍填写护照）号码</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text4" /></td>
                </tr>
                <tr>
                    <td>*是否项目总负责人</td>
                    <td colspan="2">
                        <label>
                            <input type="radio" v-model="radio1" value="1">是
                        </label>
                        <label>
                            <input type="radio" v-model="radio1" value="0">否
                        </label>
                    </td>
                    <td>*是否院士</td>
                    <td colspan="2">
                        <label>
                            <input type="radio" v-model="radio2" value="1">是
                        </label>
                        <label>
                            <input type="radio" v-model="radio2" value="0">否
                        </label>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">*主要工作经历</td>
                    <td colspan="4"><textarea style="width: 100%;" rows="10" v-model="text5"></textarea></td>
                </tr>
                <tr>
                    <td colspan="2">*主要工作成绩</td>
                    <td colspan="4"><textarea style="width: 100%;" rows="10" v-model="text6"></textarea></td>
                </tr>
            </tbody> 
            <tbody v-else>
                <tr>
                    <td>*姓名</td>
                    <td>{{ text1 }}</td>
                    <td>*性别</td>
                    <td>{{ text2 }}</td>
                    <td>*所在单位</td>
                    <td>{{ text3 }}</td>
                </tr>
                <tr>
                    <td colspan="2">*身份证（外籍填写护照）号码</td>
                    <td colspan="4">{{ text4 }}</td>
                </tr>
                <tr>
                    <td>*是否项目总负责人</td>
                    <td colspan="2">
                        <label>
                            <input type="radio" v-model="radio1" disabled value="1">是
                        </label>
                        <label>
                            <input type="radio" v-model="radio1" disabled value="0">否
                        </label>
                    </td>
                    <td>*是否院士</td>
                    <td colspan="2">
                        <label>
                            <input type="radio" v-model="radio2" disabled value="1">是
                        </label>
                        <label>
                            <input type="radio" v-model="radio2" disabled value="0">否
                        </label>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">*主要工作经历</td>
                    <td colspan="4">{{ text5 }}</td>
                </tr>
                <tr>
                    <td colspan="2">*主要工作成绩</td>
                    <td colspan="4">{{ text6 }}</td>
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
            biao_id: 20, // 第几个表
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
            radio1: "",
            radio2: "",
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
        // 添加一行数据
        add_text (text) {
            this[text].push({})
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
