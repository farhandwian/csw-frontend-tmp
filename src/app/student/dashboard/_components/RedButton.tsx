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
      className={`hover:!bg-[#f3736ccc ] mx-auto mt-2 bg-[#f3736c]
      text-white focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RedButton;
