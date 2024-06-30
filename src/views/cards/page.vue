<script setup lang="ts">
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from '@/components/ui/button'


const options = {
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}
const series = [{
  name: 'series-1',
  data: [30, 40, 45, 50, 49, 60, 70, 91]
}]

const series2 = [{
  name: 'series-1',
  data:  [
    {
      x: 'Jan',
      y: [-2, 4]
    },
    {
      x: 'Feb',
      y: [-1, 6]
    },
    {
      x: 'Mar',
      y: [3, 10]
    },
    {
      x: 'Apr',
      y: [8, 16]
    },
  ]
}]
</script>

<template>
<div>
  <div class="m-5 border p-5 rounded-xl">
    <h1 class="font-bold text-3xl mb-4 border-b mb-3">Charts</h1>

    <div class="grid grid-cols-3 gap-4">
      <div class="p-2 border rounded-xl">
        <h1 class="text-xl border-b mb-2">销售数据</h1>
        <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
      </div>
      <div class="p-2 border rounded-xl">
        <h1 class="text-xl border-b mb-2">用户增长</h1>
        <apexchart width="500" type="line" :options="options" :series="series"></apexchart>
      </div>
      <div class="p-2 border rounded-xl">
        <h1 class="text-xl border-b mb-2">前后销售比</h1>
        <apexchart width="500" type="rangeArea" :options="options" :series="series2"></apexchart>
      </div>
    </div>

  </div>

  <div class="m-5 border p-5 rounded-xl">
    <h1 class="font-bold text-3xl mb-4 border-b">Dashboard</h1>

    <div class="grid grid-cols-4 ">
      <Card class="w-[350px] h-[150px]">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>了解用户数量.</CardDescription>
        </CardHeader>
        <CardContent>
          24h内新增2人
        </CardContent>
      </Card>

      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          this is card content
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
          <Button>Deploy</Button>
        </CardFooter>
      </Card>

      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          this is card content
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
          <Button>Deploy</Button>
        </CardFooter>
      </Card>

      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          this is card content
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>