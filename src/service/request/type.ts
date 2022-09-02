import type { AxiosRequestConfig, AxiosResponse } from "axios";

//  拦截器
export interface HYRequestInterceptors {
  // 起名改为hooks 表示回调
  // export interface HYRequestHooks {
  // 设置成可选的, 因为不是每个请求都需要拦截器
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors;
}
