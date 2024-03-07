import React from "react";
import { Button } from "flowbite-react";

interface GreenButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const GreenButton = ({
  className,
  children,
  onClick,
  ...props
}: GreenButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={` bg-pl-GreenButton text-white hover:!bg-[#8ad423] focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GreenButton;
