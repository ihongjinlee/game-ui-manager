import UserPosts from '@/components/UserPosts';
import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';
import { Metadata } from 'next';
import { cache } from 'react';

type Props = {
  params: { user_id: string };
};

const getUser = cache(async (user_id: string) => getUserForProfile(user_id));

export default async function UserPage({ params: { user_id } }: Props) {
  const user = await getUser(user_id);

  return (
    <section className='w-full'>
      <UserProfile user={user} />;
      <UserPosts user={user} />
    </section>
  );
}

export async function generateMetadata({
  params: { user_id },
}: Props): Promise<Metadata> {
  const user = await getUser(user_id);

  return {
    title: `${user?.name})`,
    description: `${user?.name}'의 모든 영화`,
  };
}
