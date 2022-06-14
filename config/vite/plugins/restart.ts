/*
 * @Author: Vinton
 * @Date: 2022-06-14 15:12:34
 * @Description: file content
 */
/**
 * @name ConfigRestartPlugin
 * @description 监听配置文件修改自动重启Vite
 */
import ViteRestart from "vite-plugin-restart";
export const ConfigRestartPlugin = () => {
  return ViteRestart({
    restart: ["*.config.[jt]s", "**/config/*.[jt]s"],
  });
};
