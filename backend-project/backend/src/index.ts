import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
// const app = new Hono()

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>().basePath('/api/v1');


app.post('/signup', async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    })


    const payload = {
      sub: user.id,
      role: 'user',

    }

    const secret = c.env.JWT_SECRET;

    const token = await sign(payload, secret);

    console.log(`TOKEN :   ${token}`);

    // localStorage.setItem('token', token);

    console.log(user.id);


    return (
      c.text('User Created')
    )

  }
  catch (err) {
    console.log(err);

  }

})




app.post('/login', async (c) => {


  try {

    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate())


    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })

    if (!user) {
      c.status(403);
      return c.json({
        error: "User Not Found"
      })
    }
    if (body.password === user.password)
      return c.text("Logged In");
    else
      return c.text("Wrong Password");



    // const payload = {
    //   sub: user.id,
    //   role: 'user',

    // }

    // const secret = c.env.JWT_SECRET;

    // const token = await sign(payload, secret);

    // console.log(`TOKEN :   ${token}`);


  }
  catch (err) {
    console.log(err);
    c.status(403);
    return c.json({
      message: "Something is worng"
    })

  }



  // return (
  //   c.text('login')
  // )

})




app.post('/blog', (c: any) => {
  return (
    c.text('Create Blog')
  )

})




app.put('/blog', (c: any) => {
  return (
    c.text('Update Blogs')
  )

})




app.get('/blog/:id', (c: any) => {
  const id = c.req.param('id');
  console.log(id);

  return (
    c.text(`get Blogs ${id}`)
  )

})

export default app
