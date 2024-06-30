<script setup lang="ts">

</script>

<template>
  <div class="p-2 h-full w-full bg-white">
    <div class="font-500 text-2xl border-b-2">
    Lizard Admin
    </div>
    <Select>
      <SelectTrigger id="framework">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectItem value="nuxt">
          Nuxt
        </SelectItem>
        <SelectItem value="next">
          Next.js
        </SelectItem>
        <SelectItem value="sveltekit">
          SvelteKit
        </SelectItem>
        <SelectItem value="astro">
          Astro
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<style scoped>

</style>