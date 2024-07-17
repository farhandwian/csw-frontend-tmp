import React from "react";
import AfterTest from "@/app/student/_components/AfterTest";

import { TAfterTestQuizParams } from "@/types/uji-kemampuan";
const Page = ({ params }: { params: TAfterTestQuizParams }) => {
  const redirectUrl = `/student/uji-kemampuan/pretest/${params.module_id}/daftar-pretest/${params.sub_module_uuid}/deskripsi-pretest/${params.quiz_uuid}`;

  return (
    <>
      <AfterTest
        props={{
          sub_modul_uuid: params.sub_module_uuid,
          quiz_uuid: params.quiz_uuid,
          test_type_id: params.test_type_id,
          quiz_title: params.quiz_title,
          redirect_url: redirectUrl,
        }}
      />
    </>
  );
};

export default Page;
