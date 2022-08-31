// 第二个App是类型，但是没有必要，因为类型推导可以推出来
// import { createApp, App } from "vue";
import { createApp } from "vue";
import { globalRegister } from "./global";
// import "./service/axios_demo";
import hyRequset from "./service";

import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App);

// app.use 传入的是一个对象的话，默认会去执行这个对象里的install，app.use也可以传入一个函数
// globalRegister(app);
// 传入函数的话也可以这么写，他会默认去执行这个函数，这个函数会自动传入app
app.use(globalRegister);
app.use(router);
app.use(store);
// app.use(ElementPlus);
app.mount("#app");

console.log(process.env.VUE_APP_BASE_URL);
console.log(process.env.VUE_APP_BASE_NAME);

hyRequset.request({
  url: "/home/multidata",
  method: "GET",
});
