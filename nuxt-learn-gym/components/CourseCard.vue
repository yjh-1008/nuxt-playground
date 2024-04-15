<template>
  <q-card class="my-card" @click="$emit('click')">
    <img :src="tumbnail" />

    <q-card-section>
      <div class="text-h6 ellipsis">{{ title }}</div>
      <div class="text-subtitle2 ellipsis text-grey-8">
        {{ subtitle }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
interface Props {
  tumbnail: string;
  title: string;
  subtitle: string;
}
defineEmits<{
  click: [];
}>();
defineProps<Props>();
</script>
