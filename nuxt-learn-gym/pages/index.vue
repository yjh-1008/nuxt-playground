<template>
  <q-page padding>
    <div class="q-my-xl tex-center">
      <div class="text-h4">ALl Course</div>
      <p class="q-mt-sm text-grey-8">웹개발 입문부터 실전까지 학습해보세요!</p>
    </div>
    <div class="row q-col-gutter-lg">
      <div
        v-for="{ courseSlug, title, subtitle, thumbnail, path } in courses"
        :key="courseSlug"
        class="col-12 col-md-4 col-sm-6"
      >
        <nuxt-link v-slot="{ navigate }" :to="`/course/${path}`">
          <q-card
            :title="title"
            :sub-title="subtitle"
            :tumbnail="thumbnail"
            @click="navigate"
          />
        </nuxt-link>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
const { courses } = useCourses();
</script>

<style></style>
