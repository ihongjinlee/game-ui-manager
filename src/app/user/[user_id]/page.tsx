import UserProfile from '@/components/UserProfile';
import { getUserForProfile } from '@/service/user';

type Props = {
  params: { user_id: string };
};

export default async function UserPage({ params: { user_id } }: Props) {
  const user = await getUserForProfile(user_id);

  return <UserProfile user={user} />;
}
