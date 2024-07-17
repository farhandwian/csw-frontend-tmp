import React from "react";
import AfterTest from "@/app/student/_components/AfterTestExercise";
import { TAfterTestExerciseParams } from "@/types/uji-kemampuan";

const Page = ({ params }: { params: TAfterTestExerciseParams }) => {
  const redirectUrl = `/student/uji-kemampuan/latihan-soal/${params.module_id}/deskripsi-latihan-soal/${params.exercise_uuid}`;

  return (
    <>
      <section className="relative min-h-[25rem] min-w-36 p-4 md:p-5">
        <AfterTest
          props={{
            exercise_uuid: params.exercise_uuid,
            exercise_title: params.exercise_title,
            redirect_url: redirectUrl,
          }}
        />
      </section>
    </>
  );
};

export default Page;
