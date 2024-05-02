export default defineEventHandler( (event) => {
  const query = getQuery(event)
  // console.log(query);
  // console.log('context',event.context.);
  return { a: query.foo, b: query.baz }
})
