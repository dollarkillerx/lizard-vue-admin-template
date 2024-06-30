<script setup lang="ts">
import {Button} from "@/components/ui/button";
</script>

<template>
<div class="flex flex-col justify-center items-center h-screen  bg-yellow-50">
  <img class="w-1/3 mb-6" src="@/assets/404.png" alt="404">
  <Button class="text-2xl" @click="$router.push('/')">To Home</Button>
</div>
</template>

<style scoped>
</style>