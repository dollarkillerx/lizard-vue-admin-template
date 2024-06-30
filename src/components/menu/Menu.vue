<script setup lang="ts">
import type {MenuInterface} from './index'
import type {DropdownItem} from  '@/components/dropdown/index'
import Dropdown from '../dropdown/Dropdown.vue'
import {ref} from "vue";
import router from "@/router";

const Menus: MenuInterface[] = [
  {
    title: "统计",
    children: [
      {
        title: "默认统计",
        path: "/dashboard/dashboard"
      },
      {
        title: "From表单",
        path: "/dashboard/from"
      },
      {
        title: "From表单2",
        path: "/dashboard/from2"
      },
      {
        title: "Toast",
        path: "/dashboard/toast"
      },
      {
        title: "Sonner",
        path: "/dashboard/toast"
      },
      {
        title: "Sheet",
        path: "/dashboard/toast"
      }
    ]
  }, {
    title: "Toast",
    children: [
      {
        title: "Toast",
        path: "/dashboard/toast"
      },
      {
        title: "Sonner",
        path: "/dashboard/toast"
      },
      {
        title: "Sheet",
        path: "/dashboard/toast"
      }
    ]
  }
];

const action = ref(Menus[0].children!);

const handleSelect = (key: string) => {
  Menus.forEach((item) => {
    if (item.title == key) {
      action.value = item.children!;
    }
  });
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
  <div class="h-full w-full ">
    <div class="p-2 border-b" style="height: 55px">
    <Dropdown :items="MenusToOptions()" :func="handleSelect"></Dropdown>
    </div>
    <div class="p-2">
      <div v-for="item in action" :id="item.title" class="p-2 bg-white mb-1 rounded hover:bg-gray-200 text-2xl">
        <RouterLink :to="item.path!">
          {{item.title}}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>