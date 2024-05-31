import { TMetaResponseSingle } from "@/types";

export type TLoginData = {
  data: {
    access_token: string;
  };
} & User;

export type TLoginPayload = {
  email: string;
  password: string;
};

interface TMedia {
  media_uuid: string;
  original: string;
  thumbnail: string;
  desktop: string;
  mobile: string;
}

interface TUser {
  uuid: string;
  email: string;
  name: string;
  media: Media;
  province: string;
  regency: string;
  district: string;
  phone_number: string;
  class: string;
}

export type TDataLoginResponse = TMetaResponseSingle<TLoginData>;
export type TDataUserResponse = TMetaResponseSingle<TUser>;
