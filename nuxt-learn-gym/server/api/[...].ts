export default defineEventHandler(() => {
  throw createError({
    status: 500,
    statusMessage: 'Server Error',
  });
});
