"use client";
import Navbar from "../../../../components/Navbar";
import React from "react";
import ForgotPassSection from "./_components/ForgotPass";

const Forgot: React.FC = () => {
  return (
    <>
      <Navbar />
      <ForgotPassSection />
    </>
  );
};

export default Forgot;