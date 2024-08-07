import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { loginRequest } from "@/hooks/auth/request";

import { TLoginData } from "@/types/auth";
import { json } from "stream/consumers";

export const authOptions: NextAuthOptions = {
  // secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 5 * 60 * 60, // 5 hours
  },
  providers: [
    CredentialsProvider({
      id: "login",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials): Promise<TLoginData> {
        try {
          const data = await loginRequest({
            email: credentials?.email as string,
            password: credentials?.password as string,
          });

          return data;
        } catch (error: any) {
          if (error.response.status === 422) {
            throw new Error(error.response.data.message);
          }

          throw new Error(
            typeof error.response.data === "string"
              ? error.response.data
              : error.response.data?.message,
          );
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true;

      return false;
    },
    async jwt({ token, user, account }) {
      const currentUser = user as TLoginData;
      console.log(token);
      console.log(user);
      if (account?.provider === "login" && currentUser) {
        token.token = currentUser.data.access_token;
      }

      console.log(JSON.stringify(currentUser));
      return { ...token, ...currentUser };
    },
    async session({ session, token }) {
      const tempToken = token as unknown as TLoginData & JWT;

      console.log(tempToken);

      session = {
        // expires: token?.exp as string,
        // user: {
        //   token: jwt_token,
        //   id: tempToken?.data?.uuid as string,
        //   email: tempToken?.data.email as string,
        //   roles: tempToken?.data.roles as number[],
        // },

        expires: token?.exp as string,
        user: {
          id: "1",
          access_token: token?.data.access_token as string,
        },
      };

      console.log(JSON.stringify(session));

      return session;
    },
  },
};
