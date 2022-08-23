/*
 * @Author: Vinton
 * @Date: 2022-07-15 16:06:01
 * @Description: file content
 */
import { request } from "@/utils/request";
import { baseModel } from "@/interfaces/common";

export default class UserService {
  static async testApi(params: any) {
    const res = await request<baseModel<any>>("", params, "post");
    return res.data;
  }
}
