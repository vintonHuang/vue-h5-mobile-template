/*
 * @Author: Vinton
 * @Date: 2022-03-04 21:17:53
 * @Description: file content
 */
import { createApp } from "vue";
import Pinia from "/@/store/index";
import App from "./App.vue";
import router from "/@/router/index";
import "./utils/rem";
import "./utils/vizier";
import i18n from "./i18n";
import "/@/styles/index.less";
import VConsole from "vconsole";
if (import.meta.env.VITE_APP_ENV !== "PRO") {
  new VConsole();
}
createApp(App).use(router).use(i18n).use(Pinia).mount("#app");
