import React from "react";
import Deskripsi from "@/app/student/uji-kemampuan/_components/deskripsi/Deskripsi";
import { TDeskripsiParams } from "@/types/uji-kemampuan";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
const Page = ({ params }: { params: TDeskripsiParams }) => {
  return (
    <>
      <Breadcrumbs widthReduction={"54px"} fontSize="12px" />
      <Deskripsi
        test_type="posttest"
        quiz_uuid={params.quiz_uuid}
        sub_module_uuid={params.sub_module_uuid}
      />
    </>
  );
};

export default Page;
