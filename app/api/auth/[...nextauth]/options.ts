import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const formData = new URLSearchParams();
        formData.append('username', credentials?.username ?? '');
        formData.append('password', credentials?.password ?? '');
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
          {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );
        const user = await res.json();

        // If no error and we have user data, return it
        if (user.success) {
          return user;
        }

        // Return user.message which will be passed to NextAuth as `errorMessage` in the event of an error
        else {
          // Return an object that will pass error information through to the client-side.
          throw new Error(JSON.stringify(user));
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: '/login',
    newUser: '/dashboard', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
