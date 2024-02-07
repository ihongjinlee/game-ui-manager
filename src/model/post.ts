import { User } from './user';

export type Post = {
  id: string;
  title: string;
  description: string;
  releasedate: string;
  members: User[];
  url: string;
  photo: string;
};
