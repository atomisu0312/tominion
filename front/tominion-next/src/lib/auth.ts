import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [github],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/dashboard") {
        return !!auth;
      }
      return true;
    },
  },
});