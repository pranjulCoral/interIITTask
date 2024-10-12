// deno-lint-ignore-file
/* eslint-disable @typescript-eslint/no-explicit-any */
import clientPromise from '../lib/mongodb.ts';


// Example of a godown data
// const godown = [
//     {
//         id:"",
//         name:"",
//         subgodown:[
//             {
//                 "itemq1":"item1"
//             },
//             {},{}

//         ]
//     }
// ]
export const GET = async()=>{
    try{
    const client = await clientPromise;

    const database = client.db('interIITdb'); 
    const collection1 = database.collection('godown'); 
    const collection2 = database.collection('items');


    // Getting Circular JSON reference as cannot send MongoDb instance as a response
    const godown = await collection1.find({}).toArray();
    const items = await collection2.find({}).toArray();

    // Now we have to create a tree so that it can be processed
    const buildHierarchy = (data: any[]) => {
        const map:any = {};
        const roots: any[] = [];
        const itemslist:any[]=[];
      
        data.forEach((godown: { id: string | number; }) => {
          map[godown.id] = { ...godown, children: [] ,items:[] };
        });
      
        data.forEach((godown:any) => {
          if (godown.parent_godown) {
            map[godown.parent_godown].children.push(map[godown.id]);
            items.forEach((item:any)=>{
              item.godown_id === godown.id ? map[godown.id].items.push(item) : ""
            })
          } else {
            roots.push(map[godown.id]);
          }
        });
      
        return roots;
      };

      const tree = buildHierarchy(godown);
      return new Response(
        JSON.stringify(tree),
        {
            headers:{"Content-type":"application/json"}
        }
      )


     
    }
    catch(error){
       return new Response(
        JSON.stringify({error:error.message}),
        {
            headers:{"Content-Type": "application/json"},
            status:500
        }  
       )
    }


 
}

