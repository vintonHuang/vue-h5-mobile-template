/*
 * @Author: Vinton
 * @Date: 2022-04-03 10:40:37
 * @Description: file content
 */
export interface baseModel<T> {
  code: number;
  data: T;
  info: string;
}
export interface data<T> {
  data: T;
  total?: number;
}
