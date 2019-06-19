import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userInfo: null, // 用户信息
    login: false, // 是否登录
    token: '', // token
    state_flag: 1, // 1 -> 添加状态, 2 -> 修改状态, 3 -> 查看状态
    audit_flag: 1 // 1 -> 不显示批注, 2 -> 显示批注, 3 -> 显示并可以修改批注 
}

export default new Vuex.Store({
    state,
    mutations
})