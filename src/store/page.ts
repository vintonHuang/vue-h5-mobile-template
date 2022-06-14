/*
 * @Author: Vinton
 * @Date: 2022-03-04 22:30:34
 * @Description: file content
 */
import { ref } from 'vue';
import { defineStore } from 'pinia';

// 使用setup模式定义
export const useCounterStoreForSetup = defineStore('counterForSetup', () => {
  const count = ref<number>(1);
  function increment() {
    count.value++;
  }

  function doubleCount() {
    return count.value * 2;
  }

  return { count, increment, doubleCount };
});
