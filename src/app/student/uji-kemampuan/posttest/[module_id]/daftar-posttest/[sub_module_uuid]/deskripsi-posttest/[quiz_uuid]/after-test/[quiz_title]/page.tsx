import React from "react";
import AfterTest from "@/app/student/_components/AfterTest";

import { TAfterTestParams } from "@/types/uji-kemampuan";
const Page = ({ params }: { params: TAfterTestParams }) => {
  const redirectUrl = `/student/uji-kemampuan/posttest/${params.module_id}/daftar-posttest/${params.sub_module_uuid}/deskripsi-posttest/${params.quiz_uuid}`;

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
