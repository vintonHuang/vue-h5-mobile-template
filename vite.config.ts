/*
 * @Author: Vinton
 * @Date: 2022-03-04 21:17:53
 * @Description: file content
 */
import { defineConfig, loadEnv, UserConfigExport, ConfigEnv } from "vite";
import path, { resolve } from "path";
import postCssPxToRem from "postcss-pxtorem";
import { createVitePlugins } from "./config/vite/plugins";
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
      alias: [
        {
          find: "vue-i18n",
          replacement: "vue-i18n/dist/vue-i18n.cjs.js"
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve("src") + "/"
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/"
        }
      ]
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      open: true,
      https: false,
      proxy: {}
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
