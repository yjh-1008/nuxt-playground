import type { CourseWithPath } from '~/types/course';

// import type { CourseWithPath } from '~/types/course';
interface CourseReturn {
  courses: CourseWithPath[];
}
export const useCourses = async (): Promise<CourseReturn> => {
  const { data, error } = await useFetch('/api/course');

  if (error.value) {
    throw createError({
      ...error.value,
    });
  }

  return {
    courses: data.value as CourseWithPath[],
  };
};
