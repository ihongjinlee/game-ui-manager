import { Post } from '@/model/post';
import { client, urlFor } from './sanity';
import { User } from '@/model/user';

export async function getPosts() {
  return client
    .fetch(
      `
  *[_type=="post"] 
  | order(releasedate desc){
    ..., 
    "id":_id,
    members[]->{user_id, name, image}
  }`
    )
    .then((posts: Post[]) => {
      return posts.map((post: Post) => ({
        ...post,
        photo: urlFor(post.photo, 1125),
        members: post.members.map((user: User) => ({
          ...user,
          image: urlFor(user.image, 288),
        })),
      }));
    });
}
