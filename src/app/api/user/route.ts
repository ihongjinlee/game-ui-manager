import { getUsers } from '@/service/user';
import { NextResponse } from 'next/server';

export async function GET() {
  return getUsers() //
    .then((data) => NextResponse.json(data));
}
