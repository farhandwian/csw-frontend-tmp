import React from "react";
import { TAfterTestParams } from "@/types/modul";
import { BlueButton } from "@/components/Button/BlueButton";
import Image from "next/image";
import Link from "next/link";

const Page = ({ params }: { params: TAfterTestParams }) => {
  const quizTitle = decodeURIComponent(params.quiz_title);

  return (
    <>
      <section className="relative min-h-[25rem] min-w-36 p-4 md:p-5">
        <div className="mx-auto mt-3 flex w-[80%] flex-col gap-5 md:w-[50%]">
          <div className="mx-auto">
            <Image
              width={150}
              height={150}
              src="/img/uji-kemampuan/ic_success_latsol.gif"
              className={`inline-block object-cover`}
              alt="Logo CSW"
            />
          </div>
          <h2 className="text-center text-lg font-bold md:text-xl">
            {`Yeay!!! Selamat kamu telah menyelesaikan ${quizTitle}`}
          </h2>

          <h3 className="mb-2 text-xs md:text-sm">
            Nilai akan langsung muncul dan kamu bisa melihatnya di halaman
            deskripsi {quizTitle}
          </h3>

          <Link
            href={`/student/modul/detail-modul/${params.modul_uuid}/deskripsi-latihan-soal/${params.quiz_uuid}/${params.test_type_id}`}
            className="m-auto"
          >
            <BlueButton className="ml-2 bg-pl-RoyalBlue text-white ">
              <h1 className="text-xs md:text-sm">
                Kembali ke deskripsi {quizTitle}
              </h1>
            </BlueButton>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
