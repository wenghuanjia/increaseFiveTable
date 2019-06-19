<template>
  <div class="t7">
    <table class="table table-hover table-bordered" v-loading="loading">
      <tbody>
        <tr>
          <td colspan="6" align="center">知识产权管理</td>
        </tr>
        <tr>
          <td>知识产权</td>
          <td colspan="5">I类</td>
        </tr>
        <!-- 集成电路布线图 -->
        <tr>
          <td>集成电路布线图</td>
          <td>
            <a
              target="_blank"
              v-if="text1['file']"
              download="file"
              :href="text1['file']['url']"
            >{{ text1['file']['filename'] }}</a>
            <input type="file" @change="addproof(text1, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text2" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text3" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text4['file']"
              download="file"
              :href="text4['file']['url']"
            >{{ text4['file']['filename'] }}</a>
            <input type="file" @change="addproof(text4, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text5['file']"
              download="file"
              :href="text5['file']['url']"
            >{{ text5['file']['filename'] }}</a>
            <input type="file" @change="addproof(text5, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text6['file']"
              download="file"
              :href="text6['file']['url']"
            >{{ text6['file']['filename'] }}</a>
            <input type="file" @change="addproof(text6, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text7['file']"
              download="file"
              :href="text7['file']['url']"
            >{{ text7['file']['filename'] }}</a>
            <input type="file" @change="addproof(text7, $event)">
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
        <!-- 发明专利 -->
        <tr>
          <td>发明专利</td>
          <td>
            <a
              target="_blank"
              v-if="text8['file']"
              download="file"
              :href="text8['file']['url']"
            >{{ text8['file']['filename'] }}</a>
            <input type="file" @change="addproof(text8, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text9" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text10" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text11['file']"
              download="file"
              :href="text11['file']['url']"
            >{{ text11['file']['filename'] }}</a>
            <input type="file" @change="addproof(text11, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text12['file']"
              download="file"
              :href="text12['file']['url']"
            >{{ text12['file']['filename'] }}</a>
            <input type="file" @change="addproof(text12, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text13['file']"
              download="file"
              :href="text13['file']['url']"
            >{{ text13['file']['filename'] }}</a>
            <input type="file" @change="addproof(text13, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text14['file']"
              download="file"
              :href="text14['file']['url']"
            >{{ text14['file']['filename'] }}</a>
            <input type="file" @change="addproof(text14, $event)">
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
        <!-- 植物新品种 -->
        <tr>
          <td>植物新品种</td>
          <td>
            <a
              target="_blank"
              v-if="text15['file']"
              download="file"
              :href="text15['file']['url']"
            >{{ text15['file']['filename'] }}</a>
            <input type="file" @change="addproof(text15, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text16" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text17" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text18['file']"
              download="file"
              :href="text18['file']['url']"
            >{{ text18['file']['filename'] }}</a>
            <input type="file" @change="addproof(text18, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text19['file']"
              download="file"
              :href="text19['file']['url']"
            >{{ text19['file']['filename'] }}</a>
            <input type="file" @change="addproof(text19, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text20['file']"
              download="file"
              :href="text20['file']['url']"
            >{{ text20['file']['filename'] }}</a>
            <input type="file" @change="addproof(text20, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text21['file']"
              download="file"
              :href="text21['file']['url']"
            >{{ text21['file']['filename'] }}</a>
            <input type="file" @change="addproof(text21, $event)">
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
        <!-- 国家新药 -->
        <tr>
          <td>国家新药</td>
          <td>
            <a
              target="_blank"
              v-if="text22['file']"
              download="file"
              :href="text22['file']['url']"
            >{{ text22['file']['filename'] }}</a>
            <input type="file" @change="addproof(text22, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text23" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text24" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text25['file']"
              download="file"
              :href="text25['file']['url']"
            >{{ text25['file']['filename'] }}</a>
            <input type="file" @change="addproof(text25, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text26['file']"
              download="file"
              :href="text26['file']['url']"
            >{{ text26['file']['filename'] }}</a>
            <input type="file" @change="addproof(text26, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text27['file']"
              download="file"
              :href="text27['file']['url']"
            >{{ text27['file']['filename'] }}</a>
            <input type="file" @change="addproof(text27, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text28['file']"
              download="file"
              :href="text28['file']['url']"
            >{{ text28['file']['filename'] }}</a>
            <input type="file" @change="addproof(text28, $event)">
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
        <!-- 国家一级中药保护品种 -->
        <tr>
          <td>国家一级中药保护品种</td>
          <td>
            <a
              target="_blank"
              v-if="text29['file']"
              download="file"
              :href="text29['file']['url']"
            >{{ text29['file']['filename'] }}</a>
            <input type="file" @change="addproof(text29, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text30" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text31" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text32['file']"
              download="file"
              :href="text32['file']['url']"
            >{{ text32['file']['filename'] }}</a>
            <input type="file" @change="addproof(text32, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text33['file']"
              download="file"
              :href="text33['file']['url']"
            >{{ text33['file']['filename'] }}</a>
            <input type="file" @change="addproof(text33, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text34['file']"
              download="file"
              :href="text34['file']['url']"
            >{{ text34['file']['filename'] }}</a>
            <input type="file" @change="addproof(text34, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text35['file']"
              download="file"
              :href="text35['file']['url']"
            >{{ text35['file']['filename'] }}</a>
            <input type="file" @change="addproof(text35, $event)">
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
        <!-- 知识产权II类 -->
        <tr>
          <td>知识产权</td>
          <td colspan="5">II类</td>
        </tr>
        <tr>
          <td>实用新型专利</td>
          <td>
            <a
              target="_blank"
              v-if="text36['file']"
              download="file"
              :href="text36['file']['url']"
            >{{ text36['file']['filename'] }}</a>
            <input type="file" @change="addproof(text36, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text37" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text38" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text39['file']"
              download="file"
              :href="text39['file']['url']"
            >{{ text39['file']['filename'] }}</a>
            <input type="file" @change="addproof(text39, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text40['file']"
              download="file"
              :href="text40['file']['url']"
            >{{ text40['file']['filename'] }}</a>
            <input type="file" @change="addproof(text40, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text41['file']"
              download="file"
              :href="text41['file']['url']"
            >{{ text41['file']['filename'] }}</a>
            <input type="file" @change="addproof(text41, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text42['file']"
              download="file"
              :href="text42['file']['url']"
            >{{ text42['file']['filename'] }}</a>
            <input type="file" @change="addproof(text42, $event)">
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
        <!-- 软件著作权 -->
        <tr>
          <td>软件著作权</td>
          <td>
            <a
              target="_blank"
              v-if="text43['file']"
              download="file"
              :href="text43['file']['url']"
            >{{ text43['file']['filename'] }}</a>
            <input type="file" @change="addproof(text43, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text44" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text45" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text46['file']"
              download="file"
              :href="text46['file']['url']"
            >{{ text46['file']['filename'] }}</a>
            <input type="file" @change="addproof(text46, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text47['file']"
              download="file"
              :href="text47['file']['url']"
            >{{ text47['file']['filename'] }}</a>
            <input type="file" @change="addproof(text47, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text48['file']"
              download="file"
              :href="text48['file']['url']"
            >{{ text48['file']['filename'] }}</a>
            <input type="file" @change="addproof(text48, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text49['file']"
              download="file"
              :href="text49['file']['url']"
            >{{ text49['file']['filename'] }}</a>
            <input type="file" @change="addproof(text49, $event)">
          </td>
        </tr>
        <tr>
          <td colspan="6"></td>
        </tr>
        <!-- 外观设计专利 -->
        <tr>
          <td>外观设计专利</td>
          <td>
            <a
              target="_blank"
              v-if="text50['file']"
              download="file"
              :href="text50['file']['url']"
            >{{ text50['file']['filename'] }}</a>
            <input type="file" @change="addproof(text50, $event)">
          </td>
          <td>申请时间</td>
          <td>
            <input type="text" class="form-control" v-model="text51" placeholder="请输入">
          </td>
          <td>取得时间</td>
          <td>
            <input type="text" class="form-control" v-model="text52" placeholder="请输入">
          </td>
        </tr>
        <tr>
          <td>申请材料附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text53['file']"
              download="file"
              :href="text53['file']['url']"
            >{{ text53['file']['filename'] }}</a>
            <input type="file" @change="addproof(text53, $event)">
          </td>
        </tr>
        <tr>
          <td>专利证书附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text54['file']"
              download="file"
              :href="text54['file']['url']"
            >{{ text54['file']['filename'] }}</a>
            <input type="file" @change="addproof(text54, $event)">
          </td>
        </tr>
        <tr>
          <td>收据或发表附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text55['file']"
              download="file"
              :href="text55['file']['url']"
            >{{ text55['file']['filename'] }}</a>
            <input type="file" @change="addproof(text55, $event)">
          </td>
        </tr>
        <tr>
          <td>其它附件</td>
          <td colspan="5">
            <a
              target="_blank"
              v-if="text56['file']"
              download="file"
              :href="text56['file']['url']"
            >{{ text56['file']['filename'] }}</a>
            <input type="file" @change="addproof(text56, $event)">
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="audit_flag == 3">
      <p style="margin-bottom: 10px;">批注</p>
      <input
        type="text"
        class="form-control"
        placeholder="批注"
        v-model="pzhu"
        style="margin-bottom: 15px;"
      >
    </div>
    <div v-if="audit_flag == 2">
      <p style="margin-bottom: 10px;">批注:{{ pzhu }}</p>
    </div>

    <el-button type="primary" size="mini" @click="upload_data" v-if="state_flag == 1">保存</el-button>
    <!-- <el-button type="primary" size="mini" @click="set_data" v-if="state_flag == 2">修改</el-button>
        <el-button type="primary" size="mini" @click="setpostil" v-if="audit_flag == 3">添加批注</el-button>
    <el-button type="primary" size="mini" v-if="deriveFlag" @click="derived_field">导出word</el-button>-->
    <el-button type="primary" size="mini" @click="set_data" v-if="state_flag == 2">修改</el-button>
    <el-button type="primary" size="mini" @click="derived_field" v-if="state_flag == 2">导出word</el-button>
  </div>
</template>

<script>
import { create, read, update, edit, index, upload } from "service/getData";
import { mapState, mapMutations } from "vuex";
import json from "jsonify";

export default {
  props: ["flag", "deriveFlag"],
  data() {
    return {
      pzhu: "", // 批注
      id: null, // 修改需要的id
      loading: true, // 加载中
      biao_id: 49, // 第几个表
      text1: {},
      text2: "",
      text3: "",
      text4: {},
      text5: {},
      text6: {},
      text7: {},
      text8: {},
      text9: "",
      text10: "",
      text11: {},
      text12: {},
      text13: {},
      text14: {},
      text15: {},
      text16: "",
      text17: "",
      text18: {},
      text19: {},
      text20: {},
      text21: {},
      text22: {},
      text23: "",
      text24: "",
      text25: {},
      text26: {},
      text27: {},
      text28: {},
      text29: {},
      text30: "",
      text31: "",
      text32: {},
      text33: {},
      text34: {},
      text35: {},
      text36: {},
      text37: "",
      text38: "",
      text39: {},
      text40: {},
      text41: {},
      text42: {},
      text43: {},
      text44: "",
      text45: "",
      text46: {},
      text47: {},
      text48: {},
      text49: {},
      text50: {},
      text51: "",
      text52: "",
      text53: {},
      text54: {},
      text55: {},
      text56: {},
      pro_id: null, // 项目id
      project_type_id: "" // 项目类型id
    };
  },
  created() {
    this.project_type_id = this.$route.query.id; // 项目类型id
    this.pro_id = this.$route.query.pro_id ? this.$route.query.pro_id : null; // 项目id
    if (this.pro_id) {
      this.check_data();
    } else {
      this.loading = false;
    }
  },
  computed: {
    ...mapState(["state_flag", "audit_flag"])
  },
  methods: {
    // 上传附件
    addproof(aim, e) {
      // aim 传递过来提交目标
      // console.log(aim)
      if (e.target.files.length == 0) return;
      const loading = this.$loading({
        lock: true,
        text: "上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });

      var file = e.target.files;
      let param = new FormData();
      param.append("file", file[0]);
      upload(param).then(res => {
        loading.close();
        if (res.code == 1) {
          this.$message.success(res.msg);
          aim.file = res.data;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    ...mapMutations(["SET_STATE_FLAG"]),
    // 导出word
    derived_field() {
      index({
        biao_id: this.biao_id,
        pro_id: this.pro_id
      }).then(res => {
        window.open(res);
      });
    },
    // 添加批注
    setpostil() {
      const loading = this.$loading({
        lock: true,
        text: "上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      edit({
        biao_id: this.biao_id,
        id: this.id,
        pzhu: this.pzhu
      })
        .then(res => {
          loading.close();
        })
        .catch(err => {
          loading.close();
        });
    },
    // 查询表数据
    check_data() {
      var data = { pro_id: this.pro_id, biao_id: this.biao_id };
      read(data).then(res => {
        console.log(res)
        // return;
        this.$emit("hide_table", res.showArr);
        if (res.data.length >= 1) {
          console.log(res.data[0]["content"]);
          var data = res.data[0]["content"];
          Object.keys(data).forEach(key => {
            this[key] = data[key];
          });
          // this.text5 = json.parse(res.data[0]["content"]["text5"]);
          // this.text4 = json.parse(res.data[0]["content"]["text4"]);
          // if (typeof res.data[0]["content"]["text"] != "object") {
          //   this.text = json.parse(res.data[0]["content"]["text"]);
          // }
          this.id = res.data[0].id;
          this.pro_id = res.data[0].pro_id;
          this.pzhu = res.data[0].pzhu;
          this.SET_STATE_FLAG(2); // 修改
        } else {
          this.SET_STATE_FLAG(1); // 添加
        }
        if (this.flag) {
          // 查看
          this.SET_STATE_FLAG(3);
        }
        this.loading = false;
      });
    },
    // 添加一行数据
    add_text(text) {
      var len = 1;
      for (var event in this[text]) {
        len++;
      }
      this.$set(this[text], `text${len}`, {});
    },
    // 修改表数据
    set_data() {
      const loading = this.$loading({
        lock: true,
        text: "上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
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
        text32: this.text32,
        text33: this.text33,
        text34: this.text34,
        text35: this.text35,
        text36: this.text36,
        text37: this.text37,
        text38: this.text38,
        text39: this.text39,
        text40: this.text40, 
        text41: this.text41,
        text42: this.text42,
        text43: this.text43,
        text44: this.text44,
        text45: this.text45,
        text46: this.text46,
        text47: this.text47,
        text48: this.text48,
        text49: this.text49,
        text50: this.text50,
        text51: this.text51,
        text52: this.text52,
        text52: this.text52,
        text53: this.text53,
        text54: this.text54,
        text55: this.text55,
        text56: this.text56,
        // text: this.text,
        biao_id: this.biao_id, // 第几个表
        id: this.id // 项目id
      };
      console.log(data);
      // return;
      // data = json.stringify(data)
      update(data)
        .then(res => {
          loading.close();
          this.$message.success("修改成功!");
        })
        .catch(err => {
          loading.close();
        });
    },
    // 添加表数据
    upload_data() {
      const loading = this.$loading({
        lock: true,
        text: "上传中",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
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
        text32: this.text32,
        text33: this.text33,
        text34: this.text34,
        text35: this.text35,
        text36: this.text36,
        text37: this.text37,
        text38: this.text38,
        text39: this.text39,
        text40: this.text40, 
        text41: this.text41,
        text42: this.text42,
        text43: this.text43,
        text44: this.text44,
        text45: this.text45,
        text46: this.text46,
        text47: this.text47,
        text48: this.text48,
        text49: this.text49,
        text50: this.text50,
        text51: this.text51,
        text52: this.text52,
        text52: this.text52,
        text53: this.text53,
        text54: this.text54,
        text55: this.text55,
        text56: this.text56,
        // text: this.text,
        biao_id: this.biao_id, // 第几个表
        pro_id: this.pro_id, // 项目id
        project_type_id: this.project_type_id // 项目类型id
      };
      console.log(data);
      // data = json.stringify(data)
      create(data)
        .then(res => {
          loading.close();
          this.$message.success("上传成功!");
          this.id = res.id;
          this.SET_STATE_FLAG(2);
          // 第一次添加有pro_id
          if (res.pro_id) {
            this.$router.push({
              query: { id: this.project_type_id, pro_id: res.pro_id }
            });
          }
        })
        .catch(err => {
          loading.close();
        });
      console.log(data);
    }
  }
};
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
