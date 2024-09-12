import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server"


const client = new PrismaClient();

export function GET() {
    // database logic

    return NextResponse.json({
        username: "Adwaita",
        password: "abc-123"
    })

}



export async function POST(req: NextRequest) {
    // database logic
    try {

        const body = await req.json();

        const header = await req.headers.get("authorization");
        console.log(header);


        const param = req.nextUrl.searchParams.get('name');

        // return Response.json({
        //     username: body.username,
        //     password: body.password
        // })

        const user = await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })


        console.log(user.id);


        return NextResponse.json({
            message: "User Created"
        })



    }
    catch (err) {

        console.log(err);
        return Response.json({
            message: "Failed to Create User"
        })

    }
}