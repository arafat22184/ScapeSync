import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    // Google OAuth
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Email/Password via your API
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const formdata = new FormData();
        formdata.append("email", credentials.email);
        formdata.append("password", credentials.password);
        formdata.append("remember_me", "true");

        const res = await fetch("https://apitest.softvencefsd.xyz/api/login", {
          method: "POST",
          body: formdata,
        });

        const data = await res.json();

        if (res.ok && data?.token) {
          return {
            id: data.user?.id,
            name: `${data.user?.first_name} ${data.user?.last_name}`,
            email: data.user?.email,
            token: data.token,
          };
        }
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
