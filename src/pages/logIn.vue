<template>
    <div class="login">
        <div class="from">
            <div class="container">
                <el-row :gutter="20">
                <el-col :span="8" :offset="8">
                    <el-row>
                        <h1 class="h1">项目管理系统</h1>
                    </el-row>
                    <el-row>
                        <el-input type="text" placeholder="请输入账号" v-model="account"></el-input>
                    </el-row>
                    <el-row>
                        <el-input type="password" placeholder="请输入密码" v-model="pass"></el-input>
                    </el-row>
                    <el-row>
                    <el-button type="primary" style="display: block;width: 100%;" @keyup.enter="submitForm()" @click="submitForm()">登录</el-button>
                    </el-row>
                    <el-row style="text-align: center;">
                        <!-- <span class="tourist" @click="submit()">游客登录</span> -->
                        <!-- <el-button style="width: 100%;" @keyup.enter="submitForm()" @click="submitForm()">游客登录</el-button> -->
                    </el-row>
                </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import { login, reqSendCode } from "service/getData.js" 
import { setStore, getStore } from "common/common.js"
import { mapMutations } from "vuex";

export default {
    data() {
      return {
        account:'', // 账号
        pass: '', // 密码
      };
    },
    created () {
        var account = getStore('account');
        this.account = account ? account: '';
    },
    methods: {
        ...mapMutations([
            'RECORD_USERINFO'
        ]),
        // 登录
        submitForm() {
            var self = this;
            login({"username": this.account,"password": this.pass,"device_type":"wxapp"}).then(res => {
                this.$message({
                    message: '登录成功!',
                    type: 'success'
                });
                setStore('account', this.account);
                this.RECORD_USERINFO(res);
                this.$router.push({path: '/index'});
            })
        },
        // 游客登录
        submit() {
            var self = this;
            login({"username": '游客',"password": 123456,"device_type":"wxapp"}).then(res => {
                console.log(res)
                this.$message({
                    message: '登录成功!',
                    type: 'success'
                });
                setStore('account', this.account);
                this.RECORD_USERINFO(res);
                this.$router.push({path: '/index'});
            })
        }
    }
}
</script>

<style scoped lang="less">
.login {
    min-width: 1200px;
    overflow: hidden;
    .from {
      margin-top: 180px;
      .container {
        width: 1200px;
        margin: 0 auto;
        .h1 {text-align: center}
        .el-row {
          margin-bottom: 20px;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .tourist {
            cursor: pointer;
        }
      }
    }
  }
</style>