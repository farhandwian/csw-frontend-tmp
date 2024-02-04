import React, { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  const buttonStyles = `
    mt-8 flex w-full justify-center py-3 rounded-full text-lg font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
    ${
      variant === "primary"
        ? "bg-[#090963] text-white"
        : "bg-gray-500 text-[#E2E8F0]"
    }
  `;

  return <button className={buttonStyles} {...props} />;
};

export default Button;
