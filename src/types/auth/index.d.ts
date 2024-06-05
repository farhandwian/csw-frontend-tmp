import { TMetaResponseSingle } from "@/types";

export type TLoginData = {
  data: {
    access_token: string;
  };
} & User;

export type TRegisterData = {
  access_token: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TRegisterPayload = {
  name: string;
  class: string;
  district: string;
  regency: string;
  province: string;
  phone: string;
  email: string;
  password: string;
  confirm_password: string;
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
export type TDataRegisterResponse = TMetaResponseSingle<TRegisterData>;
export type TDataUserResponse = TMetaResponseSingle<TUser>;
