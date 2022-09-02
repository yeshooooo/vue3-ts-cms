import axios from "axios";
import type { AxiosInstance } from "axios";
import type { HYRequestInterceptors, HYRequestConfig } from "./type";

// axios 本质上是一个axios的实例
//  在有可能有两个请求的情况下,可以有不同的axios实例
// axios.create() 来创建
class HYRequest {
  // 保存axios实例
  instance: AxiosInstance;

  // 拦截器 从config中取出的拦截器是对应的实例的拦截器
  interceptors?: HYRequestInterceptors;
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器:请求拦截成功");

        return config;
      },
      (err) => {
        console.log("所有的实例都有的拦截器:请求失败拦截");

        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实例都有的拦截器:响应拦截成功");

        return res;
      },
      (err) => {
        console.log("所有的实例都有的拦截器:相应拦截失败");

        return err;
      }
    );
  }

  request(config: HYRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res);
      }
      console.log(res);
    });
  }
}

export default HYRequest;
