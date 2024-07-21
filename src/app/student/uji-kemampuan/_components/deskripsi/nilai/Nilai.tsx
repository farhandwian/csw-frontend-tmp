"use client";
import React, { useEffect } from "react";
import { TTestType } from "@/types/index";

import PostTestOrPretest from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/PostTestOrPretest";
import LatihanSoal from "@/app/student/uji-kemampuan/_components/deskripsi/nilai/LatihanSoal";

interface NilaiProps {
  testType: TTestType;
  singleScore?: number;
  maxScore?: number;
  multipleScore?: [];
  quiz_uuid?: string;
  quiz_submission_uuid?: string;
}

const Nilai = ({
  testType,
  singleScore,
  maxScore,
  multipleScore,
  quiz_uuid,
  quiz_submission_uuid,
}: NilaiProps) => {
  useEffect(() => {
    // ... Logic here if necessary
  }, [quiz_submission_uuid, singleScore]);
  const typeNilaiComponent = () => {
    if (testType === "latihan-soal") {
      // return <LatihanSoal dataNilai={dataNilai} typeNilai={testType} />;
      return "";
    } else if (testType === "pretest" || testType === "posttest") {
      return (
        <PostTestOrPretest
          score={singleScore!}
          maxScore={maxScore!}
          testType={testType}
          quiz_uuid={quiz_uuid}
          quiz_submission_uuid={quiz_submission_uuid}
        />
      );
    }
  };

  return (
    <div className="mt-3 w-[100%] rounded-md border-[2px]">
      {typeNilaiComponent()}
    </div>
  );
};

export default Nilai;
