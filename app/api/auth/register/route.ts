import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      first_name,
      middle_name,
      last_name,
      username,
      email,
      phone,
      password,
      location,
    } = await request.json();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/users`,
      {
        method: 'POST',
        body: JSON.stringify({
          first_name,
          middle_name,
          last_name,
          username,
          email,
          phone,
          password,
          location,
          role_id: '65dabb03e1ec133df81eddd5',
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (message) {
    return NextResponse.json({ message });
  }
}
