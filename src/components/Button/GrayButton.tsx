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
      className={`m-auto bg-gray-400 text-white hover:!bg-gray-500 focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GrayButton;
