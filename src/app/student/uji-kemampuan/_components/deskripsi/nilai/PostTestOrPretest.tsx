"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TTestType } from "@/types/index";
import Link from "next/link";

interface PostTestOrPretestArgs {
  score: number;
  maxScore: number;
  testType: TTestType;
  quiz_uuid?: string;
  quiz_submission_uuid?: string;
}

const PostTestOrPretest = ({
  score,
  maxScore,
  testType,
  quiz_uuid,
  quiz_submission_uuid,
}: PostTestOrPretestArgs) => {
  useEffect(() => {
    // ... Logic here if necessary
  }, [quiz_submission_uuid, score]);
  const urlRedirect = () => {
    if (testType === "pretest") {
      return `${quiz_uuid}/review-jawaban/${quiz_submission_uuid}`;
    } else if (testType === "posttest") {
      return "bg-[#FD6073]";
    }
    return "";
  };

  const scorePercentage = () => {
    return (score / maxScore) * 100;
  };
  return (
    <>
      {score > -1 ? (
        <>
          <div className="border-b-[2px] p-2">
            <h1 className="text-md text-[#267DDD]">NILAI</h1>
          </div>
          <div className="p-3">
            <div className="rounded-md bg-white p-3">
              <Image
                src={"/img/uji-kemampuan/ic_nilai_mtk.png"}
                width={538}
                height={638}
                alt="img-banner"
                className="min-h-[4rem] max-w-[4rem] "
              />
              <div className="flex items-center justify-between">
                <div className="mt-3 w-[60%]">
                  <div className="mb-1 flex justify-between">
                    <span className="text-base font-medium text-blue-700 dark:text-white">
                      Nilai
                    </span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">
                      {score}
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className={`h-2.5 rounded-full bg-blue-600`}
                      style={{ width: `${scorePercentage()}%` }}
                    ></div>
                  </div>
                </div>
                <Link
                  href={`${quiz_uuid}/review-jawaban/${quiz_submission_uuid}`}
                >
                  <button
                    type="button"
                    className="mb-2 me-2 mt-3 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
                  >
                    Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="border-b-[2px] p-2">
            <h1 className="text-md text-[#267DDD]">NILAI</h1>
          </div>
          <div className="p-3">
            <div className="rounded-md">
              Nilai belum muncul, harap kerjakan {testType} terlebih dahulu
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PostTestOrPretest;
