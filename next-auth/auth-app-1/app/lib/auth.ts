
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";



export const NEXT_AUTH = {
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

        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,


    callbacks: {
        // jwt: ({ token, user }) => {

        //     console.log(token);
        //     token.userId = token.sub;
        //     return token;

        // },
        session: ({ session, token, user }: any) => {
            if (session && session.user)
                session.user.id = token.sub;
            return session;
        }
    },
    pages: {
        signIn: '/signin'
    }

}