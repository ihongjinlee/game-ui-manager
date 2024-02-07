import { client, urlFor } from './sanity';
import { User } from '@/model/user';
import { Post } from '@/model/post';

const simplePostProjection = `
    ..., 
    "id":_id,
    members[]->{user_id, name, image}
`;

export async function getPosts() {
  return client
    .fetch(
      `
  *[_type=="post"] 
  | order(releasedate desc){${simplePostProjection}}`
    )
    .then(mapPosts);
}

export async function getPostsOf(user_id: string) {
  return client
    .fetch(
      `
    *[_type=="post" && ("${user_id}" in members[]->user_id)]
    | order(releasedate desc){${simplePostProjection}}`
    )
    .then(mapPosts);
}

function mapPosts(posts: Post[]) {
  return posts.map((post: Post) => ({
    ...post,
    photo: urlFor(post.photo, 1125),
    members: post.members.map((user: User) => ({
      ...user,
      image: urlFor(user.image, 288),
    })),
  }));
}
