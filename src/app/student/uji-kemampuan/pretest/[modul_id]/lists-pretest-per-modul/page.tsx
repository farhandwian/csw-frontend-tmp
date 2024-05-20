"use client";
import { useState } from "react";

import TableHistoryPreTestItem from "../../_components/list-per-modul/TableHistoryTestItem";
import TablePreTestItem from "../../_components/list-per-modul/TableTestItem";

const Page = () => {
  const [isHaveModul, setIsHaveModul] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <>
      <section className="relative min-w-36 p-4 md:p-5">
        <div className={`${!isHaveModul && "hidden"}`}>
          <h1>Pretest SKD Bagian TWK</h1>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            nesciunt.
          </h3>
        </div>

        <div className={`mt-3 flex w-[100%]`}>
          <div className="relative w-[70%] ">
            {/* list pretest card */}
            <TablePreTestItem
              isHaveModul={isHaveModul}
              currentPage={currentPage}
              onPageChange={onPageChange}
              typeTest="pretest"
            />
          </div>
          {/* list histori pretest */}
          <div className="w-[30%]">
            <TableHistoryPreTestItem
              isHaveModul={isHaveModul}
              typeTest="pretest"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
