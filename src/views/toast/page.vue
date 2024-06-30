<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { toast as toast2 } from 'vue-sonner'
import { useToast } from '@/components/ui/toast/use-toast'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'


const { toast } = useToast()
</script>

<template>
  <div class="m-2 p-2 border rounded-xl flex">
    <div class="mx-2">
      <Button
          variant="outline" @click="() => {
      toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
    }"
      >
        Toast
      </Button>
    </div>

    <div class="mx-2">
      <Button
          variant="outline" @click="() => {
      toast2('Event has been created', {
        description: 'Sunday, December 03, 2023 at 9:00 AM',
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      })
    }"
      >
        Add to calendar
      </Button>
    </div>

    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline">
          Open Sheet
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
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
        <SheetFooter>
          <SheetClose as-child>
            <Button type="submit">
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </div>
</template>