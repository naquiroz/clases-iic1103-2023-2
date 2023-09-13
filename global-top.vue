<template>
  <a v-if="showURL" :href="URL" class="absolute top-0 left-0 dark:text-zinc-500 text-zinc-300 p-2 text-xs"> {{"<-  Volver a todas las clases"}}</a>
</template>

<script setup lang="ts">
import { inject } from '@vercel/analytics';

// @ts-ignore
const isProd = !__DEV__

inject({
      mode: isProd ? 'production' : 'development',
      debug: !isProd,
    });

const URL = window.location.origin
const showURL = window.location.pathname.includes("clase_")
</script>
