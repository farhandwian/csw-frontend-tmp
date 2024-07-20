import React from "react";
import { Button } from "flowbite-react";

interface BlueButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const BlueButton = ({
  className,
  children,
  onClick,
  ...props
}: BlueButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`h-7 w-fit  bg-pl-RoyalBlue text-white hover:!bg-[#0d6ed9] focus:ring-0 md:h-fit md:w-fit ${className}`}
      {...props}
    >
      <h1 className="text-xs md:text-sm">{children}</h1>
    </Button>
  );
};

export default BlueButton;
