import Vue from 'vue';
import axios from 'axios';
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from 'router/index';
import { host } from "./env.js";

// 请求前拦截
axios.interceptors.request.use(
    config => {
      let token = localStorage.getItem("token");
      if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers["XX-Token"] = `${token}`;
        config.headers["XX-Device-Type"] = "wxapp";
      }
      if (config.url.indexOf(host) === -1) {
        config.url = host + config.url;/*拼接完整请求路径*/
      }
      return config;
    },
    err => {
      return Promise.reject(err);
  })
  
  // 请求后拦截
axios.interceptors.response.use(
    response => {
        //当返回信息为未登录或者登录失效的时候重定向为登录页面
        if(response.data.code === 10001){
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            Message.error(response.data.msg);
            router.push({path: '/login'});
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)

// Vue.prototype.$http = axios;
export default async(url ='', data = {}, method = 'GET', FIlE = false) => {
    method = method.toUpperCase();
    var obj = {};

    if (method == 'GET') {
        obj.params = data;
        // let dataStr = '';
        // Object.keys(data).forEach(key => {
        //     dataStr += key + '=' + data[key] + '&';
        // })
        // if (dataStr !== '') {
        //     dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        //     url = url + '?' + dataStr;
        // }
    } else if (method == 'POST') {
        obj.data = data;
    }
    //  else if (method == 'FILE') {
    //     obj.data = data;
    //     axios.create({
    //         withCredentials: true
    //     });
    //     axios.defaults.withCredentials = true
    //     obj.headers = { 'Content-Type': 'multipart/form-data' },
    //     method = 'POST';
    // }

    obj.method = method;
    obj.url = url;

    return new Promise((resolve, reject) => {
        axios(obj).then(response => {
            if (response.status == 200) {
                response = response.data;
                if (FIlE) {
                    resolve(response);
                    return;
                }
                if (response.code == 1) {
                    resolve(response.data);
                } else {
                    Message.error(response.msg);
                    reject();
                }
            } else {
                reject(response);
            }
        }).catch(err => {
            reject(err);
        });
    })

}