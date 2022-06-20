<!--
 * @Author: Vinton
 * @Date: 2022-03-04 21:17:53
 * @Description: file content
-->
<script setup lang="ts">
  import { useRouter } from "vue-router";
  const router = useRouter();
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
  console.log("======>", import.meta.env.VITE_APP_WEB_URL);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view />
  <van-button type="primary" @click="router.push({ path: '/Home' })">To Home</van-button>
  <van-button type="primary" @click="router.push({ path: '/Team' })">To Team</van-button>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
