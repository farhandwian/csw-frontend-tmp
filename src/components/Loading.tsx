import React from "react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
};

export default Loading;
