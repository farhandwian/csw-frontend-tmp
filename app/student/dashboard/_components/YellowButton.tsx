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
      className={`mt-2 bg-yellow-400 text-white
      hover:!bg-yellow-500 focus:ring-0 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RedButton;
