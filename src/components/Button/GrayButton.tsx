import React from "react";

import { Button } from "flowbite-react";

interface GreenButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const GrayButton = ({
  children,
  onClick,
  className,
  ...props
}: GreenButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`h-7 w-fit bg-gray-400 text-white hover:!bg-gray-500 focus:ring-0 md:h-fit md:w-fit ${className}`}
      {...props}
    >
      <h1 className="text-xs md:text-sm">{children}</h1>
    </Button>
  );
};

export default GrayButton;
