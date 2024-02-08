import { client, urlFor } from './sanity';
import { User } from '@/model/user';

export async function getUsers() {
  return client
    .fetch(
      `
  *[_type=="user"] 
  | order(index asc){
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

export async function getUserForProfile(user_id: string) {
  return client
    .fetch(
      `
      *[_type == "user" && user_id == "${user_id}"][0]{
        ...,
        "id":_id
      }
    `
    )
    .then((user: User) => ({
      ...user,
      image: urlFor(user.image, 288),
    }));
}
