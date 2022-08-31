// 2. 根据process.env.NODE_ENV来设置
// 开发环境: development
// 生产环境: production
// 测试环境:test

let BASE_URL = "";
const TIME_OUT = 10000;
if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://123.207.32.32:8000/";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://coderwhy.org/prod";
} else {
  BASE_URL = "http://coderwhy.org/test";
}
// ES6 中的变量要直接导出的话,在定义时就要加export,所以这里放到对象里导出,这里其实并不是一个对象
export { BASE_URL, TIME_OUT };
