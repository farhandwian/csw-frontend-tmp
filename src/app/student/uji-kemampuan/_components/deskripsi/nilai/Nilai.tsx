import React from "react";
import {
  TypeNilai,
  DataNilai,
} from "@/app/student/uji-kemampuan/_components/deskripsi/Deskripsi";

import PostTestOrPretest from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/PostTestOrPretest";
import LatihanSoal from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/LatihanSoal";

interface NilaiArgs {
  typeNilai: TypeNilai;
  dataNilai?: DataNilai[];
}

const Nilai = ({ typeNilai, dataNilai }: NilaiArgs) => {
  const typeNilaiComponent = () => {
    if (typeNilai === "latihan-soal") {
      return <LatihanSoal dataNilai={dataNilai} typeNilai={typeNilai} />;
    } else if (typeNilai === "pretest" || typeNilai === "posttest") {
      return <PostTestOrPretest dataNilai={dataNilai} typeNilai={typeNilai} />;
    }
  };

  return (
    <div className="mt-3 w-[100%] rounded-md border-[2px]">
      {typeNilaiComponent()}
    </div>
  );
};

export default Nilai;
