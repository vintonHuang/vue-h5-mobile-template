/*
 * @Author: Vinton
 * @Date: 2022-03-04 21:17:53
 * @Description: file content
 */
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from "vite";
import path, { resolve } from "path";
import postCssPxToRem from "postcss-pxtorem";
import { createVitePlugins } from "./config/vite/plugins";
import proxy from "./config/vite/proxy";
import { VITE_PORT } from "./config/constant";
// https://vitejs.dev/config/
const pathResolve = (dir: string) => {
  return resolve(process.cwd(), ".", dir);
};

export default ({ mode, command }: ConfigEnv): UserConfigExport => {
  const isProduction = command === "build";
  const env = loadEnv(mode, process.cwd());
  console.log("=====>是否是生产环境====>", isProduction);
  return defineConfig({
    base: env.VITE_APP_BASE_URL,
    plugins: createVitePlugins(isProduction),
    resolve: {
      alias: {
        "@": pathResolve("src") + "/",
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
        "#": pathResolve("types") + "/"
      }
    },
    server: {
      host: "0.0.0.0",
      port: VITE_PORT,
      open: true,
      https: false,
      proxy: proxy
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            hack: `true; @import (reference) "${path.resolve(__dirname, "src/styles/main.less")}";` // src/css/common.less 是你需要全局变量 （你定义的定义的方法 和 变量等）
          },
          javascriptEnabled: true
        }
      },

      postcss: {
        plugins: [
          postCssPxToRem({
            rootValue({ file }) {
              return file.indexOf("vant") !== -1 ? 37.5 : 75;
            },
            propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
            // exclude: ["node_modules"],
            selectorBlackList: [".noUseToRem-"]
          })
        ]
      }
    }
  });
};
