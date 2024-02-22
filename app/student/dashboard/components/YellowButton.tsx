"use client";

import { Menu } from "@headlessui/react";
import { ReactNode } from "react";
// const YellowButton = styled(Button)`
//   color: #58ba76;
//   padding: 5px;
//   font-size: 10px;
//   background-color: #fbe360;
//   :hover {
//     background-color: #ffec80;
//   }
// `;

const YellowButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm p-1 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      {children}
    </button>
  );
};

export default YellowButton;
