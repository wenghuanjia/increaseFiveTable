<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td>序号</td>
                    <td>附件名称</td>
                    <td>数量</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>企业营业执照</td>
                    <td><input v-model="text1" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>单位法人证书</td>
                    <td><input v-model="text2" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>组织机构代码证</td>
                    <td><input v-model="text3" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>上年度资产负债表</td>
                    <td><input v-model="text4" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>上年度损益表（收入支出表）</td>
                    <td><input v-model="text5" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>高新技术企业证书</td>
                    <td><input v-model="text6" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>科学技术成果鉴定证书</td>
                    <td><input v-model="text7" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>专利证书</td>
                    <td><input v-model="text8" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>检测报告</td>
                    <td><input v-model="text9" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>查新证明</td>
                    <td><input v-model="text10" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>新药证书</td>
                    <td><input v-model="text11" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>通讯电力入网证</td>
                    <td><input v-model="text12" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>生物新品种、农产品、农药登记证</td>
                    <td><input v-model="text13" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>特殊产品生产许可证</td>
                    <td><input v-model="text14" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>企业各出资方意见</td>
                    <td><input v-model="text15" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>各类获奖证书</td>
                    <td><input v-model="text16" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>列入国家计划文件或证书</td>
                    <td><input v-model="text17" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>环保证明</td>
                    <td><input v-model="text18" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>用户意见</td>
                    <td><input v-model="text19" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>合作协议</td>
                    <td><input v-model="text20" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>其他</td>
                    <td><input v-model="text21" type="text" class="form-control" /></td>
                </tr>
                <tr>
                    <td>22</td>
                    <td colspan="2">说明：指南要求的必须上传，其他自行选择上传</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td>序号</td>
                    <td>附件名称</td>
                    <td>数量</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>企业营业执照</td>
                    <td>{{ text1 }}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>单位法人证书</td>
                    <td>{{ text2 }}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>组织机构代码证</td>
                    <td>{{ text3 }}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>上年度资产负债表</td>
                    <td>{{ text4 }}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>上年度损益表（收入支出表）</td>
                    <td>{{ text5 }}</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>高新技术企业证书</td>
                    <td>{{ text6 }}</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>科学技术成果鉴定证书</td>
                    <td>{{ text7 }}</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>专利证书</td>
                    <td>{{ text8 }}</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>检测报告</td>
                    <td>{{ text9 }}</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>查新证明</td>
                    <td>{{ text10 }}</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>新药证书</td>
                    <td>{{ text11 }}</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>通讯电力入网证</td>
                    <td>{{ text12 }}</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>生物新品种、农产品、农药登记证</td>
                    <td>{{ text13 }}</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>特殊产品生产许可证</td>
                    <td>{{ text14 }}</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>企业各出资方意见</td>
                    <td>{{ text15 }}</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>各类获奖证书</td>
                    <td>{{ text16 }}</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>列入国家计划文件或证书</td>
                    <td>{{ text17 }}</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>环保证明</td>
                    <td>{{ text18 }}</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>用户意见</td>
                    <td>{{ text19 }}</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>合作协议</td>
                    <td>{{ text20 }}</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>其他</td>
                    <td>{{ text21 }}</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td colspan="2">说明：指南要求的必须上传，其他自行选择上传</td>
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
            biao_id: 21, // 第几个表
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
            text16: "",
            text17: "",
            text18: "",
            text19: "",
            text20: "",
            text21: "",
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
