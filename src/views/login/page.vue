<script setup lang="ts">
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {ref} from "vue";
import {JWT} from "@/utils/jwt";
import router from "@/router";

const Login = () => {
  // 正常情况 发生网络请求然后 跳转页面
  console.log('login')
  showSuccessAlert()
  // showErrorAlert()

  JWT.setToken('123456')
  router.push("/dashboard")
}

const isAlertVisible = ref(false);
const isAlertVisibleError = ref(false);

const showSuccessAlert = () => {
  isAlertVisible.value = true;
  setTimeout(() => {
    isAlertVisible.value = false;
  }, 2000);
};

const showErrorAlert = () => {
  isAlertVisibleError.value = true;
  setTimeout(() => {
    isAlertVisibleError.value = false;
  }, 2000);
};
</script>

<template>
  <div class="flex h-screen w-screen ">
    <div class="flex-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-r-3xl relative">
      <div class="flex items-center">
        <svg class="w-20 mx-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        <span class="text-white text-3xl">Lizard Admin</span>
      </div>

      <div class="text-white text-2xl p-4 absolute bottom-0">
        砥砺磨锋刃，工欲善其事。
        <br>
        笃学修己志，知识积如山。
        <br>
        技艺精湛巧，事半功倍然。
      </div>
    </div>



<!--    下面是登录from-->

    <div class="flex-1">
      <div class="flex flex-col items-center justify-center h-screen p-16">
        <div class="font-bold text-3xl mb-4">欢迎回家</div>
        <Input placeholder="Username"  class="mb-4"></Input>
        <Input placeholder="Password"  class="mb-4"></Input>
        <Button class="w-full text-xl" @click="Login">Login</Button>
      </div>
    </div>

    <!--    下面是登录from 结束-->



<!--    登录alert-->

    <Alert class="h-1/12 w-5/12 absolute left-1/3 top-1/4 border border-green-300" v-if="isAlertVisible"  type="success"  :duration="1000">
      <AlertTitle class="text-green-400">Success</AlertTitle>
      <AlertDescription>
        登录成功
      </AlertDescription>
    </Alert>

    <Alert class="h-1/12 w-5/12 absolute left-1/3 top-1/4 border border-red-300" v-if="isAlertVisibleError"  type="error"  :duration="1000">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        登录失败错误信息: xxxxx
      </AlertDescription>
    </Alert>

    <!--    登录alert end-->

  </div>
</template>

<style scoped>

</style>