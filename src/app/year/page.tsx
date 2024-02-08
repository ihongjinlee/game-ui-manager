import PostList from '@/components/PostList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MCU',
  description: '마블 시네마틱 유니버스',
};

export default function YearPage() {
  return <PostList apiUrl='/api/posts' />;
}
