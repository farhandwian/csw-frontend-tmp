import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
import ModulFAB from "@/app/student/modul/detail-modul/[sub_modul_uuid]/_components/ModulFAB";
import TableNilai from "@/app/student/modul/detail-modul/[sub_modul_uuid]/nilai/_components/TableNilai";
import { TNilaiParams } from "@/types/modul";

const Page = ({ params }: { params: TNilaiParams }) => {
  return (
    <>
      <Breadcrumbs widthReduction={"54px"} />

      <section className="relative p-4 md:p-5">
        <ModulFAB modulUUID={params.sub_modul_uuid}></ModulFAB>
        <TableNilai params={params} />
        <h1></h1>
      </section>
    </>
  );
};

export default Page;
