<template>
    <div class="t3">
        <table class="table table-hover table-bordered" v-loading="loading">
            <!-- 修改或添加 -->
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>受理号</td>
                    <td><input type="text" v-model="text1" class="form-control" /></td>
                </tr>
                <tr>
                    <td colspan="2" class="title">广东省工程技术研究中心认定申请书</td>
                </tr>
                <tr>
                    <td>中心名称：</td>
                    <td><input type="text" v-model="text2" class="form-control" /></td>
                </tr>
                <tr>
                    <td>研究开发方向：</td>
                    <td><input type="text" v-model="text3" class="form-control" /></td>
                </tr>
                <tr>
                    <td>所属领域：</td>
                    <td><input type="text" v-model="text4" class="form-control" /></td>
                </tr>
                <tr>
                    <td>受理依托单位：</td>
                    <td><input type="text" v-model="text5" class="form-control" /></td>
                </tr>
                <tr>
                    <td>联合共建单位：</td>
                    <td><input type="text" v-model="text6" class="form-control" /></td>
                </tr>
                <tr>
                    <td>通信地址：</td>
                    <td><input type="text" v-model="text7" class="form-control" /></td>
                </tr>
                <tr>
                    <td>邮政编码：</td>
                    <td><input type="text" v-model="text8" class="form-control" /></td>
                </tr>
                <tr>
                    <td>联 系 人：</td>
                    <td><input type="text" v-model="text9" class="form-control" /></td>
                </tr>
                <tr>
                    <td>联系电话：</td>
                    <td><input type="text" v-model="text10" class="form-control" /></td>
                </tr>
                <tr>
                    <td>申报日期：</td>
                    <td><input type="text" v-model="text11" class="form-control" /></td>
                </tr>
                <tr>
                    <td colspan="2" class="title">广东省科学技术厅</td>
                </tr>
                <tr>
                    <td colspan="2" class="title"><input type="text" class="form-control" v-model="text12" placeholder="2016年2月制"/></td>
                </tr>
            </tbody>   
            <!-- 查看 -->
            <tbody v-else>
                <tr>
                    <td>受理号</td>
                    <td>{{ text1 }}</td>
                </tr>
                <tr>
                    <td colspan="2" class="title">广东省工程技术研究中心认定申请书</td>
                </tr>
                <tr>
                    <td>中心名称：</td>
                    <td>{{ text2 }}</td>
                </tr>
                <tr>
                    <td>研究开发方向：</td>
                    <td>{{ text3 }}</td>
                </tr>
                <tr>
                    <td>所属领域：</td>
                    <td>{{ text4 }}</td>
                </tr>
                <tr>
                    <td>受理依托单位：</td>
                    <td>{{ text5 }}</td>
                </tr>
                <tr>
                    <td>联合共建单位：</td>
                    <td>{{ text6 }}</td>
                </tr>
                <tr>
                    <td>通信地址：</td>
                    <td>{{ text7 }}</td>
                </tr>
                <tr>
                    <td>邮政编码：</td>
                    <td>{{ text8 }}</td>
                </tr>
                <tr>
                    <td>联 系 人：</td>
                    <td>{{ text9 }}</td>
                </tr>
                <tr>
                    <td>联系电话：</td>
                    <td>{{ text10 }}</td>
                </tr>
                <tr>
                    <td>申报日期：</td>
                    <td>{{ text11 }}</td>
                </tr>
                <tr>
                    <td colspan="2" class="title">广东省科学技术厅</td>
                </tr>
                <tr>
                    <td colspan="2" class="title">{{ text12 }}</td>
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
        <el-button type="primary" size="mini"  v-if="deriveFlag" @click="derived_field">导出word</el-button>

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
            biao_id: 1, // 第几个表
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
            create({
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
                biao_id: this.biao_id, // 第几个表
                pro_id: this.pro_id, // 项目id
                project_type_id: this.project_type_id // 项目类型id
            }).then(res => {
                loading.close();
                this.$message.success('上传成功!');
                this.SET_STATE_FLAG(2);
                this.id = res.id;
                console.log(res)
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
