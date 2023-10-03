import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

console.log("Running ::::::")
await client.connect();

export default client