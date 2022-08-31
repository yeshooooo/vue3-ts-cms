import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

// axios 本质上是一个axios的实例
//  在有可能有两个请求的情况下,可以有不同的axios实例
// axios.create() 来创建
class HYRequest {
  // 保存axios实例
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res);
    });
  }
}

export default HYRequest;
