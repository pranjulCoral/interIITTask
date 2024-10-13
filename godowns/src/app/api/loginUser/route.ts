// deno-lint-ignore-file
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-expressions  */
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";
import clientPromise from "../../lib/mongodb.ts";
import process from "node:process";

export const POST = async (req: NextRequest) => {
    try {
        const { email, password } = await req.json();
        if (!email || !password) {
            return new Response(JSON.stringify({message:"All fields are required"}), {
                headers: { "Content-type": "application/json" },
                status: 400,
            });
        }

        const client = await clientPromise;

        const database = client.db("interIITdb");

        const collection = database.collection("Users");

        const user = await collection.findOne({
            email: email,
        });

        if (!user) {
            return new Response(
                JSON.stringify({message:"User Doesn't Exist , Please Register"}),
                {
                    headers: { "Content-type": "application/json" },
                    status: 400,
                },
            );
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return new Response(JSON.stringify({message:"Wrong Password Entered"}), {
                headers: { "Content-type": "application/json" },
                status: 403,
            });
        }

        const token = await jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" },
        );

        return new Response(
            JSON.stringify(
                {
                    message: "User Logged In Successfully",
                    user,
                    token,
                },
            ),
            { headers: { "Content-type": "application/json" }, status: 200 },
        );
    } catch (error: any) {
        return new Response(JSON.stringify({ message: error.message }), {
            headers: { "Content-type": "application/json" },
            status: 403,
        });
    }
};
