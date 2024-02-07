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

        <Image
          className='rounded-lg mt-4'
          src={photo}
          alt={`photo by ...`}
          width={1920}
          height={1080}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          priority={priority}
        />
        <div className='flex justify-center mt-1 p-1'>
          {url && (
            <a href={url} target='_blank'>
              <p className='bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg px-40 text-center'>
                more...
              </p>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
