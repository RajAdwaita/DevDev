import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'username', type: 'text', placeholder: 'Username' },
                email: { label: 'email', type: 'text', placeholder: 'Email' },
                password: { label: 'password', type: 'text', placeholder: 'Password' },
            },
            async authorize(credentials: any) {
                const username = credentials.username;
                const email = credentials.email;
                const password = credentials.password;

                // const user = await prisma.user.findOne({
                //     where: {
                //         email: email,
                //         password: password
                //     }
                // })


                // if (!user) {
                //     return null;
                // }
                console.log(credentials);

                return {
                    // id: credentials.csrfToken,
                    id: "username",
                    name: "password",
                    email: "email",
                };
            },

        })
    ],
    secret: process.env.NEXTAUTH_SECRET

});



export const GET = handler;
export const POST = handler;