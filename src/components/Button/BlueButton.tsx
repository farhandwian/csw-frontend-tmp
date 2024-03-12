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
      className={` inline bg-pl-RoyalBlue text-white hover:!bg-[#0d6ed9] focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default BlueButton;