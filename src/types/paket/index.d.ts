import { TMetaResponse, TMetaResponseSingle } from "@/types";

export interface TDetailMentor {
  uuid: string;
  name: string;
  teaching_field: string;
  description: string;
  profile_picture: string;
  uniques: string[];
}

export type TDetailMentorResponse = TMetaResponseSingle<TDetailMentor>;
