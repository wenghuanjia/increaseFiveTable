<template>
    <div class="t7">
        <table class="table table-hover table-bordered" v-loading="loading">
            <tbody v-if="state_flag == 1 || state_flag == 2">
                <tr>
                    <td colspan="4">1. 主要技术指标</td>
                </tr>
                <tr>
                    <td colspan="4"><textarea name="" id="" style="width: 100%" rows="3" v-model="text1"></textarea></td>
                </tr>
                <tr>
                    <td colspan="4">2. 主要技术成果</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td colspan="2">成果形式</td>
                    <td>成果数量</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>新产品（或新材料、新装备、新品种/系）</td>
                    <td><input type="text" class="form-control" v-model="text2" /></td>
                    <td><input type="text" class="form-control" v-model="text3" /></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>新工艺（或新方法、新模式、新技术、新服务）</td>
                    <td><input type="text" class="form-control" v-model="text4" /></td>
                    <td><input type="text" class="form-control" v-model="text5" /></td>
                </tr>
                <tr>
                    <td rowspan="2">3</td>
                    <td rowspan="2">发明专利（件）</td>
                    <td>申　请</td>
                    <td><input type="text" class="form-control" v-model="text6" /></td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td><input type="text" class="form-control" v-model="text7" /></td>
                </tr>
                <tr>
                    <td rowspan="2">4</td>
                    <td rowspan="2">实用新型专利（件）</td>
                    <td>申　请</td>
                    <td><input type="text" class="form-control" v-model="text8" /></td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td><input type="text" class="form-control" v-model="text9" /></td>
                </tr>
                <tr>
                    <td rowspan="2">5</td>
                    <td rowspan="2">外观设计专利（件）</td>
                    <td>申　请</td>
                    <td><input type="text" class="form-control" v-model="text10" /></td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td><input type="text" class="form-control" v-model="text11" /></td>
                </tr>
                <tr>
                    <td rowspan="2">6</td>
                    <td rowspan="2">国外专利（件）</td>
                    <td>PCT受理</td>
                    <td><input type="text" class="form-control" v-model="text12" /></td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td><input type="text" class="form-control" v-model="text13" /></td>
                </tr>
                <tr>
                    <td rowspan="2">7</td>
                    <td rowspan="2">技术标准制定（个）</td>
                    <td>牵　头</td>
                    <td><input type="text" class="form-control" v-model="text14" /></td>
                </tr>
                <tr>
                    <td>参　与</td>
                    <td><input type="text" class="form-control" v-model="text15" /></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td colspan="2">软件著作权（项）</td>
                    <td><input type="text" class="form-control" v-model="text16" /></td>
                </tr>
                <tr>
                    <td rowspan="2">9</td>
                    <td rowspan="2">论文论著（篇）</td>
                    <td>SCI/ EI/ ISTP</td>
                    <td><input type="text" class="form-control" v-model="text17" /></td>
                </tr>
                <tr>
                    <td>其他</td>
                    <td><input type="text" class="form-control" v-model="text18" /></td>
                </tr>
                <tr>
                    <td rowspan="2">10</td>
                    <td rowspan="2">创新平台（载体）项目必填</td>
                    <td>技术服务数量（项）</td>
                    <td><input type="text" class="form-control" v-model="text19" /></td>
                </tr>
                <tr>
                    <td>服务企业数量（家）</td>
                    <td><input type="text" class="form-control" v-model="text20" /></td>
                </tr>
                <tr>
                    <td>11</td>
                    <td colspan="2">获得国家级奖项（项）</td>
                    <td><input type="text" class="form-control" v-model="text21" /></td>
                </tr>
                <tr>
                    <td>12</td>
                    <td colspan="2">获得省级奖项（项）</td>
                    <td><input type="text" class="form-control" v-model="text22" /></td>
                </tr>
                <tr>
                    <td>13</td>
                    <td colspan="2">科技人才奖励（人）</td>
                    <td><input type="text" class="form-control" v-model="text23" /></td>
                </tr>
                <tr>
                    <td>14</td>
                    <td colspan="2">引进人才（人）</td>
                    <td><input type="text" class="form-control" v-model="text24" /></td>
                </tr>
                <tr>
                    <td rowspan="2">15</td>
                    <td rowspan="2">培养人才（人）</td>
                    <td>博　士</td>
                    <td><input type="text" class="form-control" v-model="text25" /></td>
                </tr>
                <tr>
                    <td>硕　士</td>
                    <td><input type="text" class="form-control" v-model="text26" /></td>
                </tr>
                <tr>
                    <td colspan="4">其他成果及形式说明（创新特色、成果宣传推介措施等，限150字）：</td>
                </tr>
                <tr>
                    <td colspan="4"><textarea name="" id="" style="width: 100%" rows="3" v-model="text27"></textarea></td>
                </tr>
                <tr>
                    <td colspan="4">3. 主要经济指标及社会效益</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>指标名称</td>
                    <td colspan="2">指标值</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>实施期内项目销售收入（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text28" /></td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>实施期内项目利税（万元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text29" /></td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>实施期内项目出口创汇（万美元）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text30" /></td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>实施期内项目新增就业人数（人）</td>
                    <td colspan="2"><input type="text" class="form-control" v-model="text31" /></td>
                </tr>
                <tr>
                    <td colspan="4">其他经济指标及社会效益说明（限150字）：</td>
                </tr>
                <tr>
                    <td colspan="4"><textarea name="" id="" style="width: 100%" rows="3" v-model="text32"></textarea></td>
                </tr>
            </tbody> 
            <tbody v-else>
                <tr>
                    <td colspan="4">1. 主要技术指标</td>
                </tr>
                <tr>
                    <td colspan="4">{{ text1 }}</td>
                </tr>
                <tr>
                    <td colspan="4">2. 主要技术成果</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td colspan="2">成果形式</td>
                    <td>成果数量</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>新产品（或新材料、新装备、新品种/系）</td>
                    <td>{{ text2 }}</td>
                    <td>{{ text3 }}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>新工艺（或新方法、新模式、新技术、新服务）</td>
                    <td>{{ text4 }}</td>
                    <td>{{ text5 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">3</td>
                    <td rowspan="2">发明专利（件）</td>
                    <td>申　请</td>
                    <td>{{ text6 }}</td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td>{{ text7 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">4</td>
                    <td rowspan="2">实用新型专利（件）</td>
                    <td>申　请</td>
                    <td>{{ text8 }}</td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td>{{ text9 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">5</td>
                    <td rowspan="2">外观设计专利（件）</td>
                    <td>申　请</td>
                    <td>{{ text10 }}</td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td>{{ text11 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">6</td>
                    <td rowspan="2">国外专利（件）</td>
                    <td>PCT受理</td>
                    <td>{{ text12 }}</td>
                </tr>
                <tr>
                    <td>授　权</td>
                    <td>{{ text13 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">7</td>
                    <td rowspan="2">技术标准制定（个）</td>
                    <td>牵　头</td>
                    <td>{{ text14 }}</td>
                </tr>
                <tr>
                    <td>参　与</td>
                    <td>{{ text15 }}</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td colspan="2">软件著作权（项）</td>
                    <td>{{ text16 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">9</td>
                    <td rowspan="2">论文论著（篇）</td>
                    <td>SCI/ EI/ ISTP</td>
                    <td>{{ text17 }}</td>
                </tr>
                <tr>
                    <td>其他</td>
                    <td>{{ text18 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">10</td>
                    <td rowspan="2">创新平台（载体）项目必填</td>
                    <td>技术服务数量（项）</td>
                    <td>{{ text19 }}</td>
                </tr>
                <tr>
                    <td>服务企业数量（家）</td>
                    <td>{{ text20 }}</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td colspan="2">获得国家级奖项（项）</td>
                    <td>{{ text21 }}</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td colspan="2">获得省级奖项（项）</td>
                    <td>{{ text22 }}</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td colspan="2">科技人才奖励（人）</td>
                    <td>{{ text23 }}</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td colspan="2">引进人才（人）</td>
                    <td>{{ text24 }}</td>
                </tr>
                <tr>
                    <td rowspan="2">15</td>
                    <td rowspan="2">培养人才（人）</td>
                    <td>博　士</td>
                    <td>{{ text25 }}</td>
                </tr>
                <tr>
                    <td>硕　士</td>
                    <td>{{ text26 }}</td>
                </tr>
                <tr>
                    <td colspan="4">其他成果及形式说明（创新特色、成果宣传推介措施等，限150字）：</td>
                </tr>
                <tr>
                    <td colspan="4">{{ text27 }}</td>
                </tr>
                <tr>
                    <td colspan="4">3. 主要经济指标及社会效益</td>
                </tr>
                <tr>
                    <td>序号</td>
                    <td>指标名称</td>
                    <td colspan="2">指标值</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>实施期内项目销售收入（万元）</td>
                    <td colspan="2">{{ text28 }}</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>实施期内项目利税（万元）</td>
                    <td colspan="2">{{ text29 }}</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>实施期内项目出口创汇（万美元）</td>
                    <td colspan="2">{{ text30 }}</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>实施期内项目新增就业人数（人）</td>
                    <td colspan="2">{{ text31 }}</td>
                </tr>
                <tr>
                    <td colspan="4">其他经济指标及社会效益说明（限150字）：</td>
                </tr>
                <tr>
                    <td colspan="4">{{ text32 }}</td>
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
            biao_id: 36, // 第几个表
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
            text22: "",
            text23: "",
            text24: "",
            text25: "",
            text26: "",
            text27: "",
            text28: "",
            text29: "",
            text30: "",
            text31: "",
            text32: "",
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
                text22: this.text22,
                text23: this.text23,
                text24: this.text24,
                text25: this.text25,
                text26: this.text26,
                text27: this.text27,
                text28: this.text28,
                text29: this.text29,
                text30: this.text30,
                text31: this.text31,
                text32: this.text32,
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
                text26: this.text26,
                text27: this.text27,
                text28: this.text28,
                text29: this.text29,
                text30: this.text30,
                text31: this.text31,
                text32: this.text32,
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
