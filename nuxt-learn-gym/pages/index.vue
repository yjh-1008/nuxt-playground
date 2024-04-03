<template>
  <q-page padding>
    <div class="q-my-xl tex-center">
      <div class="text-h4">ALl Course</div>
      <p class="q-mt-sm text-grey-8">웹개발 입문부터 실전까지 학습해보세요!</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div v-for="n in 3" :key="n" class="col-12 col-md-4 col-sm-6">
        <course-card />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup></script>

<style></style>
