import { client } from './sanity';

export async function getUsers() {
  return client.fetch(`
  *[_type=="user"] 
  | order(user_id asc){
    ..., 
    "id":_id}
    `);
}
