import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signupInput, loginInput } from "@rajadwaita/zod-backend";
// const app = new Hono()

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        prisma: any
        userId: any
    }
}>();

userRouter.use('*', async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    c.set('prisma', prisma);
    await next();

})



userRouter.post('/signup', async (c) => {
    try {
        // const prisma = new PrismaClient({
        //   datasourceUrl: c.env.DATABASE_URL,
        // }).$extends(withAccelerate())
        const prisma = await c.get('prisma');
        const body = await c.req.json();

        const { success } = signupInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Invalid Inputs"
            })
        }
        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: body.password,
            },
        })


        const payload = {
            id: user.id,

        }

        const secret = c.env.JWT_SECRET;

        const token = await sign(payload, secret);

        console.log(`TOKEN :   ${token}`);

        // localStorage.setItem('token', token);

        console.log(user.id);



        return (
            // c.text('User Created')
            c.json({
                token: token
            })
        )

    }
    catch (err) {
        console.log(err);

    }

})




userRouter.post('/login', async (c) => {


    try {

        // const prisma = new PrismaClient({
        //   datasourceUrl: c.env?.DATABASE_URL,
        // }).$extends(withAccelerate())
        const prisma = await c.get('prisma');


        const body = await c.req.json();


        const { success } = loginInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Invalid Inputs"
            })
        }


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







