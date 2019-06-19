<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>*项目名称</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text1" /></td>
                </tr>
                <tr>
                    <td>*项目起止时间</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text2" /></td>
                </tr>  
                <tr>
                    <td>*项目总经费预算（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text3" /></td>
                    <td>*申请经费资助（万元）</td>
                    <td><input type="text" class="form-control" v-model="text4" /></td>
                </tr> 
                <tr>
                    <td>*课题研究方向</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text5" /></td>
                </tr> 
                <tr>
                    <td>*社会经济目标</td>
                    <td colspan="4"><input type="text" class="form-control" v-model="text6" /></td>
                </tr>   
                <tr>
                    <td colspan="5">项目摘要（200字以内）：</td>
                </tr>    
                <tr>
                    <td colspan="5"><textarea  v-model="text7" style="width: 100%" rows="3"></textarea></td>    
                </tr> 
                <tr>
                    <td>*关键字（用；隔开）：</td>
                    <td colspan="4"><input type="text" class="form-control" placeholder="限制5个" v-model="text8" /></td>
                </tr>
                <tr>
                    <td rowspan="3">项目技术情况</td>
                    <td>*技术领域</td>
                    <td><input type="text" class="form-control" v-model="text9" /></td>
                    <td>*学科</td>
                    <td><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td>研究活动类型</td>
                    <td><input type="text" class="form-control" v-model="text11" /></td>
                    <td>项目研究阶段</td>
                    <td><input type="text" class="form-control" v-model="text12" /></td>
                </tr>
                <tr>
                    <td>技术来源</td>
                    <td><input type="text" class="form-control" v-model="text13" /></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>预期成果形式</td>
                    <td colspan="4">
                        <label><input type="checkbox" v-model="check1" value="0">新产品</label>
                        <label><input type="checkbox" v-model="check1" value="1">新品种</label>
                        <label><input type="checkbox" v-model="check1" value="2">新工艺</label>
                        <label><input type="checkbox" v-model="check1" value="3">新装置</label>
                        <label><input type="checkbox" v-model="check1" value="4">新材料</label>
                        <label><input type="checkbox" v-model="check1" value="5">技术标准（国际标准、国家标准、行业标准、企业标准）</label>
                        <label><input type="checkbox" v-model="check1" value="6">专利</label>
                        <label><input type="checkbox" v-model="check1" value="7">计算机软件</label>
                        <label><input type="checkbox" v-model="check1" value="8">论文论著</label>
                        <label><input type="checkbox" v-model="check1" value="9">研究报告</label>
                        <label><input type="checkbox" v-model="check1" value="10">其它</label>
                    </td>
                </tr>
                <tr>
                    <td>项目已受财政资金资助情况</td>
                    <td colspan="4">
                        <label><input type="checkbox" v-model="check2" value="0">国家（部委）财政资金资助</label>
                        <label><input type="checkbox" v-model="check2" value="1">省级财政科技资金资助</label>
                        <label><input type="checkbox" v-model="check2" value="2">省级财政其他部门资金资助</label>
                        <label><input type="checkbox" v-model="check2" value="3">地市财政资金资助</label>
                        <label><input type="checkbox" v-model="check2" value="4">其它</label>
                        <label><input type="checkbox" v-model="check2" value="5">无</label>
                        <textarea placeholder="简要说明（限制100字）" v-model="text14" id="" cols="30"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>其它需要说明的问题（限100字）:</td>
                    <td colspan="4">
                        <textarea name="" id="" style="width:100%" v-model="text15"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>*本项目是否涉及实验动物：</td>
                    <td colspan="4">
                        <label>
                            <input type="radio" v-model="radio1" value="1">是
                        </label>
                        <label>
                            <input type="radio" v-model="radio1" value="0">否
                        </label>
                    </td>
                </tr>
            </tbody>  
            <tbody v-else>
                <tr>
                    <td>*项目名称</td>
                    <td colspan="4">{{ text1 }}</td>
                </tr>
                <tr>
                    <td>*项目起止时间</td>
                    <td colspan="4">{{ text2 }}</td>
                </tr>  
                <tr>
                    <td>*项目总经费预算（万元）</td>
                    <td colspan="2">{{ text3 }}</td>
                    <td>*申请经费资助（万元）</td>
                    <td>{{ text4 }}</td>
                </tr> 
                <tr>
                    <td>*课题研究方向</td>
                    <td colspan="4">{{ text5 }}</td>
                </tr> 
                <tr>
                    <td>*社会经济目标</td>
                    <td colspan="4">{{ text6 }}</td>
                </tr>   
                <tr>
                    <td colspan="5">项目摘要（200字以内）：</td>
                </tr>    
                <tr>
                    <td colspan="5">{{ text7 }}</td>    
                </tr> 
                <tr>
                    <td>*关键字（用；隔开）：</td>
                    <td colspan="4">{{ text8 }}</td>
                </tr>
                <tr>
                    <td rowspan="3">项目技术情况</td>
                    <td>*技术领域</td>
                    <td>{{ text9 }}</td>
                    <td>*学科</td>
                    <td>{{ text10 }}</td>
                </tr>
                <tr>
                    <td>研究活动类型</td>
                    <td>{{ text11 }}</td>
                    <td>项目研究阶段</td>
                    <td>{{ text12 }}</td>
                </tr>
                <tr>
                    <td>技术来源</td>
                    <td>{{ text13 }}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>预期成果形式</td>
                    <td colspan="4">
                        <label><input type="checkbox" disabled v-model="check1" value="0">新产品</label>
                        <label><input type="checkbox" disabled v-model="check1" value="1">新品种</label>
                        <label><input type="checkbox" disabled v-model="check1" value="2">新工艺</label>
                        <label><input type="checkbox" disabled v-model="check1" value="3">新装置</label>
                        <label><input type="checkbox" disabled v-model="check1" value="4">新材料</label>
                        <label><input type="checkbox" disabled v-model="check1" value="5">技术标准（国际标准、国家标准、行业标准、企业标准）</label>
                        <label><input type="checkbox" disabled v-model="check1" value="6">专利</label>
                        <label><input type="checkbox" disabled v-model="check1" value="7">计算机软件</label>
                        <label><input type="checkbox" disabled v-model="check1" value="8">论文论著</label>
                        <label><input type="checkbox" disabled v-model="check1" value="9">研究报告</label>
                        <label><input type="checkbox" disabled v-model="check1" value="10">其它</label>
                    </td>
                </tr>
                <tr>
                    <td>项目已受财政资金资助情况</td>
                    <td colspan="4">
                        <label><input type="checkbox" disabled v-model="check2" value="0">国家（部委）财政资金资助</label>
                        <label><input type="checkbox" disabled v-model="check2" value="1">省级财政科技资金资助</label>
                        <label><input type="checkbox" disabled v-model="check2" value="2">省级财政其他部门资金资助</label>
                        <label><input type="checkbox" disabled v-model="check2" value="3">地市财政资金资助</label>
                        <label><input type="checkbox" disabled v-model="check2" value="4">其它</label>
                        <label><input type="checkbox" disabled v-model="check2" value="5">无</label>
                        {{text14}}
                    </td>
                </tr>
                <tr>
                    <td>其它需要说明的问题（限100字）:</td>
                    <td colspan="4">
                        {{text15}}
                    </td>
                </tr>
                <tr>
                    <td>*本项目是否涉及实验动物：</td>
                    <td colspan="4">
                        {{ radio1 == 1 ? '是' : '否' }}
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
            biao_id: 9,
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
            radio1: "",
            check1: [],
            check2: [],
            pro_id: null, // 项目id
            project_type_id: "", // 项目类型id
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
                text7: this.text7,
                text8: this.text8,
                text9: this.text9,
                text10: this.text10,
                text11: this.text11,
                text12: this.text12,
                text13: this.text13,
                text14: this.text14,
                text15: this.text15,
                radio1: this.radio1,
                check1: this.check1,
                check2: this.check2,
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
                radio1: this.radio1,
                check1: this.check1,
                check2: this.check2,
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

    input[type="radio"] {
        -webkit-appearance: radio;
        margin: 0px;
    }

    .title {
        text-align: center;
    }
</style>
