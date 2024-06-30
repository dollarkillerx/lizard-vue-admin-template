<script setup lang="ts">
import Menu from "@/components/menu/Menu.vue";
import Header from "@/components/header/Header.vue";

</script>

<template>
<div class="flex h-screen w-screen">
  <div class="h-screen border-r" style="width: 200px">
    <Menu></Menu>
  </div>

  <div class="flex flex-col flex-1">
    <Header></Header>
    <router-view></router-view>
  </div>
</div>
</template>
