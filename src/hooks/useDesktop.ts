import React, { useEffect, useState } from "react";

const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsDesktop(window.innerWidth >= 1023);
    };

    checkWindowWidth();

    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return isDesktop;
};

export default useDesktop;
