<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {ref} from "vue";

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
]

const  range =  ref<[number, number]>([1183135260000, Date.now()])

const dialogVisible = ref(false);
</script>

<template>
<div>
  <div class="m-5 p-5 border rounded-xl flex items-center">
    <div class="flex w-full max-w-sm items-center gap-1.5 mx-2">
      <Input id="email" type="email" placeholder="Email" />
      <Button type="submit">
        Search
      </Button>
    </div>

    <div class="mx-2">
      <Select >
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">
              Apple
            </SelectItem>
            <SelectItem value="banana">
              Banana
            </SelectItem>
            <SelectItem value="blueberry">
              Blueberry
            </SelectItem>
            <SelectItem value="grapes">
              Grapes
            </SelectItem>
            <SelectItem value="pineapple">
              Pineapple
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="mx-2">
      <n-date-picker v-model:value="range" type="daterange" clearable h="55px"/>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center m-4 p-4 border rounded-xl">
    <div class="w-full mb-2">
      <Table>
        <!--      <TableCaption>A list of your recent invoices.</TableCaption>-->
        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]">
              Invoice
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead class="text-right">
              Amount
            </TableHead>
            <TableHead class="text-center">
              Status
            </TableHead>
            <TableHead class="text-right">
              Edit
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="invoice in invoices" :key="invoice.invoice">
            <TableCell class="font-medium">
              {{ invoice.invoice }}
            </TableCell>
            <TableCell>{{ invoice.paymentStatus }}</TableCell>
            <TableCell>{{ invoice.paymentMethod }}</TableCell>
            <TableCell class="text-right">
              {{ invoice.totalAmount }}
            </TableCell>
            <TableCell >
              <div class="flex justify-center items-center">
                <Switch id="airplane-mode" class="mr-1" />
                <Label for="airplane-mode">Airplane Mode</Label>
              </div>
            </TableCell>
            <TableCell class="text-right">
              <Button @click="dialogVisible = true">Edit</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
    <div>
      <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="2">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst />
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext />
          <PaginationLast />
        </PaginationList>
      </Pagination>
    </div>
  </div>

  <Dialog v-model:open="dialogVisible">
    <DialogTrigger as-child>
      <Button variant="outline">
        Edit Profile
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="username" class="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" class="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>
</template>

<style scoped>

</style>