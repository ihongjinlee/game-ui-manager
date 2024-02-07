import { Post } from '@/model/post';
import Image from 'next/image';
import Link from 'next/link';
import Avatar from './Avatar';

type Props = {
  post: Post;
  priority?: boolean;
};

export default function PostListCard({
  post: { title, description, releasedate, members, url, photo },
  priority = false,
}: Props) {
  return (
    <article
      className={
        'rounded-lg shadow-md border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-100'
      }
    >
      <div className='m-4'>
        <h3 className='mx-2 text-lg dark:text-gray-300'>{`${releasedate}`}</h3>
        <div className='flex'>
          <h1 className='mx-2 mt-2 text-3xl font-bold'>{`${title}`}</h1>
        </div>
        <h2 className='mx-2 mt-1 text-2xl text-gray-600 dark:text-gray-400'>
          {`${description}`}
        </h2>

        <div className='flex mt-4 p-2 rounded-lg border border-gray-200 dark:border-gray-600 '>
          {members?.map(({ image, user_id }) => (
            <Link key={user_id} href={`/user/${user_id}`}>
              <Avatar image={image} priority={priority} />
            </Link>
          ))}
        </div>
        <a href={url} target='_blank'>
          <Image
            className='rounded-lg mt-4'
            src={photo}
            alt={`photo by ...`}
            width={600}
            height={600}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
            priority={priority}
          />
        </a>
      </div>
    </article>
  );
}
