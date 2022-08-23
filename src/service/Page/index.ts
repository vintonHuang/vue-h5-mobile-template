/*
 * @Author: Vinton
 * @Date: 2022-08-23 15:41:49
 * @Description: file content
 */
import { request } from "@/utils/request";
import { baseModel } from "@/interfaces/common";

export default class PageService {
  static async testApi(params: any) {
    const res = await request<baseModel<any>>("", params, "post");
    return res.data;
  }
}
