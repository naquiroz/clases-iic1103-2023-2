<template>
  <a :href="BASE_URL" class="absolute top-0 left-0 dark:text-zinc-500 text-zinc-300 p-2 text-xs"> {{"<--"}} Volver a todas las clases</a>
</template>

<script setup lang="ts">
const BASE_URL = import.meta.env.BASE_URL || ""
</script>
