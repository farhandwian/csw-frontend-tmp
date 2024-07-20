// "use client";
// import Image from "next/image";
// import React, { useState } from "react";

// import { cleanHtmlContent } from "@/lib/utils/CleanHtmlContent";
// interface PembahasanProps {
//   jawaban?: string;
//   pembahasan?: string;
// }

// const Pembahasan = (props: PembahasanProps) => {
//   const { jawaban, pembahasan } = props;

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className=" mb-7 flex w-full cursor-pointer select-none items-center justify-between gap-x-3 rounded-xl bg-white p-2  md:items-start md:p-4  lg:gap-x-4 lg:px-4 lg:py-6"
//       onClick={toggleOpen}
//     >
//       <div>
//         <h3>Jawaban Yang Benar : </h3>
//         <h3 className="text-xs font-medium text-[#334155] md:text-base">
//           <div
//             className="prose"
//             dangerouslySetInnerHTML={{
//               __html: cleanHtmlContent(jawaban!),
//             }}
//           ></div>
//         </h3>
//         {isOpen && (
//           <p className="mt-4 text-xs text-[#1E293B]/40 md:text-sm lg:text-base">
//             <div
//               className="prose"
//               dangerouslySetInnerHTML={{
//                 __html: cleanHtmlContent(pembahasan!),
//               }}
//             ></div>
//           </p>
//         )}
//       </div>

//       <div className="flex-none">
//         <Image
//           src={"/icon/ic-arrow.svg"}
//           alt="ic-arrow"
//           width={13}
//           height={24}
//           className={` mt-[2px] h-3 w-3 transform md:h-5 md:w-5 lg:h-7 lg:w-7  ${
//             isOpen ? "" : "rotate-180"
//           }`}
//         />
//       </div>
//     </div>
//   );
// };

// export default Pembahasan;

"use client";
import Image from "next/image";
import React, { useState } from "react";

import { cleanHtmlContent } from "@/lib/utils/CleanHtmlContent";

interface PembahasanProps {
  jawaban?: string;
  pembahasan?: string;
}

const Pembahasan = (props: PembahasanProps) => {
  const { jawaban, pembahasan } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="mb-7 flex w-full cursor-pointer select-none items-center justify-between gap-x-3 rounded-xl bg-white p-2 md:items-start md:p-4 lg:gap-x-4 lg:px-4 lg:py-6"
      onClick={toggleOpen}
    >
      <div>
        <h3 className="text-sm">Pembahasan : </h3>
        <h3 className="text-xs font-medium text-[#334155] md:text-sm">
          <div
            className="prose"
            dangerouslySetInnerHTML={{
              __html: cleanHtmlContent(jawaban!),
            }}
          ></div>
        </h3>
        <div
          className={`transition-max-height overflow-hidden duration-500 ease-in-out ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p className="mt-4 text-xs text-[#1E293B]/40 md:text-sm ">
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: cleanHtmlContent(pembahasan!),
              }}
            ></div>
          </p>
        </div>
      </div>

      <div className="flex-none">
        <Image
          src={"/icon/ic-arrow.svg"}
          alt="ic-arrow"
          width={13}
          height={24}
          className={`mt-[2px] h-3 w-3 transform md:h-5 md:w-5 lg:h-7 lg:w-7 ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </div>
    </div>
  );
};

export default Pembahasan;
