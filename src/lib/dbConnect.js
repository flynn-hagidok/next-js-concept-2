import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.URI);

export const connect = (collection) => {
    const database = process.env.DB_NAME;
    return client.db(database).collection(collection);
}