<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-5 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <li v-for="(image, index) in images" :key="index" class="relative list-none list-image-none" v-click="doClicks ? index + 1 : false">
      <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        <img :src="BASE_URL + image" alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
//@ts-nocheck
const BASE_URL = import.meta.env.BASE_URL || ""
withDefaults(defineProps<{
  images: string[],
  doClicks?: boolean
}>(), {doClicks: false})
</script>
