'use client';

import useSWR from 'swr';
import { User } from '@/model/user';
import UsersListCard from './UsersListCard';
import BarSpinner from './ui/BarSpinner';

export default function UsersList() {
  const { data: users, isLoading: loading } = useSWR<User[]>('/api/user');

  return (
    <section className='flex justify-center'>
      {loading && (
        <div className='mt-72'>
          <BarSpinner />
          <div className='h-screen' />
        </div>
      )}
      {users && (
        <ul className='mt-4 mb-4 sm:mt-24 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {users.map((user, index) => (
            <li key={user.user_id}>
              <UsersListCard user={user} priority={index < 12} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
