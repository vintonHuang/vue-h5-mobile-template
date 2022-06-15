/*
 * @Author: Vinton
 * @Date: 2022-06-14 15:12:34
 * @Description: file content
 */
/**
 * @name ConfigPagesPlugin
 * @description 动态生成路由
 */
import Pages from "vite-plugin-pages";
export const ConfigPagesPlugin = () => {
  return Pages({
    pagesDir: [{ dir: "src/view", baseRoute: "" }],
    extensions: ["vue", "md"],
    exclude: ["**/components/*.vue"],
    nuxtStyle: true
  });
};
