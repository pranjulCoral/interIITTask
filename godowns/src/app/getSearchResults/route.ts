import clientPromise from '../lib/mongodb.ts';
import {NextRequest , NextResponse} from 'next/server'

export const GET = async(req:NextRequest,res:NextResponse)=>{
    try {

        const url = new URL(req.url);
        const query = url.searchParams.get('query');

        if(!query || query.trim() === ""){
            return new Response(JSON.stringify("Query cannot be empty")
            ,
            {
                headers:{"Content-type":"application/json"},
                status:400
            }
        )
        }
        const client = await clientPromise;

        const database = client.db('interIITdb'); 

        const collection2 = database.collection('items');

        const searchResults = await collection2.find({
            name:{$regex:query , $options:'i'}
        }).limit(10).toArray();

        return new Response(
            JSON.stringify(searchResults),
            {headers:{"Content-type":"application/json"},
        status:200}
            
        )
        

        
    } catch (error) {
        return new Response(JSON.stringify(error.message)
    ,
    {
        headers:{"Content-type":"application/json"},
        status:500
    }
)
        
    }

}