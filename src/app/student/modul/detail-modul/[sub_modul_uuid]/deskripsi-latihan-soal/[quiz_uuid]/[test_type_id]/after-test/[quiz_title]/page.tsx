import AfterTest from "@/app/student/_components/AfterTest";
import { TAfterTestParams } from "@/types/modul";

const Page = ({ params }: { params: TAfterTestParams }) => {
  const redirectUrl = `/student/modul/detail-modul/${params.sub_modul_uuid}/deskripsi-latihan-soal/${params.quiz_uuid}/${params.test_type_id}`;
  return (
    <>
      <AfterTest
        props={{
          sub_modul_uuid: params.sub_modul_uuid,
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
