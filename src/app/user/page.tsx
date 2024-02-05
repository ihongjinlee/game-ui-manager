'use client';

import { User } from '@/model/user';
import useSWR from 'swr';

export default function UserPage() {
  const { data: users, isLoading: loading } = useSWR<User[]>('/api/users');

  console.log(users);

  return <>UserPage</>;
}
