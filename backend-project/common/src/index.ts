import z from 'zod'


// export const userRouter = new Hono();

// sanitization 

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()

})
export const loginInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),


})
export const createBlog = z.object({
    title: z.string(),
    content: z.string(),


})
export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()


})



// type inference in ZOD
export type SignupInput = z.infer<typeof signupInput>

// type inference in ZOD
export type LoginInput = z.infer<typeof loginInput>

// type inference in ZOD
export type CreateBlog = z.infer<typeof createBlog>

// type inference in ZOD
export type UpdateBlog = z.infer<typeof updateBlog>
