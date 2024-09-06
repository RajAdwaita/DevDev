import { Context, Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { createBlog, updateBlog } from "@rajadwaita/zod-backend";






// const app = new Hono()

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        prisma: any
        userId: any
    }
}>();



blogRouter.use('*', async (c, next) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    c.set('prisma', prisma);
    console.log("Connected to DB");

    await next();

})

blogRouter.use('/*', async (c, next) => {


    try {
        const JWT_SECRET = c.env.JWT_SECRET;
        const authHeader = c.req.header('Authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            c.status(403);
            return c.json({
                message: 'Not Logged In'
            })
        }

        const token = authHeader.split(" ")[1]

        const decoded = await verify(token, JWT_SECRET);
        console.log(`Decoded : ${decoded}`);

        if (decoded.id) {
            // c.req.id = decoded;
            // const userId = decoded.id;
            c.set('userId', decoded.id);
            await next();
        }
        else {
            console.log("Token Error Here ");
            c.status(403)
            return c.json({
                message: "Not Logged In"
            })

        }



    }
    catch (err) {
        c.status(403);
        return c.json({
            message: "Not Logged In"
        })
    }



})




blogRouter.post('/create', async (c: any) => {
    try {

        const prisma = await c.get('prisma');
        const body = await c.req.json();
        const userId = await c.get('userId')


        const { success } = createBlog.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                success: false,
                message: "Invalid Inputs"
            })
        }


        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: userId,
                published: true
            }
        })
        console.log(blog);

        await c.set("blogId", blog.id);
        console.log(`BLOG ID : ${blog.id}`);


        return (
            c.json({ id: blog.id, success: true, message: 'Blog Created' })
        )
    }
    catch (err) {
        console.log(err);
        c.status(403);
        return c.json({
            success: false,
            message: "Error creating blog"
        })
    }

})




blogRouter.put('/update', async (c: any) => {
    try {

        const prisma = await c.get('prisma');
        const body = await c.req.json();
        const blogId = await c.get('blogId');
        // const userId = await c.get('userId')

        const { success } = updateBlog.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Invalid Inputs"
            })
        }


        const blog = await prisma.post.update({
            where: {
                id: body.id,
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        console.log(blog);

        return (
            c.json({ message: 'Blog Updated' })
        )
    }
    catch (err) {
        console.log(err);
        c.status(403);
        return c.json({
            message: "Error updating blog"
        })
    }

})




blogRouter.get('/blog/:id', async (c: any) => {
    try {

        const prisma = await c.get('prisma');
        const blog_id_param = c.req.param('id');
        const blogId = await c.get('blogId');
        const userId = await c.get('userId')
        const blog = await prisma.post.findFirst({
            select: {
                id: true,
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            },
            where: {
                // id: body.id,
                id: blog_id_param,
            },

        })

        if (!blog) {
            c.status(404);
            return c.json({ message: "Blog not found" });
        }
        console.log(blog);

        return (
            c.json({ blog })
        )
    }
    catch (err) {
        console.log(err);
        c.status(403);
        return c.json({
            message: "Error fetching blog"
        })
    }

})


// TODO : ADD PAGINATION 

blogRouter.get('/allBlogs', async (c: any) => {
    try {

        const prisma = await c.get('prisma');
        const blogId = await c.get('blogId');
        const userId = await c.get('userId')
        const blogs = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (blogs.length === 0) {
            c.status(404);
            return c.json({ message: "No Blogs found" });
        }
        // console.log(blog);

        return (
            c.json({ blogs })
        )
    }
    catch (err) {
        console.log(err);
        c.status(403);
        return c.json({
            message: "Error fetching blogs"
        })
    }

})

