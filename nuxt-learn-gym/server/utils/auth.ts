import type { H3Event } from 'h3';

export function getUserFomEvent(event: H3Event) {
  const userJsonString = getCookie(event, '_user');

  if (!userJsonString) return null;

  const user = JSON.parse(userJsonString);
  return user;
}
