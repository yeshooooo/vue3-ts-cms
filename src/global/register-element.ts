import { App } from "vue";
// 导出注册某些东西的函数，比如element
// 全局引用
// import ElementPlus from "element-plus";
// // import "element-plus/lib/theme-chalk/index.css";
// // https://blog.csdn.net/Stars_in_rain/article/details/122414201
// import "element-plus/theme-chalk/index.css";

// 局部引用方式二：
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElAlert,
  ElAside,
} from "element-plus";

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElRadio,
  ElInput,
  ElAlert,
  ElAside,
];

export default function (app: App): void {
  // ele局部引用方式二：\rules\no-explicit-any
  // 原理就是每次用到ElButton的时候进行全局注册，这样就可以用了，不用到处导入了，
  // app.component(ElButton.name, ElButton);
  // 多个组件的话这样
  for (const component of components) {
    app.component(component.name, component);
  }
}
