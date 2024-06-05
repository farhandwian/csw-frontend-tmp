import React from "react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 md:p-5">
      <div className="">...loading</div>
    </div>
  );
};

export default Loading;
