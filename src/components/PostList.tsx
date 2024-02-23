'use client';

import useSWR from 'swr';
import { Post } from '@/model/post';
import BarSpinner from './ui/BarSpinner';
import PostListCard from './PostListCard';

type Props = {
  apiUrl: string;
};

export default function PostList({ apiUrl }: Props) {
  const { data: posts, isLoading: loading } = useSWR<Post[]>(apiUrl);

  return (
    <section className='flex justify-center'>
      {loading && (
        <div className='mt-72'>
          <BarSpinner />
          <div className='h-screen' />
        </div>
      )}
      {posts && (
        <div className='m-4'>
          <ul className='grid gap-4 grid-cols-1'>
            {posts.map((post, index) => (
              <li key={post.id}>
                <PostListCard post={post} priority={index < 2} />
                {post.releasedate.split('-')[0] !==
                  posts[index + 1]?.releasedate.split('-')[0] && (
                  <h1 className='flex justify-center m-10 text-4xl font-bold dark:text-white'>
                    {post.releasedate.split('-')[0]}
                  </h1>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
