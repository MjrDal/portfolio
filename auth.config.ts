import { getUserByEmail } from "@/data/user";
import { UserRole } from "@prisma/client";
import bcrypt from "bcryptjs";
import type { NextAuthConfig, User } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";

interface MyUser extends User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  password: string | null;
  role: UserRole;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export default {
  providers: [
    credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
            const { password, ...userWithoutPassword } = user; // Exclude password from the returned user object
            return userWithoutPassword as MyUser; // Cast the returned object to MyUser type
          }

          return null;
        }

        return null; // Ensure null is returned if validation fails
      },
    }),
  ],
} satisfies NextAuthConfig;
