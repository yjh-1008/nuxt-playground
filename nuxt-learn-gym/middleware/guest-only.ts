export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = storeToRefs(useAuthStore());
  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
});
