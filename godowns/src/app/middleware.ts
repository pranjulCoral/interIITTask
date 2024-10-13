import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "./lib/mongodb.ts";
import process from "node:process";

export async function middleware (req: NextRequest) {
    try {
        // Extract the Authorization header
        const authHeader = req.headers.get("Authorization");
        
        if (!authHeader) {
            return new Response(
                JSON.stringify({ message: "Token is required" }),
                { headers: { "Content-type": "application/json" }, status: 400 }
            );
        }

        const [type, token] = authHeader.split(" ");

        if (type !== "Bearer") {
            return new Response(
                JSON.stringify({ message: "Invalid token" }),
                { headers: { "Content-type": "application/json" }, status: 400 }
            );
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "thisismysecret");
        
        // Connect to MongoDB and verify the user
        const client = await clientPromise;
        const database = client.db("interIITdb");
        const collection = database.collection("Users");

        const user = await collection.findOne({ email: decoded.email });

        if (!user) {
            return new Response(
                JSON.stringify({ message: "Unauthorized" }),
                { headers: { "Content-type": "application/json" }, status: 401 }
            );
        }

        // If everything is valid, proceed to the next middleware or route
        return NextResponse.next();
        
    } catch (error) {
        return new Response(
            JSON.stringify({ message: error.message }),
            { headers: { "Content-type": "application/json" }, status: 400 }
        );
    }
};
