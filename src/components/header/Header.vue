<script setup lang="ts">
import {ref} from "vue";
import {JWT} from "@/utils/jwt";
import router from "@/router";
const header = ref(false)

const Logout = () => {
  JWT.removeToken()
  router.push("/login")
}
</script>

<template>
<div class="w-full border-b flex justify-end items-center" style="height: 55px">
  <div class="relative">
    <div class="rounded-3xl overflow-auto mr-4" @click="header = !header">
      <img src="@/assets/logo.png" alt="" class="w-10">
    </div>

    <div :class="['border absolute rounded-xl bg-white p-2 flex flex-col justify-center items-center', header ? 'block' : 'hidden']"   style="top: 45px; width: 100px; right: 5px;">
<!--      <div class="p-2 hover:bg-gray-100 w-full rounded">Setting</div>-->
      <div class="p-2 hover:bg-gray-100 w-full rounded" @click="Logout">Logout</div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>