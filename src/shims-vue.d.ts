// /* eslint-disable */
// // https://juejin.cn/post/6904831097533071368
// // https://blog.csdn.net/lx1996082566/article/details/121595946
// // https://blog.csdn.net/q95548854/article/details/121899607
// declare module "*.vue" {
//   import type { DefineComponent } from "vue";
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }
// // declare module "*.vue" {
// //   import Vue from "vue";
// //   export default Vue;
// // }
declare module "*.vue" {
  import { Component } from "vue";
  const component: Component;
  export default component;
}
// // 解决volar插件 $store报错
// // https://blog.csdn.net/qq_31755699/article/details/124213551
// /* eslint-disable */
// import { Store } from "@/store"; // path to store file

// declare module "@vue/runtime-core" {
//   interface ComponentCustomProperties {
//     $store: Store;
//   }
// }
// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }

declare module "store";
declare const VUE_APP_BASE_NAME: string;
declare const VUE_APP_BASE_URL: string;
