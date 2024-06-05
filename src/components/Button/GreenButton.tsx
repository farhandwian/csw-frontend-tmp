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
      className={`h-7 w-fit bg-pl-GreenButton text-white hover:!bg-[#8ad423] focus:ring-0 md:h-fit md:w-fit ${className}`}
      {...props}
    >
      <h1 className="text-xs">{children}</h1>
    </Button>
  );
};

export default GreenButton;
