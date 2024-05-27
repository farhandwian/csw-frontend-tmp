// nextauth.d.ts
import { DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

interface IUser extends DefaultUser {
  access_token: string;
  roles?: number[];
}
declare module "next-auth" {
  type User = IUser;

  interface Session {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    access_token: string;
    data: {
      // user_id: number;
      // email: string; // Mengganti 'username' dengan 'email'
      // token: string;
      // roles: number[]; // Biarkan roles jika tidak ada perubahan
      access_token: string;
    };
  }
}
