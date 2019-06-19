<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody>
                <tr>
                    <td colspan="8"></td>
                </tr>
                <tr>
                    <td colspan="8" align="center">研发项目</td>
                </tr>
                <tr>
                    <td>项目名称</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text1" placeholder="请输入"/></td>
                    <td>所属领域</td>
                    <td colspan="3"><input type="text" class="form-control" v-model="text2" /></td>
                </tr>
                <tr>
                    <td>知识产权或成果</td>
                    <td><input type="text" class="form-control" v-model="text3" placeholder="请输入"/></td>
                    <td>起止时间</td>
                    <td><input type="text" class="form-control" v-model="text4" placeholder="请输入"/></td>
                    <td>预算费用</td>
                    <td><input type="text" class="form-control" v-model="text5" placeholder="请输入"/></td>
                    <td>项目立项报告附件</td>
                    <td>
                        <a target="_blank" v-if="text6['file']" download="file" :href="text6['file']['url']">{{ text6['file']['filename'] }}</a>
                        <input type="file" @change="addproof(text6, $event)" />
                    </td>
                </tr>
                <tr>
                    <td>人员名单</td>
                    <td><input type="text" class="form-control" v-model="text7" placeholder="请输入"/></td>
                    <td>今年费用</td>
                    <td><input type="text" class="form-control" v-model="text8" placeholder="请输入"/></td>
                    <td>技术来源</td>
                    <td><input type="text" class="form-control" v-model="text9" placeholder="请输入"/></td>
                    <td>结题验收报告附件</td>
                    <td>
                        <a target="_blank" v-if="text10['file']" download="file" :href="text10['file']['url']">{{ text10['file']['filename'] }}</a>
                        <input type="file" @change="addproof(text10, $event)" />
                    </td>
                </tr>
                <tr>
                    <td colspan="4">成果附件（不限于合同发表、生产批文、新产品或新技术推广应用证明、产品质量检验报告等）</td>
                    <td colspan="4">
                        <a target="_blank" v-if="text11['file']" download="file" :href="text11['file']['url']">{{ text11['file']['filename'] }}</a>
                        <input type="file" @change="addproof(text11, $event)" />
                    </td>
                </tr>
                <tr>
                    <td colspan="8">立项目的与实施方式：</td>
                </tr>
                <tr>
                    <td colspan="8">
                        <textarea name="" v-model="text12" id="" style="width:100%" placeholder="请输入立项目的与实施方式..."></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="8">核心技术及创新点：</td>
                </tr>
                <tr>
                    <td colspan="8">
                        <textarea name="" v-model="text13" id="" style="width:100%" placeholder="请输入核心技术及创新点..."></textarea>
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
        <!-- <el-button type="primary" size="mini" @click="set_data" v-if="state_flag == 2">修改</el-button>
        <el-button type="primary" size="mini" @click="setpostil" v-if="audit_flag == 3">添加批注</el-button>
        <el-button type="primary" size="mini" v-if="deriveFlag" @click="derived_field">导出word</el-button> -->
        
        <el-button type="primary" size="mini" @click="set_data" v-if="state_flag == 2">修改</el-button>
        <el-button type="primary" size="mini" @click="derived_field" v-if="state_flag == 2">导出word</el-button>
    </div>
</template>

<script>
import { create, read, update, edit, index, upload } from "service/getData"
import { mapState, mapMutations } from "vuex"
import json from "jsonify"

export default {
    props: ['flag', 'deriveFlag'],
    data () {
        return {
            pzhu: '', // 批注
            id: null, // 修改需要的id
            loading: true, // 加载中
            biao_id: 48, // 第几个表
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: {}, // 存储上传文件信息
            text7: "",
            text8: "",
            text9: "",
            text10: {},// 存储上传文件信息
            text11: {},// 存储上传文件信息
            text12: "",
            text13: "",
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
        addproof (aim, e) {
            // aim 传递过来提交目标
            // console.log(aim)
            if (e.target.files.length == 0) return;
            const loading = this.$loading({
                lock: true,
                text: '上传中',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });

            var file = e.target.files;
            let param = new FormData();
            param.append('file', file[0]);
            upload(param).then(res => {
                loading.close();
                if (res.code == 1) {
                    this.$message.success(res.msg);
                    aim.file = res.data;
                    // console.log(aim instanceof Array)
                    if (aim instanceof Array) {
                        if (aim.indexOf('[') > -1) {
                            aim.replace('{')
                        }
                        if (aim.indexOf(']') > -1) {
                            aim.replace('}')
                        }
                    }
                    // console.log(aim['file']['url'])
                    // console.log(this.text10)
                    // console.log(this.text11)
                } else {
                    this.$message.error(res.msg);
                }
            })
        },
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
                    console.log(res.data[0]['content'])
                    var data = res.data[0]['content'];
                    Object.keys(data).forEach(key => {
                        this[key] = data[key]
                    })
                    if (typeof res.data[0]['content']['text6'] != 'object') {
                        this.text6 = json.parse(res.data[0]['content']['text6']);
                    }
                    if (typeof res.data[0]['content']['text10'] != 'object') {
                        this.text10 = json.parse(res.data[0]['content']['text10']);
                    }
                    if (typeof res.data[0]['content']['text11'] != 'object') {
                        this.text11 = json.parse(res.data[0]['content']['text11']);
                    }
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
                biao_id: this.biao_id, // 第几个表
                id: this.id, // 项目id
            }
            // data = JSON.stringify(data)
            // console.log(typeof data)
            update(data).then(res => {
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
                biao_id: this.biao_id, // 第几个表
                pro_id: this.pro_id, // 项目id
                project_type_id: this.project_type_id // 项目类型id
            }
            // data = JSON.stringify(data)
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
