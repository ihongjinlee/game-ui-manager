import { getPostsOf } from '@/service/posts';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: { user_id: string };
};

export async function GET(_: NextRequest, context: Context) {
  return getPostsOf(context.params.user_id) //
    .then((data) => NextResponse.json(data));
}
