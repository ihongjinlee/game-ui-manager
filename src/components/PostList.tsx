'use client';

import useSWR from 'swr';
import { Post } from '@/model/post';

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<Post[]>('/api/posts');

  console.log(posts);

  return <>PostList</>;
}
