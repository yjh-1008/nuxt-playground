import type { UserWithoutPassword } from '@/types/user';

export const useAuth = () => {
  const { authUser } = useAuthUser();
  const signIn = (email: string, password: string) => {
    const foundUser = getUser(email, password);
    if (!foundUser) {
      throw createError({
        statusCode: 401,
        statusMessage: 'inValid email or password',
      });
    }
    setUser(foundUser);
  };

  const setUser = (user: Mayve<UserWithoutPassword>) => (authUser.value = user);
  const signOut = () => (authUser.value = null);
  return { signIn, signOut };
};
