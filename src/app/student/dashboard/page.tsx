"use client";
import Newbie from "@/app/student/dashboard/_components/Newbie";
import Premium from "@/app/student/dashboard/_components/Premium";

const dashboards = {
  id: 1,
  status: "newbiee", // ganti ini jadi newbie klo mau buat tampilan user newbie
};

const Page = () => {
  return <>{dashboards.status === "newbie" ? <Newbie /> : <Premium />}</>;
};

export default Page;
