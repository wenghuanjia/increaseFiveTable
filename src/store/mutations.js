import {
    RECORD_USERINFO,
    OUT_LOGIN,
    INIT_USERINFO,
    SET_STATE_FLAG,
    SET_AUDIT_FLAG
} from "./mutation-types"

import {setStore, getStore, removeStore} from "common/common"

export default {
    // 记录登录信息
    [RECORD_USERINFO] (state, data) {
        setStore('token', data.token);
        setStore('user', data.user);
        state.userInfo = data.user;
        state.login = true;
    },
    // 退出登录
    [OUT_LOGIN] (state) {
        removeStore('token');
        removeStore('user');
        state.userInfo = null;
        state.login = false;
    },
    // 页面刷新从本地缓存获取用户信息
    [INIT_USERINFO] (state) {
        let initUserinfo = getStore('user');
        if (initUserinfo) {
            state.userInfo = JSON.parse(initUserinfo);
            state.login = true;
        }
    },
    // 切换表状态
    [SET_STATE_FLAG] (state, code) {
        // 1 -> 添加状态, 2 -> 修改状态, 3 -> 查看状态, 4 -> 修改批注
        state.state_flag = code;
    },
    // 切换表状态
    [SET_AUDIT_FLAG] (state, code) {
        // 1 -> 不显示批注, 2 -> 显示批注, 3 -> 显示并可以修改批注
        state.audit_flag = code;
    }
}