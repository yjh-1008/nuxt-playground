export default defineEventHandler(() => {
  throw createError({
    status: 404,
    message: '메세지를 찾을 수 없습니다.',
  });
});
