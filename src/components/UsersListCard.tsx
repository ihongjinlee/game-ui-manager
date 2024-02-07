import { User } from '@/model/user';
import Avatar from '@/components/Avatar';
import Link from 'next/link';

type Props = {
  user: User;
  priority: boolean;
};

export default function UsersListCard({
  user: { image, user_id, name },
  priority,
}: Props) {
  return (
    <Link href={`/user/${user_id}`}>
      <article className='rounded-lg shadow-md border border-gray-200 dark:border-gray-600 m-3 p-8'>
        <div className='flex justify-center'>
          <Avatar image={image} priority={priority} size={'xlarge'} />
        </div>

        <h1 className='text-lg font-bold text-gray-700  dark:text-gray-200 text-center mt-4'>
          {`${name}`}
        </h1>

        <h2 className='text-sm text-gray-700 dark:text-gray-400 text-center'>
          {user_id.toLocaleUpperCase()}
        </h2>
      </article>
    </Link>
  );
}
