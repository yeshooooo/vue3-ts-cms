import { createRouter, createWebHashHistory } from "vue-router";

// 这里增加一个type 是为了表示他不像上面俩一样是个函数,是个类型,这个type加不加都行
import type { RouteRecordRaw } from "vue-router";

// 默认vue-router里有每个routes的类型
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    // 懒加载
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
