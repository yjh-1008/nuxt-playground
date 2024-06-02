<script setup lang="ts">
import type { Champion } from '~/utils/types/champions';

const props = defineProps<{
  tips: string
}>()
</script>

<template>
  <div style="height: fit-content">
    <slot></slot>
    <template v-for="tip in tips" :key="tip">
       <div>-&nbsp;{{ tip }}</div>
    </template>
  </div>
</template>