import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      username: string;
      role_id: string;
    };
  }
}
