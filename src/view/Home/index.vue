<template>
  <div>
    <!-- Your content -->
    Home
    {{ msg }}
  </div>
</template>

<script setup name="HomePage">
  // const { proxy } = getCurrentInstance() // const router = useRouter() // const route = useRoute()
  const msg = ref < string > "";
</script>

<style lang="less" scoped></style>
