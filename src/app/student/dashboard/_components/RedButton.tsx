import React from "react";
import { Button } from "flowbite-react";

interface RedButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const RedButton = ({
  className,
  children,
  onClick,
  ...props
}: RedButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={` mt-2 bg-[#F48891] text-white
      hover:!bg-[#eb9ea5] focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RedButton;
