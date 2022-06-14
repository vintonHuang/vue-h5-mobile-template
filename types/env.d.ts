/*
 * @Author: Vinton
 * @Date: 2022-06-14 21:51:08
 * @Description: file content
 */
/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "virtual:*" {
  const result: any;
  export default result;
}
