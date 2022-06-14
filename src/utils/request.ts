/*
 * @Author: Vinton
 * @Date: 2022-03-11 15:22:17
 * @Description: file content
 */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { gwInitA, gwInitB, gwRequest } from "vizier-gateway";
import { gateway, passErrorCode } from "@/config";
import Storage from "./storage";
import { baseModel } from "@/interfaces/common";
// 设置接口超时时间
axios.defaults.timeout = 60000;
axios.defaults.baseURL = import.meta.env.VITE_RESOURSE_BASW_URL === "PRO" ? `${process.env.BASE_URL}api/` : "/api";
// 网关配置
gwInitA(gateway.key);
gwInitB(gateway.secret);
//http request 拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const accessToken = Storage.get("token");
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return gwRequest(config); // 网关加密
  },
  (error) => {
    return Promise.reject(error);
  },
);

//http response 拦截器
axios.interceptors.response.use(
  (response: AxiosResponse<baseModel<any>>): any => {
    const { code } = response.data;
    if (passErrorCode.includes(code)) {
      if (code === 202) {
        // 如果token过期了，需要清楚浏览器缓存的token，重新去做请求
        Storage.clear();
      }
      // Toast({
      //   // @ts-ignore：嵌套过深
      //   value: i18n.global.t(String(code)),
      //   type: "warning",
      // });
      return Promise.reject(response.data);
    }
    return Promise.resolve(response);
  },
  (error) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围,统一提示请求异常
      // Toast({
      //   value: i18n.global.t("212"),
      //   type: "warning",
      // });
      return Promise.reject(response.data);
    }
    // ElMessage.warning("网络连接异常,请稍后再试!");
  },
);

// 封装 GET POST 请求并导出
export function request<T>(url = "", params = {}, type = "POST"): Promise<AxiosResponse<T>> {
  //设置 url params type 的默认值
  return new Promise((resolve, reject) => {
    let promise;
    if (type.toUpperCase() === "GET") {
      promise = axios({
        url,
        params,
      });
    } else if (type.toUpperCase() === "POST") {
      promise = axios({
        method: "POST",
        url,
        data: params,
      });
    }
    //处理返回
    promise
      ?.then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
