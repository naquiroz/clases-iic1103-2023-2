<template>
  <a
    v-if="showURL"
    :href="URL"
    class="absolute top-0 left-0 dark:text-zinc-500 text-zinc-300 p-2 text-xs"
  >
    {{ "<-  Volver a todas las clases" }}</a
  >
  <!-- A warning that this site will be moved to https://clases-iic1103-2023-2.vercel.app/ starting August 24th  -->
  <p class="absolute top-0 right-0 dark:text-zinc-500 text-zinc-300 p-2 text-xs">
    {{ "Este sitio se trasladará a https://clases-iic1103-2023-2.vercel.app/ a partir del 24 de agosto" }}
  </p>
</template>

<script setup lang="ts">
import { inject } from "@vercel/analytics";

// @ts-ignore
const isProd = !__DEV__;

inject({
  mode: isProd ? "production" : "development",
  debug: !isProd,
});

const URL = window.location.origin;
const showURL = window.location.pathname.includes("clase_");
</script>
