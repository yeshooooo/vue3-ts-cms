import axios from "axios";

// 包本身导入的就是axios实例
// 这里通过代码提示可以确定res是AxiosResponse<any,any> 类型,这里不让乱用any,res的类型可省略

// 1. 模拟get请求
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res.data);
});

// axios.post("url")

// // 2. get请求,并且传入参数
// // 使用http://httpbin.org 模拟请求
// axios
//   .get("http://httpbin.org/get", {
//     params: {
//       name: "yeshooo",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
// // 3. post请求
// // 一般post请求数据会放入data里面
// axios
//   .post("http://httpbin.org/post", {
//     data: {
//       methiod: "post",
//       name: "yeshooo",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
// promise 本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve("1234");
// }).then((res) => {
//   console.log(res.length);
// });

// 4. axios 的配置选项
// 4.1 全局配置
axios.defaults.baseURL = "http://httpbin.org/";
axios.defaults.timeout = 10000;
// axios.defaults.headers = {};

// // 2. get请求,并且传入参数
// // 使用http://httpbin.org 模拟请求
// axios
//   .get("/get", {
//     params: {
//       name: "yeshooo",
//       age: 18,
//     },
//     // 4.2 每个请求的局部配置
//     timeout: 5000,
//     headers: {},
//   })
//   .then((res) => {
//     console.log(res.data);
//   });
// // 3. post请求
// // 一般post请求数据会放入data里面
// axios
//   .post("/post", {
//     data: {
//       methiod: "post",
//       name: "yeshooo",
//       age: 18,
//     },
//   })
//   .then((res) => {
//     console.log(res.data);
//   });

// 5. axios.all
// 上面的请求谁先回来是不确定的
// 多个请求,一起返回,用axios.all,内部用的就是Promise.all

axios
  .all([
    axios.get("/get", { params: { method: "get", name: "why", age: "18" } }),
    axios.post("/post", { data: { method: "post", name: "why", age: 18 } }),
  ])
  .then((res) => {
    console.log(res);
    console.log(res[0].data);
    console.log(res[1].data);
  });

// 6. axios 拦截器
// 1. 例如在发送请求之前,每个请求都需要携带token,把token放到header里面,拦截掉这个请求
// 2. 请求时间比较长,在界面上显示loading圆圈提示
// 3. 拦截请求结果,直接拿到返回的data
// 拦截工作本质上是一个函数

// 拦截请求
// 两个函数参数,fn1表示请求发送成功的时候会执行的函数,fn2表示请求发送失败的时候执行的函数(很少用)
// 发送成功的时候,会把配置给函数传进去
axios.interceptors.request.use(
  (config) => {
    // 拦截转发
    // config.url = "/post";
    // 想做的一些操作
    // 如
    // 1.给请求添加token
    // 2. isLoading动画
    console.log("请求成功的拦截");

    return config;
  },
  (err) => {
    console.log("请求发送错误");
    return err;
  }
);

// 拦截响应
// fn1: 数据响应成功,服务器正常的返回了数据 20x
// fn2
axios.interceptors.response.use(
  (res) => {
    //
    console.log("响应成功的拦截");

    // 如: return res.data;
    return res;
  },
  (err) => {
    console.log("服务器响应失败");

    return err;
  }
);
