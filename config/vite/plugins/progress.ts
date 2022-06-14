/*
 * @Author: Vinton
 * @Date: 2022-06-14 15:12:34
 * @Description: file content
 */
/**
 * @name ConfigProgressPlugin
 * @description 构建显示进度条
 */

import progress from "vite-plugin-progress";
export const ConfigProgressPlugin = () => {
  return progress();
};
