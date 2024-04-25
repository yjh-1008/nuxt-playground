export default defineEventHandler(async (event) => {
  const user = getUserFromEvent(event);
  if (user) {
    event.context.user = user;
  }
});
