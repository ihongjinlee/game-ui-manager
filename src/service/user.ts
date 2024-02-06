import { client, urlFor } from './sanity';
import { User } from '@/model/user';

export async function getUsers() {
  return client
    .fetch(
      `
  *[_type=="user"] 
  | order(user_id asc){
    ..., 
    "id":_id}
    `
    )
    .then((users: User[]) => {
      return users.map((user: User) => ({
        ...user,
        image: urlFor(user.image, 288),
      }));
    });
}
