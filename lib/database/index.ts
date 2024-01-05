import mongoose from 'mongoose';
import { off } from 'process';
const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn

    if(!MONGODB_URI) throw new Error(`Mongo/URI is missing`);

    cached.promisse = cached.promisse || mongoose.connect(MONGODB_URI, {
        dbName:'Evently',
        bufferCommands: false
    }); 

    cached.conn = await cached.promisse;

    return cached.conn
}