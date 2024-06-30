<script setup lang="ts">
import type {MenuInterface} from './index'
import type {DropdownItem} from  '@/components/dropdown/index'
import Dropdown from '../dropdown/Dropdown.vue'
import {ref, reactive} from "vue";

const Menus: MenuInterface[] = [
  {
    title: "统计",
    children: [
      {
        title: "默认统计",
        path: "/"
      },
      {
        title: "From表单",
        path: "/from"
      }
    ]
  }, {
    title: "Toast",
    children: [
      {
        title: "Toast",
        path: "/toast"
      },
      {
        title: "Sonner",
        path: "/sonner"
      },
      {
        title: "Sheet",
        path: "/sheet"
      }
    ]
  }
];

const handleSelect = (key: string) => {
  console.log(key)
}

const MenusToOptions = (): DropdownItem[] => {
  let resp: DropdownItem[] = [];
  Menus.forEach((item,index) => {
    if (index == 0) {
      resp.push({
        title: item.title,
        default: true,
      });
    }else{
      resp.push({
        title: item.title,
      });
    }
  });
  return resp;
}
</script>

<template>
  <div class="h-full w-full bg-blue-300">
    <div>
    <Dropdown :items="MenusToOptions()" :func="handleSelect"></Dropdown>
    </div>
  </div>
</template>

<style scoped>

</style>