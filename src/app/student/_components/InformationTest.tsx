import React, { ReactNode } from "react";

interface InformationTestProps {
  informasi: any;
}

const InformationTest = ({ informasi }: InformationTestProps) => {
  const informasiArray: [string, ReactNode][] = Object.entries(informasi);

  return (
    <>
      {/* informasi test */}
      <div className="mb-5 flex max-w-max flex-col flex-wrap rounded-2xl border bg-white py-2 md:flex-row md:flex-nowrap">
        {informasiArray.map(([key, value], index) => (
          <div key={`informasi${key}`} className="flex px-3 py-1 md:p-3">
            <div className="mr-3">
              <p
                className={`inline-block text-xs font-bold text-[#9CA3AF] md:block md:text-sm`}
              >
                {key}
              </p>
              <h1 className="mx-3 inline-block md:hidden">:</h1>
              <p
                className={`inline-block text-xs font-bold text-[#64748B] md:block md:text-sm`}
              >
                {value}
              </p>
            </div>
            {/* horizontal line */}
            {index !== informasiArray.length - 1 && (
              <div className="ml-2 hidden h-[100%] w-[3px] bg-[#E5E7EB] md:block"></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default InformationTest;
