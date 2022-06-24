import { request } from "/@/utils/request";
import { baseModel } from "/@/interfaces/common";

export default class UserService {
  static async testApi(params: any) {
    const res = await request<baseModel<any>>("", params, "post");
    return res.data;
  }
}
