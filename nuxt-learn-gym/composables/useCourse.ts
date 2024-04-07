import type { CourseWithPath } from '~/types/course';
interface CourseReturn {
  course: Mayve<CourseWithPath>;
}
export const useCourse = (courseSlug: string): CourseReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === courseSlug);
  return {
    course,
  };
};
