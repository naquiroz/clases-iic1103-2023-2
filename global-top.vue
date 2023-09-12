<template>
  <a v-if="showURL" :href="URL" class="absolute top-0 left-0 dark:text-zinc-500 text-zinc-300 p-2 text-xs"> {{"<-  Volver a todas las clases"}}</a>
</template>

<script setup lang="ts">
import { inject } from '@vercel/analytics';
// import some helper that is exposed by your current framework to determine the right mode manually

inject();
const URL = window.location.origin
const showURL = window.location.pathname.includes("clase_")
</script>
