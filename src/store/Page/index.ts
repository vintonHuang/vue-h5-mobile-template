import { defineStore } from "pinia";
import { ref } from "vue";

export const usePageStore = defineStore("pageStore", () => {
  const count = ref<number>(1);
  function increment() {
    count.value++;
  }

  function doubleCount() {
    return count.value * 2;
  }

  return { count, increment, doubleCount };
});
