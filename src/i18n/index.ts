/*
 * @Author: Vinton
 * @Date: 2022-05-16 11:25:09
 * @Description: file content
 */
// src/i18n/index.ts
import { createI18n } from "vue-i18n";
import messages from "./getMessage";
const i18n = createI18n({
  legacy: false, // 这里需要记录一下
  locale: "en", // set locale
  messages
});

export default i18n;
