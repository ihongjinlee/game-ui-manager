'use client';

import useSWR from 'swr';
import { Post } from '@/model/post';
import BarSpinner from './ui/BarSpinner';
import PostListCard from './PostListCard';

export default function PostList() {
  const { data: posts, isLoading: loading } = useSWR<Post[]>('/api/posts');

  return (
    <section className='flex justify-center'>
      {loading && (
        <div className='mt-72'>
          <BarSpinner />
        </div>
      )}
      {posts && (
        <div className='m-8'>
          <ul className='grid gap-4 grid-cols-1'>
            {posts.map((post, index) => (
              <li key={post.id}>
                <PostListCard post={post} priority={index < 2} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
