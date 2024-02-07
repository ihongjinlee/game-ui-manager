import { User } from '@/model/user';
import PostList from './PostList';

type Props = {
  user: User;
};

export default function UserPosts({ user: { user_id } }: Props) {
  return <PostList apiUrl={`/api/user/${user_id}`} />;
}
