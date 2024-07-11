import { TMetaResponse, TMetaResponseSingle } from "@/types";

export interface TMentor {
  uuid: string;
  name: string;
  teaching_field: string;
  description: string;
  motto: string;
  profile_picture: string;
  rating: number;
}

export interface TPaket {
  uuid: string;
  module_name: string;
  name: string;
  picture: string;
  price: number;
  group: boolean;
  exercise: number;
  access: number;
  module: boolean;
  try_out: number;
  zoom: boolean;
}

export type TMentorsResponse = TMetaResponse<TMentor>;

export type TPaketsResponse = TMetaResponse<TPaket>;
