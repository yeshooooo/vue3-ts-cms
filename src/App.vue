<template>
  <div class="app">
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-input></el-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// 局部引用
// import { ElButton } from "element-plus";
// https://element-plus.gitee.io/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5
// 样式引入方式发生了改变，变为用插件形式了,会自动引入样式的
// https://github.com/element-plus/unplugin-element-plus/blob/main/README.zh-CN.md
// import "element-plus/lib/theme-chalk/button.css";

export default defineComponent({
  name: "App",
  // components: {
  //   ElButton,
  // },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
