import { AxiosError } from "axios";
export type TTestType =
  | "latihan-soal"
  | "pretest"
  | "posttest"
  | "paket-soal"
  | "try-out";

export interface TPaginationMeta {
  total_rows: number;
  total_pages: number;
  limit: number;
  page: number;
  // prev: null | number;
  // next: null | number;
}

export type TMetaItem = {
  status: string;
  code: number;
  message?: string;
  pagination?: TPaginationMeta;
};

export type TMetaResponse<T> = {
  data: Array<T>;
} & TMetaItem;

export type TMetaResponseSingle<T> = {
  data: T;
} & TMetaItem;

export type TMetaErrorResponse = AxiosError<TMetaItem>;
