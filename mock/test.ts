/*
 * @Author: Vinton
 * @Date: 2022-06-09 16:50:12
 * @Description: file content
 */
import { MockMethod } from "vite-plugin-mock";
// 仅做示例: 通过GET\post请求返回一个数据
export default [
  {
    url: "/api/getUsers",
    method: "get",
    response: () => {
      return {
        code: 0,
        message: "ok",
        data: ["tom", "jerry"],
      };
    },
  },
] as MockMethod[];
