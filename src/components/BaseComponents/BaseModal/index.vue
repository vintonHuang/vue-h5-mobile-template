<!--
 * @Author: Vinton
 * @Date: 2022-04-06 22:48:06
 * @Description: file content
-->
<template>
  <van-popup v-model:show="showModal" teleport="body">
    <div v-if="closeable" :class="['close-btn', `${size}_bg`]" :style="{ top: topPos }" @click="$emit('closeModal')"></div>
    <slot name="content"> </slot>
  </van-popup>
</template>
<script lang="ts">
  export default {
    name: "BaseModal"
  };
</script>
<script setup lang="ts">
  import { useVModel } from "@/hooks/index";
  import { computed } from "vue";
  const props = withDefaults(
    defineProps<{
      show: boolean;
      size?: string;
      closeable?: boolean;
      top?: number;
    }>(),
    {
      show: false,
      size: "small",
      top: -40,
      closeable: false
    }
  );
  const emit = defineEmits(["update:show", "closeModal"]);
  const showModal = useVModel(props, "show", emit);
  const topPos = computed(() => {
    return `${props.top / 75}rem`;
  });
</script>
<style scoped lang="less">
  @import "@/styles/mixin.less";

  .close-btn {
    position: absolute;
    right: 0px;
  }

  .big_bg {
    .main-bg(55px,55px,"@/assets/baseModal/close-big.png");
  }

  .small_bg {
    .main-bg(49px,50px,"@/assets/baseModal/close-small.png");
  }
</style>
