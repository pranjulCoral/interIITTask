// deno-lint-ignore-file
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-expressions  */
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextRequest } from "next/server";
import clientPromise from "../../lib/mongodb.ts";
import process from "node:process";
import corsHeaders from "../../lib/corsHeaders.ts";

export const POST = async (req: NextRequest) => {
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
      }
    try {
        const { username, email, password } = await req.json();
        if (!username || !email || !password) {
            return new Response(JSON.stringify({message:"All fields are required"}), {
                headers: { "Content-type": "application/json" , ...corsHeaders },
                status: 400,
            });
        }

        const client = await clientPromise;

        const database = client.db("interIITdb");

        const collection = database.collection("Users");

        const user = await collection.findOne({
            email: email,
        });

        if (user) {
            return new Response(JSON.stringify({message:"User Already Exists"}), {
                headers: { "Content-type": "application/json" , ...corsHeaders },
                status: 400,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const token = await jwt.sign({ email: email }, process.env.JWT_SECRET || "thisismysecret", {
            expiresIn: "1d",
        });

        const newUser = await collection.insertOne({
            username: username,
            email: email,
            password: hashedPassword,
        });

        return new Response(
            JSON.stringify(
                {
                    message: "User Registered Successfully",
                    newUser,
                    token: token,
                },
            ),
            { headers: { "Content-type": "application/json", ...corsHeaders}, status: 200 },
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify(
                { message: error.message },
            ),
            { headers: { "Content-type": "application/json" , ...corsHeaders }, status: 500 },
        );
    }
};
