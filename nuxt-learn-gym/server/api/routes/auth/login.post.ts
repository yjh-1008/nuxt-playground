import { getUserByEmail } from '~/server/models/user';
import { verifyPassword } from '~/server/utils/password';

export default defineEventHandler(async (event) => {
  const body = readBody<{ email: string; password: string }>(event);
  const { email, password } = await body;
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email address and password are required',
    });
  }

  const userWithPassword = getUserByEmail(email);
  if (!userWithPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'User Not found',
    });
  }
  const verified = verifyPassword(password, userWithPassword.password);
  if (!verified) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Bad credentials',
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword;

  setCookie(event, '_user', JSON.stringify(userWithoutPassword));
  return {
    user: userWithoutPassword,
  };
});
