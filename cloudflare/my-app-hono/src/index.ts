import { Hono } from 'hono'

const app = new Hono()

const authMiddleWare = async (c: any, next: any) => {
  if (c.req.header("Authorization")) {
    await next();
  }
  else {
    return c.text('You don\'t have access');
  }

}


// app.use(authMiddleWare);

app.post('/', authMiddleWare, async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header('Authorization'));
  console.log(c.req.query('param'));


  return c.text('Hello Hono!')
})

app.get('/', (c) => {
  return c.render(`
    <div>
     Welcome to Modaks </div>
    `)
})


// app.post('/user', (c) => {
//   return c.text('HEllo Raj')
// });

export default app
