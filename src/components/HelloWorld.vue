<!--
 * @Author: Vinton
 * @Date: 2022-03-04 21:17:53
 * @Description: file content
-->
<script setup lang="ts">
  defineProps<{ msg: string }>();
  const getData = () => {
    fetch("/api/login")
      .then((response) => {
        console.log("/api/getUsers", response);
        return response.json();
      })
      .then((data) => {
        console.log("/api/getUsers", data);
      });
  };
</script>

<template>
  <van-button type="warning" @click="getData">警告按钮</van-button>
</template>

<style lang="less" scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }

  .test {
    color: @test-color;
  }
</style>
