import { User } from '@/model/user';

type Props = {
  user: User;
};

export default function UserProfile({ user: { user_id } }: Props) {
  return <p>{user_id}</p>;
}
