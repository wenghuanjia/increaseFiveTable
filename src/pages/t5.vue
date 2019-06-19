<template>
    <div class="t3">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td colspan="5" class="title">近三年开展研究开发项目情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>项目名称</td>
                    <td>立项部门、计划类型</td>
                    <td>项目经费（万元）</td>
                    <td>起止时间</td>
                </tr>
                <tr v-for="(value, key, index) in text1" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text3']" /></td>
                    <td><input type="text" class="form-control" v-model="text1[key]['text4']" /></td>
                </tr>
                <tr>
                    <td colspan="5"><el-button type="primary" size="mini" @click="add_text('text1')" v-if="state_flag == 1">+</el-button></td>
                </tr>
                <tr>
                    <td colspan="5" class="title">开展产学研合作情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>项目名称</td>
                    <td>合作单位</td>
                    <td>项目经费（万元）</td>
                    <td>起止时间</td>
                </tr>
                <tr v-for="(value, key, index) in text2" :key="index + '1'">
                    <td>{{ index + 1 }}</td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text3']" /></td>
                    <td><input type="text" class="form-control" v-model="text2[key]['text4']" /></td>
                </tr>
                <tr>
                    <td colspan="5"><el-button type="primary" size="mini" @click="add_text('text2')" v-if="state_flag == 1">+</el-button></td>
                </tr>

                <tr>
                    <td colspan="5" class="title">获得国家、省部、市级以上科学技术奖励情况</td>
                </tr>
                <tr>
                    <td colspan="2">成果名称</td>
                    <td colspan="2">奖励类别及等级</td>
                    <td>获奖年度</td>
                </tr>
                <tr v-for="(value, key, index) in text3" :key="index + '2'">
                    <td colspan="2"><input type="text" class="form-control" v-model="text3[key]['text1']" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text3[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text3[key]['text3']" /></td>
                </tr>
                <tr>
                    <td colspan="5"><el-button type="primary" size="mini" @click="add_text('text3')" v-if="state_flag == 1">+</el-button></td>
                </tr>

                <tr>
                    <td colspan="5" class="title">近三年新产品清单</td>
                </tr>
                <tr>
                    <td colspan="2">产品名称</td>
                    <td colspan="2">年度</td>
                    <td>批准部门</td>
                </tr>
                <tr v-for="(value, key, index) in text4" :key="index + '3'">
                    <td colspan="2"><input type="text" class="form-control" v-model="text4[key]['text1']" /></td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text4[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text4[key]['text3']" /></td>
                </tr>
                <tr>
                    <td colspan="5"><el-button type="primary" size="mini" @click="add_text('text4')" v-if="state_flag == 1">+</el-button></td>
                </tr>

                <tr>
                    <td colspan="5" class="title">近三年成果转化情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td colspan="2">成果名称</td>
                    <td>转化单位</td>
                    <td>年份</td>
                </tr>
                <tr v-for="(value, key, index) in text5" :key="index + '4'">
                    <td>{{ index + 1 }}</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text5[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text5[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text5[key]['text3']" /></td>
                </tr>
                <tr>
                    <td colspan="5"><el-button type="primary" size="mini" @click="add_text('text5')" v-if="state_flag == 1">+</el-button></td>
                </tr>

                <tr>
                    <td colspan="5" class="title">获得自主知识产权情况</td>
                </tr>
                <tr>
                    <td>专利名称</td>
                    <td>类别</td>
                    <td>专利号或批准文号</td>
                    <td>授权单位</td>
                    <td>授权时间</td>
                </tr>
                <tr v-for="(value, key, index) in text6" :key="index + '5'">
                    <td><input type="text" class="form-control" v-model="text6[key]['text1']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text2']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text3']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text4']" /></td>
                    <td><input type="text" class="form-control" v-model="text6[key]['text5']" /></td>
                </tr>
                <tr>
                    <td colspan="5">注：类别指发明专利、实用新型专利、外观设计专利，及某些行业批准的具有自主知识产权意义的国家级证书如新医药、新农药、软件著作权、经国家或省审（鉴）定的动植物新品种等。</td>
                </tr>
                <tr>
                    <td colspan="5"><el-button type="primary" size="mini" @click="add_text('text6')" v-if="state_flag == 1">+</el-button></td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5" class="title">近三年开展研究开发项目情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>项目名称</td>
                    <td>立项部门、计划类型</td>
                    <td>项目经费（万元）</td>
                    <td>起止时间</td>
                </tr>
                <tr v-for="(value, key, index) in text1" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ text1[key]['text1'] }}</td>
                    <td>{{ text1[key]['text2'] }}</td>
                    <td>{{ text1[key]['text3'] }}</td>
                    <td>{{ text1[key]['text4'] }}</td>
                </tr>

                <tr>
                    <td colspan="5" class="title">开展产学研合作情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>项目名称</td>
                    <td>合作单位</td>
                    <td>项目经费（万元）</td>
                    <td>起止时间</td>
                </tr>
                <tr v-for="(value, key, index) in text2" :key="index + '1'">
                    <td>{{ index + 1 }}</td>
                    <td>{{ text2[key]['text1'] }}</td>
                    <td>{{ text2[key]['text2'] }}</td>
                    <td>{{ text2[key]['text3'] }}</td>
                    <td>{{ text2[key]['text4'] }}</td>
                </tr>

                <tr>
                    <td colspan="5" class="title">获得国家、省部、市级以上科学技术奖励情况</td>
                </tr>
                <tr>
                    <td colspan="2">成果名称</td>
                    <td colspan="2">奖励类别及等级</td>
                    <td>获奖年度</td>
                </tr>
                <tr v-for="(value, key, index) in text3" :key="index + '2'">
                    <td colspan="2">{{ text3[key]['text1'] }}</td>
                    <td colspan="2">{{ text3[key]['text2'] }}</td>
                    <td>{{ text3[key]['text3'] }}</td>
                </tr>

                <tr>
                    <td colspan="5" class="title">近三年新产品清单</td>
                </tr>
                <tr>
                    <td colspan="2">产品名称</td>
                    <td colspan="2">年度</td>
                    <td>批准部门</td>
                </tr>
                <tr v-for="(value, key, index) in text4" :key="index + '3'">
                    <td colspan="2">{{ text4[key]['text1'] }}</td>
                    <td colspan="2">{{ text4[key]['text2'] }}</td>
                    <td>{{ text4[key]['text3'] }}</td>
                </tr>

                <tr>
                    <td colspan="5" class="title">近三年成果转化情况</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td colspan="2">成果名称</td>
                    <td>转化单位</td>
                    <td>年份</td>
                </tr>
                <tr v-for="(value, key, index) in text5" :key="index + '4'">
                    <td>{{ index + 1 }}</td>
                    <td colspan="2">{{ text5[key]['text1'] }}</td>
                    <td>{{ text5[key]['text2'] }}</td>
                    <td>{{ text5[key]['text3'] }}</td>
                </tr>

                <tr>
                    <td colspan="5" class="title">获得自主知识产权情况</td>
                </tr>
                <tr>
                    <td>专利名称</td>
                    <td>类别</td>
                    <td>专利号或批准文号</td>
                    <td>授权单位</td>
                    <td>授权时间</td>
                </tr>
                <tr v-for="(value, key, index) in text6" :key="index + '5'">
                    <td>{{ text6[key]['text1'] }}</td>
                    <td>{{ text6[key]['text2'] }}</td>
                    <td>{{ text6[key]['text3'] }}</td>
                    <td>{{ text6[key]['text4'] }}</td>
                    <td>{{ text6[key]['text5'] }}</td>
                </tr>
                <tr>
                    <td colspan="5">注：类别指发明专利、实用新型专利、外观设计专利，及某些行业批准的具有自主知识产权意义的国家级证书如新医药、新农药、软件著作权、经国家或省审（鉴）定的动植物新品种等。</td>
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
            text1: {
                text1: {},text2: {},text3: {},text4: {},text5: {},text6: {},text7: {},text8: {},text9: {},text10: {}
            },
            text2: {
                text1: {}
            },
            text3: {
                text1: {}
            },
            text4: {
                text1: {},text2: {},text3: {},text4: {},text5: {}
            },
            text5: {
                text1: {},text2: {},text3: {},text4: {},text5: {},text5: {},text5: {},text5: {},text5: {},text5: {},text5: {},text5: {},text5: {},text5: {},text5: {}
            },
            text6: {
                text1: {},text2: {},text3: {},text4: {},text5: {}
            },
            biao_id: 6,
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
                    this.text1 = json.parse(res.data[0]['content']['text1']);
                    this.text2 = json.parse(res.data[0]['content']['text2']);
                    this.text3 = json.parse(res.data[0]['content']['text3']);
                    this.text4 = json.parse(res.data[0]['content']['text4']);
                    this.text5 = json.parse(res.data[0]['content']['text5']);
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
