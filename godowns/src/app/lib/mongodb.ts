// deno-lint-ignore-file no-node-globals
import { MongoClient } from 'mongodb';
import process from 'node:process';

const uri = "mongodb+srv://PranjulShukla:beena55@cluster0.qicx6ls.mongodb.net/interIITdb" // Make sure to set your MongoDB URI in .env
let client: MongoClient;
let clientPromise: Promise<MongoClient>;


if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to keep the MongoDB client instance
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new client instance
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
