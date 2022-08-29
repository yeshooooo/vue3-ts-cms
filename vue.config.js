const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  // 1. 配置方式一: CLI提供的属性
  outputDir: "./build",
  // 修改打包后加载资源的路径，开发的时候测试用的，部署到服务器的时候不要用，当然这里可以判断
  // publicPath: "./",
  // // // 2. 配置方式二: 和webpack属性完全一致,最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: "@/components",
      },
    },
    plugins: [
      require("unplugin-element-plus/webpack")({
        // options
      }),
    ],
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components",
  //   };
  // },
  lintOnSave: false,
  // 2. 配置方式三:链式编程
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("components", "@/components");
  // },
});
