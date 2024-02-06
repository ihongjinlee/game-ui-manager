'use client';

import useSWR from 'swr';
import { User } from '@/model/user';
import UsersListCard from './UsersListCard';

export default function UsersList() {
  const { data: users, isLoading: loading } = useSWR<User[]>('/api/users');

  return (
    <section className='flex justify-center'>
      {users && (
        <ul className='mt-24 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {users.map((user, index) => (
            <li key={user.user_id} className='mb-4'>
              <UsersListCard user={user} priority={index < 12} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
