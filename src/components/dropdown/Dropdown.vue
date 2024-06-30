<script setup lang="ts">
import type {DropdownItem} from "@/components/dropdown/index";
import {ref} from "vue";

const props = defineProps<{
  items: DropdownItem[],
  func: (key: string) => void,
}>();

let defaultString = ref("请选择");
props.items.forEach(function (item) {
  if (item.default) {
    defaultString.value = item.title;
  }
})

const show = ref(false)

const select = (item: DropdownItem) => {
  defaultString.value = item.title
  props.func(item.title)
  show.value = false
}

</script>

<template>
<div class="relative m-1 ">
  <div class="w-full bg-black rounded flex justify-between items-center px-6 " style="height: 35px"  @click="show= !show">
    <div class="text-white ">{{defaultString}}</div>
    <svg class="text-white w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
    </svg>
  </div>

  <div :class="['w-full bg-white absolute rounded-xl flex flex-col  overflow-hidden px-1 pt-1', show?'':'hidden']" style="top: 40px">
    <div v-for="item in props.items" :key="item.title" class="hover:bg-gray-200 hover:rounded w-full text-center  flex  justify-between items-center px-1 my-1" style="height: 35px" @click="select(item)">
      <span >{{item.title}}</span>
      <div>
        <svg :class="['w-5',defaultString!=item.title&&'hidden']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>