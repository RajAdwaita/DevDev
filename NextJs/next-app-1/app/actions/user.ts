"use server";
import client from '@/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';


interface props {
    username: string;
    password: string;
}

export async function signup({ username, password }: props) {
    try {
        // Create a new user in the database
        // const { username, password } = req.body;
        const user = await client.user.create({
            data: {
                username: username,
                password: password,
            },
            // Select only necessary fields that are serializable

        });

        console.log("User Created");
        NextResponse.json({
            success: true,
            message: 'User created successfully',
            user: user,
        });
        // return ("Success");




        // Return a success message with serializable data
        // return NextResponse.json({
        //     success: true,
        //     message: "User created successfully",
        //     user: user, // Only serializable fields are passed
        // });
    } catch (err) {
        console.log("Error in user.ts:", err);

        NextResponse.json({
            success: false,
            message: 'Failed to create user',
        });


    }
}
