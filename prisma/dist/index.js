"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield prisma.user.create({
                data: {
                    username: username,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                },
                select: {
                    id: true,
                    username: true
                }
            });
            console.log(user);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        try {
            const user = yield prisma.user.update({
                where: {
                    username: username,
                },
                data: {
                    firstName: firstName,
                    lastName: lastName,
                },
                select: {
                    firstName: true,
                    lastName: true
                }
            });
            console.log(user);
        }
        catch (err) {
            console.log(err);
        }
    });
}
updateUser('cr7', {
    firstName: 'Cristiano',
    lastName: "Ronaldo"
}).then(() => {
    console.log('User Updated');
}).catch((e) => {
    console.log(e);
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
// createUser('lm10', 'abc123', 'Lewo', 'massi')
