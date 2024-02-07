import { User } from '@/model/user';
import Avatar from './Avatar';

type Props = {
  user: User;
};

export default function UserProfile({ user: { image, user_id, name } }: Props) {
  return (
    <section className='w-full flex flex-col md:flex-row items-center justify-center py-8 border-b border-neutral-300 dark:border-neutral-700'>
      <Avatar image={image} size='xlarge' priority />
      <div className='md:ml-10 text-center'>
        <div className='flex flex-col items-center md:flex-row'>
          <h1 className='text-2xl md:mr-8 my-2 md:mb-0 dark:text-gray-300 '>
            {name}
          </h1>
        </div>
        <p className='text-xl md:text-start dark:text-gray-500'>{user_id}</p>
      </div>
    </section>
  );
}
