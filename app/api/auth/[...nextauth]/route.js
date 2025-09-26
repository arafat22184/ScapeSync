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

    // Email/Password via API
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
            accessToken: data.token,
          };
        }
        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7, // 7 days validity
  },

  callbacks: {
    // Store token in JWT
    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    // Make token available in session
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
