
import {NextRequest} from 'next/server'
import clientPromise from '../lib/mongodb.ts';

export const GET = async(req:NextRequest)=>{

    

    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');


        const client = await clientPromise;

    const database = client.db('interIITdb'); 
  
    const collection2 = database.collection('items');

    const data = await  collection2.findOne({item_id:id});

    console.log(data)



        return new Response(
            JSON.stringify(data),{
                headers:{"Content-type":"application/json"},
                status:200
            }
        )
    } catch (error) {
        return new Response(
            JSON.stringify(error.message),
            {
                headers:{"Content-type":"application/json"},
                status:500
            }
        )
        
    }


}