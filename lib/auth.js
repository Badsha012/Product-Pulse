import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        // DB logic (example user)
        const user = {
          id: "1",
          name: "John Doe",
          email: "test@mail.com",
          password: "$2b$10$7Q38ADJpJfFE.AXkY.DO7OtKQxZrQuxaAElaYx6X0PNjiofvwf7Vm" // 123456
        };

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;

        return user;
      }
    })
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async redirect() {
      return "/";
    },
  },

  session: { strategy: "jwt" },
};
