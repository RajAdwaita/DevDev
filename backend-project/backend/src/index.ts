import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
// const app = new Hono()

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    prisma: any
    userId: any
  }
}>().basePath('/api/v1');

app.use('/*', cors())

app.route('/user', userRouter);
app.route('/blog', blogRouter);


// app.use('*', async (c, next) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate())

//   c.set('prisma', prisma);
//   await next();

// })

// app.use('/api/v1/blog/*', async (c, next) => {

//   const JWT_SECRET = c.env.JWT_SECRET;
//   const authHeader = c.req.header('Authorization');

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     c.status(403);
//     return c.json({
//       message: 'Blocked'
//     })
//   }

//   const token = authHeader.split(" ")[1]

//   try {

//     const decoded = await verify(token, JWT_SECRET);
//     console.log(`Decoded : ${decoded}`);
//     if (decoded.id) {
//       // c.req.id = decoded;
//       // const userId = decoded.id;
//       c.set('userId', decoded.id);
//       await next();



//     }
//     else {
//       console.log("Token Error Here ");
//       c.status(403)
//       return c.json({
//         message: "Invlaid token"
//       })

//     }



//   }
//   catch (err) {
//     c.status(403);
//     return c.json({
//       message: "Error Occurred"
//     })
//   }



// })

// app.post('/signup', async (c) => {
//   try {
//     // const prisma = new PrismaClient({
//     //   datasourceUrl: c.env.DATABASE_URL,
//     // }).$extends(withAccelerate())
//     const prisma = await c.get('prisma');
//     const body = await c.req.json();
//     const user = await prisma.user.create({
//       data: {
//         email: body.email,
//         name: body.name,
//         password: body.password,
//       },
//     })


//     const payload = {
//       id: user.id,

//     }

//     const secret = c.env.JWT_SECRET;

//     const token = await sign(payload, secret);

//     console.log(`TOKEN :   ${token}`);

//     // localStorage.setItem('token', token);

//     console.log(user.id);



//     return (
//       // c.text('User Created')
//       c.json({
//         token: token
//       })
//     )

//   }
//   catch (err) {
//     console.log(err);

//   }

// })




// app.post('/login', async (c) => {


//   try {

//     // const prisma = new PrismaClient({
//     //   datasourceUrl: c.env?.DATABASE_URL,
//     // }).$extends(withAccelerate())
//     const prisma = await c.get('prisma');


//     const body = await c.req.json();
//     const user = await prisma.user.findUnique({
//       where: {
//         email: body.email
//       }
//     })

//     if (!user) {
//       c.status(403);
//       return c.json({
//         error: "User Not Found"
//       })
//     }
//     if (body.password === user.password)
//       return c.text("Logged In");
//     else
//       return c.text("Wrong Password");



//     // const payload = {
//     //   sub: user.id,
//     //   role: 'user',

//     // }

//     // const secret = c.env.JWT_SECRET;

//     // const token = await sign(payload, secret);

//     // console.log(`TOKEN :   ${token}`);


//   }
//   catch (err) {
//     console.log(err);
//     c.status(403);
//     return c.json({
//       message: "Something is worng"
//     })

//   }



//   // return (
//   //   c.text('login')
//   // )

// })




// app.post('/blog', (c: any) => {
//   return (
//     c.text('Create Blog')
//   )

// })




// app.put('/blog', (c: any) => {
//   return (
//     c.text('Update Blogs')
//   )

// })




// app.get('/blog/:id', async (c: any) => {
//   const id = c.req.param('id');
//   // console.log(id);
//   const userId = await c.get('userId')
//   console.log(userId);


//   return (
//     c.text(`get Blogs ${id}`)
//   )

// })

export default app
