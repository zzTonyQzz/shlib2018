/**
 * vue-axios 封装(报错/权限/跳转/拦截/提示)
 * 基础需求:
 *    统一捕获接口报错 => axiso 内置拦截器
 *    弹窗提示 => 自定义(如: `Element-ui Message` 组件)
 *    报错重定向 => 路由钩子(根据实际需要配置)
 *    基础权限 => 服务端过期时间戳和token, 以及借助路由钩子(根据实际需要决定是否配置)
 *    表单序列化 => npm 模块 qs
 * 
 * 使用:
 * // 服务层, import默认会找该目录下 `index.js` 的文件
 * import Axios from './index';
 * Vue.use(Axios);
 * 
 * Edit by xiaxiansheng@adinnet.cn
 */

import axios from 'axios';
import qs from 'qs';
import ls from '../utils/ls';
import router from '../router';

export const Axios = axios.create({
  baseURL: '/',  // 反向代理配置
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,  // 是否允许携带cookie等
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做的事情
    if (
      config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete'
    ) {
      // 序列化
      config.data = qs.stringify(config.data);
    }
    
    // 若是有权限token, 则给请求头加上token
    if ( localStorage.token ) {
      config.headers.Authorization = localStorage.token;
    }
    return config;
  },
  error => {
    // 错误提示信息, 可以自定义, 如 `Element-ui Message` 弹窗组件
    // `error.data.error.message` 根据实际返回错误数据信息调整
    console.error(error.data.error.message);
  }
);

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    let data = res.data;
    let code = data.code;
    if (code) {
      /**
       * code - 状态码
       *  10001 => 缺少AAT
       *  10002 => 缺少UAT
       *  10010 => AAT无效
       *  10012 => UAT无效
       *  10040 => 令牌过期
       */
      if (code === '10001') {
        ls.removeList(['UAT', 'URT', 'loginUserInfo']);
        return Promise.reject('10001');
      }
      if (code === '10010') {
        ls.removeList(['AAT', 'UAT', 'URT', 'loginUserInfo']);
        location.reload();
        // return Promise.reject('10002');
      }
      if (code === '10040') {
        ls.removeList(['AAT', 'UAT', 'URT', 'loginUserInfo']);
        location.reload();
      }
      if (
        code === '10002' || 
        code === '10012'
      ) {
        // 登录失效清除所有本地存储信息
        ls.removeList(['UAT', 'URT', 'loginUserInfo']);
        return Promise.reject('登录失效, 请重新登录');
      }
      if (code === '13000') {
        // 登录失败，用户名或密码错误
        return Promise.reject('13000');
      }
    }
    return data;
  },
  error => {
    // 返回 response 里的错误信息
    // `error.data.error.message` 根据实际返回错误数据信息调整
    console.log(error);
    let errorInfo =  error.data.error ? error.data.error.message : error.data;
    return Promise.reject(errorInfo);
  }
);

// 对axios的实例重新封装成一个plugin, 方便 Vue.use(xxxx)
export default {
  install (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};

// Vue-axios 中文文档 https://www.kancloud.cn/yunye/axios/234845