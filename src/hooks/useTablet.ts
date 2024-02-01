import React, { useEffect, useState } from "react";

const useTablet = () => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsTablet(window.innerWidth >= 768);
    };

    checkWindowWidth();

    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return isTablet;
};

export default useTablet;
