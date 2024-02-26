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
      className="mb-2 me-2 rounded-lg bg-yellow-400 p-1 text-sm font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
    >
      {children}
    </button>
  );
};

export default YellowButton;
