import { getCourseDetails } from '~/server/models/course';

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, 'courseSlug');
  const courseDetails = getCourseDetails(courseSlug as string);
  if (!courseDetails.course) {
    throw createError({
      status: 500,
      statusMessage: 'Server Error',
    });
  }
  return courseDetails;
});
