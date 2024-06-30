<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {ref} from "vue";
import Menu from "@/components/menu/Menu.vue";

const menuActive = ref(false)


</script>

<template>
<div class="bg-gray-100 h-screen w-full flex relative">
<!--  遮罩-->
  <transition>
    <div
        v-if="menuActive"
        class="z-10 fixed inset-0 bg-black bg-opacity-50 duration-100"
        @click="menuActive = false">
    </div>
  </transition>
  <!--  遮罩 end-->

  <!-- menu -->
<!--  https://tailwindcss.com/docs/screens 媒体查询-->
  <div
      :class="[
        'absolute bg-white h-screen duration-100 transform lg:left-0 lg:relative ',
        menuActive ? 'left-0 z-20' : '-l-300',
      ]" :style="['width: 300px']">
    <Menu></Menu>
  </div>
  <!-- menu end-->


  <div class="flex-1 h-screen bg-red-100 w-scree p-2">
    <Button @click="menuActive = !menuActive" class="lg:hidden">Show</Button>
  </div>

</div>
</template>

<style scoped>
.-l-300{
  @media (max-width: 1024px) {
    left: -300px;
    background-color: #181818;
  }
}
</style>