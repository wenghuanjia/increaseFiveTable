<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td rowspan="5">获得知识产权数量(件)</td>
                    <td>发明专利</td>
                    <td><input type="text" class="form-control" v-model="text1" /></td>
                    <td>其中：国防专利</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text2" /></td>
                </tr>
                <tr>
                    <td>植物新品种</td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                    <td>国家级农作物品种</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text4" /></td>
                </tr>
                <tr>
                    <td>国家新药</td>
                    <td><input type="text" class="form-control" v-model="text5" /></td>
                    <td>国家一级中药保护品种</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text6" /></td>
                </tr>
                <tr>
                    <td>集成电路布图设计专有权</td>
                    <td><input type="text" class="form-control" v-model="text7" /></td>
                    <td>实用新型</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td>外观设计</td>
                    <td><input type="text" class="form-control" v-model="text9" /></td>
                    <td>软件著作权</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td>知识产权编号</td>
                    <td>知识产权名称</td>
                    <td>类别</td>
                    <td>授权日期</td>
                    <td>授权号</td>
                    <td>获得方式</td>
                </tr>
                <tr v-for="(value, key, index) in text11" :key="index">
                    <td>{{`IP${index+1}`}}</td>
                    <td><input type="text" class="form-control" v-model="text11[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text11[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text11[key]['text3']" /></td>
                    <td><input type="text" class="form-control" v-model="text11[key]['text4']" /></td>
                    <td><input type="text" class="form-control" v-model="text11[key]['text5']" /></td>
                </tr>
                <tr>
                    <td colspan="6"><el-button type="primary" size="mini" @click="add_text('text11')">+</el-button></td>
                </tr>
                <tr>
                    <td colspan="6">有效知识产权明细表</td>
                </tr>
                <template v-for="(value, key, index) in text12">
                    <tr>
                        <td>序号</td>
                        <td colspan="5">{{ index + 1 }}</td>
                    </tr>
                    <tr>
                        <td>所属项目编号</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text1']" /></td>
                        <td>所属项目编号</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text2']" /></td>
                    </tr>
                    <tr>
                        <td>知识产权名称</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text3']" /></td>
                        <td>是否为有效知识产权</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text4']" /></td>
                    </tr>
                    <tr>
                        <td>类别</td>
                        <td><input type="text" class="form-control" v-model="text12[key]['text5']" /></td>
                        <td>国内实用新型专利/国内发明专利/软件著作权/PCT</td>
                        <td>获得方式</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text6']" /></td>
                    </tr>
                    <tr>
                        <td>授权号</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text7']" /></td>
                        <td>所有权日期</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text8']" /></td>
                    </tr>
                    <tr>
                        <td>专利权人</td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text9']" /></td>
                        <td><input type="text" class="form-control" v-model="text12[key]['text10']" /></td>
                        <td colspan="2"><input type="text" class="form-control" v-model="text12[key]['text11']" /></td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div>国家知识产权局官方网站上公布的摘要</div>
                            <textarea name="" id="" style="width:100%" v-model="text12[key]['text12']"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div>与本知识产权相关的核心关键技术先进性说明</div>
                            <textarea name="" id="" style="width:100%" v-model="text12[key]['text13']"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div>该知识产权与本企业主营产品（服务）核心技术的支持作用说明</div>
                            <textarea name="" id="" style="width:100%" v-model="text12[key]['text14']"></textarea>
                        </td>
                    </tr>
                </template>
                <tr>
                    <td colspan="6"><el-button type="primary" size="mini" @click="add_text('text12')">+</el-button></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td rowspan="5">获得知识产权数量(件)</td>
                    <td>发明专利</td>
                    <td>{{ text1 }}</td>
                    <td>其中：国防专利</td>
                    <td colspan="2">{{ text2 }}</td>
                </tr>
                <tr>
                    <td>植物新品种</td>
                    <td>{{ text3 }}</td>
                    <td>国家级农作物品种</td>
                    <td colspan="2">{{ text4 }}</td>
                </tr>
                <tr>
                    <td>国家新药</td>
                    <td>{{ text5 }}</td>
                    <td>国家一级中药保护品种</td>
                    <td colspan="2">{{ text6 }}</td>
                </tr>
                <tr>
                    <td>集成电路布图设计专有权</td>
                    <td>{{ text7 }}</td>
                    <td>实用新型</td>
                    <td colspan="2">{{ text8 }}</td>
                </tr>
                <tr>
                    <td>外观设计</td>
                    <td>{{ text9 }}</td>
                    <td>软件著作权</td>
                    <td colspan="2">{{ text10 }}</td>
                </tr>
                <tr>
                    <td>知识产权编号</td>
                    <td>知识产权名称</td>
                    <td>类别</td>
                    <td>授权日期</td>
                    <td>授权号</td>
                    <td>获得方式</td>
                </tr>
                <tr v-for="(value, key, index) in text11" :key="index">
                    <td>{{`IP${index+1}`}}</td>
                    <td>{{ text11[key]['text1'] }}</td>
                    <td>{{ text11[key]['text2'] }}</td>
                    <td>{{ text11[key]['text3'] }}</td>
                    <td>{{ text11[key]['text4'] }}</td>
                    <td>{{ text11[key]['text5'] }}</td>
                </tr>
                <tr>
                    <td colspan="6">有效知识产权明细表</td>
                </tr>
                <template v-for="(value, key, index) in text12">
                    <tr>
                        <td>序号</td>
                        <td colspan="5">序号</td>
                    </tr>
                    <tr>
                        <td>所属项目编号</td>
                        <td colspan="2">{{ text12[key]['text1'] }}</td>
                        <td>所属项目编号</td>
                        <td colspan="2">{{ text12[key]['text2'] }}</td>
                    </tr>
                    <tr>
                        <td>知识产权名称</td>
                        <td colspan="2">{{ text12[key]['text3'] }}</td>
                        <td>是否为有效知识产权</td>
                        <td colspan="2">{{ text12[key]['text4'] }}</td>
                    </tr>
                    <tr>
                        <td>类别</td>
                        <td>{{ text12[key]['text5'] }}</td>
                        <td>国内实用新型专利/国内发明专利/软件著作权/PCT</td>
                        <td>获得方式</td>
                        <td colspan="2">{{ text12[key]['text6'] }}</td>
                    </tr>
                    <tr>
                        <td>授权号</td>
                        <td colspan="2">{{ text12[key]['text7'] }}</td>
                        <td>所有权日期</td>
                        <td colspan="2">{{ text12[key]['text8'] }}</td>
                    </tr>
                    <tr>
                        <td>专利权人</td>
                        <td colspan="2">{{ text12[key]['text9'] }}</td>
                        <td>{{ text12[key]['text10'] }}</td>
                        <td colspan="2">{{ text12[key]['text11'] }}</td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div>国家知识产权局官方网站上公布的摘要</div>
                            {{ text12[key]['text12'] }}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div>与本知识产权相关的核心关键技术先进性说明</div>
                            {{ text12[key]['text13'] }}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <div>该知识产权与本企业主营产品（服务）核心技术的支持作用说明</div>
                            {{ text12[key]['text14'] }}
                        </td>
                    </tr>
                </template>
                
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
            biao_id: 40, // 第几个表
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
            text11: {text1:{}},
            text12: {text1:{}},
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
                    this.text11 = json.parse(res.data[0]['content']['text11']);
                    this.text12 = json.parse(res.data[0]['content']['text12']);
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
