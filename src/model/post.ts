import { User } from './user';

export type Post = {
  id: string;
  title: string;
  description: string;
  releasedate: string;
  memebers: User[];
  url: string;
  photo: string;
};
