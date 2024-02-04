"use client";
import Navbar from "@/components/organisms/Navbar";
import React from "react";
import LoginSection from "../../components/organisms/Login/index";

const Login: React.FC = () => {
  return (
    <>
      <Navbar />
      <LoginSection />
    </>
  );
};

export default Login;
