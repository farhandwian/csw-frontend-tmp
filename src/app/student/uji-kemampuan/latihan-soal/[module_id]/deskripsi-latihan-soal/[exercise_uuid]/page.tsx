import React from "react";
import Deskripsi from "@/app/student/uji-kemampuan/_components/deskripsiExercise/Deskripsi";
import { TExerciseDeskrispiParams } from "@/types/exercise";

const Page = ({ params }: { params: TExerciseDeskrispiParams }) => {
  return (
    <>
      <Deskripsi
        exercise_uuid={params.exercise_uuid}
        module_id={params.module_id}
      />
    </>
  );
};

export default Page;
