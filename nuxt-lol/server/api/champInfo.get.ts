import champions from '@/assets/data/champion';
import { Champion } from '@/utils/types/champions';
export default defineEventHandler( (event) => {
  const query = getQuery(event)
  const id = query.id
  const champArr = Object.entries(champions.data);
  const champ = champArr.filter((item) => {
    const [key, value] = item;
    return value.key  === id;
  })
  // console.log(champ);
  if(!champ) {
    throw createError({
      status: 403,
      message:'잘못된 요청입니다'
    })
  }
  return { name: champ[0][0] };
})
