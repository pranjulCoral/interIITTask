// deno-lint-ignore-file no-node-globals
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-expressions  */
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://PranjulShukla:beena55@cluster0.qicx6ls.mongodb.net/interIITdb" // Make sure to set your MongoDB URI in .env
let client: MongoClient;
let clientPromise: Promise<MongoClient>;


  client = new MongoClient(uri);
  clientPromise = client.connect();


export default clientPromise;
