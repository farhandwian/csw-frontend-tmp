"use client";
import TableHistoryPretestItem from "@/app/student/uji-kemampuan/_components/list-per-modul/TableHistoryTestItem";
import TablePretestItem from "@/app/student/uji-kemampuan/_components/list-per-modul/TableTestItem";
import { TTestType } from "@/types/index";
import { TQuizAllParams } from "@/types/uji-kemampuan";
import Breadcrumbs from "@/app/student/_components/Breadcrumbs";
const Page = ({ params }: { params: TQuizAllParams }) => {
  console.log(params.sub_module_uuid);
  const testType: TTestType = "pretest";
  return (
    <>
      <Breadcrumbs widthReduction={"54px"} fontSize="12px" />

      <section className="relative min-w-36 p-4 md:p-5">
        <div className={`flex w-[100%]`}>
          <div className="relative w-[70%] ">
            {/* list pretest card */}
            <TablePretestItem
              sub_module_uuid={params.sub_module_uuid}
              testType={testType}
            />
          </div>
          {/* list histori pretest */}
          <div className="w-[30%]">
            <TableHistoryPretestItem
              sub_module_uuid={params.sub_module_uuid}
              testType="pretest"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
