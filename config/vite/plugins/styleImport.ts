/*
 * @Author: Vinton
 * @Date: 2022-06-14 15:12:34
 * @Description: file content
 */
import { createStyleImportPlugin, NutuiResolve, VantResolve } from "vite-plugin-style-import";

export const ConfigStyleImport = () => {
  return createStyleImportPlugin({
    resolves: [NutuiResolve(), VantResolve()]
  });
};
