<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>
                        <div>（一）立项的背景和意义（200字以内）</div>
                        <textarea name="" id="" style="width:100%" v-model="text1"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（二）研发内容和关键技术（1000字以内）</div>
                        <div>（参考提纲: ①主要研究内容②拟解决的关键问题及技术路线③创新点）</div>
                        <textarea name="" id="" style="width:100%" v-model="text2"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（三）国内外相关研究情况概述及结论（300字以内）</div>
                        <textarea name="" id="" style="width:100%" v-model="text3"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（四）组织实施方式和保障措施（400字以内）</div>
                        <textarea name="" id="" style="width:100%" v-model="text4"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（五）项目风险评估（限200字）</div>
                        <textarea name="" id="" style="width:100%" v-model="text5"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（六）前期工作基础（700字以内）</div>
                        <div>（参考提纲：①申报单位和项目负责人前期研究工作情况②前期研究所取得的进展和阶段性成果③与项目直接相关的知识产权情况）</div>
                        <textarea name="" id="" style="width:100%" v-model="text6"></textarea>
                    </td>
                </tr>
            </tbody>    
            <tbody v-else>
                <tr>
                    <td>
                        <div>（一）立项的背景和意义（200字以内）</div>
                        {{ text1 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（二）研发内容和关键技术（1000字以内）</div>
                        <div>（参考提纲: ①主要研究内容②拟解决的关键问题及技术路线③创新点）</div>
                        {{ text2 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（三）国内外相关研究情况概述及结论（300字以内）</div>
                        {{ text3 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（四）组织实施方式和保障措施（400字以内）</div>
                        {{ text4 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（五）项目风险评估（限200字）</div>
                        {{ text5 }}
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>（六）前期工作基础（700字以内）</div>
                        <div>（参考提纲：①申报单位和项目负责人前期研究工作情况②前期研究所取得的进展和阶段性成果③与项目直接相关的知识产权情况）</div>
                        {{ text6 }}
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
            biao_id: 10,
            text1: "",
            text2: "",
            text3: "",
            text4: "",
            text5: "",
            text6: "",
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

    input[type="checkbox"] {
        -webkit-appearance: checkbox;
        margin: 0px;
    }

    .title {
        text-align: center;
    }
</style>
