import { Post } from '@/model/post';
import { client, urlFor } from './sanity';

export async function getPosts() {
  return client
    .fetch(
      `
  *[_type=="post"] 
  | order(releasedate desc){
    ..., 
    "id":_id}
    `
    )
    .then((posts: Post[]) => {
      return posts.map((post: Post) => ({
        ...post,
        photo: urlFor(post.photo, 1125),
      }));
    });
}
