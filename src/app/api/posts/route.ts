import { getPosts } from '@/service/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  return getPosts() //
    .then((data) => NextResponse.json(data));
}
