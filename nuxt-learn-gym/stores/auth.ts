import type { UserWithoutPassword } from '~/types/user';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const authUser = ref<Mayve<UserWithoutPassword>>();

    const signIn = async (email: string, password: string) => {
      const data = await $fetch<{ user: UserWithoutPassword }>('/auth/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
      });
      const { user: foundUser } = data;
      if (!foundUser) {
        throw createError({
          statusCode: 401,
          statusMessage: 'Invalid email or password',
        });
      }
      setUser(foundUser);
    };

    const fetchUser = async () => {
      await $fetch<{ user: UserWithoutPassword }>('/auth/user', {
        headers: useRequestHeaders(['cookie']),
      });
      setUser(null);
    };

    const signOut = async () => {
      await $fetch('/auth/logut', { method: 'POST' });
      setUser(null);
    };

    const setUser = (user: Mayve<UserWithoutPassword>) => {
      authUser.value = user;
    };

    return {
      user: authUser,
      isAuthenticated: computed(() => !!authUser.value),
      isAdmin: computed(() =>
        !authUser.value ? false : authUser.value.roles.includes('ADMIN'),
      ),
      signIn,
      signOut,
      fetchUser,
    };
  },
  {
    persist: {
      storage: persistedState.cookies,
    },
  },
);
