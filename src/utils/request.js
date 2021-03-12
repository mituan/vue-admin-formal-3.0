import axios from 'axios';
import { message } from 'ant-design-vue'

const service = axios.create({
    baseURL: process.env.VUE_APP_FLAG,
    // baseURL: 'https://www.web-jshtml.cn/vue3',
    // baseURL: 'https://some-domain.com/api/',
    timeout: 5000
  });

  // 添加请求拦截器
  service.interceptors.request.use(function (config) {
    console.log("config",config);
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    /**
     * http 请求协议状态，不为200时，是失败，为200是成功
     * 重点知识：
     * 1.约定的属性：resCode（自定义）
     * 2.resCode的什么值代表成功，业务逻辑有问题的情况，代表失败，否则就成功：0
     */
    const data = response.data;
    if(data.resCode === 0 ){
      return Promise.resolve(data);
    } else {
      message.info(data.message);
      return Promise.reject(data);
    }
    // return response;
  }, function (error) {
    /**
     * 根据控制台 http 协议，未通过走这
     */
    // 对响应错误做点什么
    const data = JSON.parse(error.request.response);
    message.info(data.message);
    return Promise.reject(error);
  });


  export default service;