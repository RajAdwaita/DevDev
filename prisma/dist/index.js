"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// async function createUser(username: string, password: string, firstName: string, lastName: string) {
//     try {
//         const user = await prisma.user.create({
//             data: {
//                 username: username,
//                 password: password,
//                 firstName: firstName,
//                 lastName: lastName,
//             },
//             select: {
//                 id: true,
//                 username: true
//             }
//         })
//         console.log(user);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// interface UpdateParams {
//     firstName: string,
//     lastName: string
// }
// async function updateUser(username: string, { firstName, lastName }: UpdateParams) {
//     try {
//         const user = await prisma.user.update({
//             where: {
//                 username: username,
//             },
//             data: {
//                 firstName: firstName,
//                 lastName: lastName,
//             },
//             select: {
//                 firstName: true,
//                 lastName: true
//             }
//         })
//         console.log(user);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// updateUser('cr7',
//     {
//         firstName: 'Cristiano',
//         lastName: "Ronaldo"
//     }
// ).then(() => {
//     console.log('User Updated');
// }).catch((e) => {
//     console.log(e);
// }).finally(async () => {
//     await prisma.$disconnect();
// })
// createUser('lm10', 'abc123', 'Lewo', 'massi')
