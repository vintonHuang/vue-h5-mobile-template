/*
 * @Author: Vinton
 * @Date: 2022-03-30 10:25:27
 * @Description: file content
 */
import { vizier } from 'dc-vizier-track';
vizier.init({
  // 配置表,以下配置为常用配置以及示例，详细配置表参见附表1

  // 上报地址
  track_url: '/client_event',

  // 系统ID
  system_id: 1006,

  // 网关配置
  gw: {
    // 网关key
    key: ['Tyvvyuuz%88%83%82tgkoyymy%7D%7B%85xmopkcdt%87%8', ''],
    // 网关secret
    secret: [
      'C8',
      'CB',
      '9B',
      '9A',
      '9B',
      '98',
      'C5',
      'C4',
      'C5',
      '9D',
      '9E',
      'C6',
      '97',
      '99m',
      '96',
      '97',
      '99',
      '9Aj',
      '97',
      '60gijjegkh',
      '91',
      '81',
      '',
    ],
  },

  // 上报数据实现形式  post, get, img, script, 默认post可不设置
  track_type: 'post',

  // 单页应用配置，默认单页且history，可不设置
  SPA: {
    is: true,
    mode: 'history',
  },

  // PV指标自动触发配置,默认开启，可不设置
  pageview: true,

  // 需要携带的通用参数,每次提交都会带上的参数（json第一级，和deavice_id等同级）
  // 提供set_base_data（prop，to）方法，可以在任意时候增加baseData，
  // 提供set_base_data支持prop为对象，或prop为key，to为val
  // 目前活动页都是单页可通过baseData设置page_name(页面名称，默认title)/page_seq(页面编号)
  baseData: {},
});
window.vizier = vizier.instance;
