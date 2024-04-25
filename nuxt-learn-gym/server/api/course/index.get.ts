import { getCourse } from '~/server/models/course';

export default defineEventHandler(() => {
  const course = getCourse();
  return course;
});
