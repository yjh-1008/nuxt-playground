// import coursesData from './courseData';
import type { CourseWithPath } from '@/types/course';

interface CourseReturn {
  course: Mayve<CourseWithPath>;
  nextCourse: Mayve<CourseWithPath>;
  prevCourse: Mayve<CourseWithPath>;
}
export const useCourse = async (courseSlug: string): Promise<CourseReturn> => {
  const { data, error } = await useFetch(`/api/course/${courseSlug}`);
  if (error.value) {
    throw createError({
      ...error.value,
    });
  }
  return data.value as CourseReturn;
};
