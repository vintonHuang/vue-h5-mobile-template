/*
 * @Author: Vinton
 * @Date: 2022-03-04 22:17:32
 * @Description: file content
 */

import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";

routes.push({
  path: "/",
  redirect: "/Login"
});
//导入生成的路由数据
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL as string),
  routes
});

export default router;
