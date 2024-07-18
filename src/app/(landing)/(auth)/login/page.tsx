"use client";
import Navbar from "../../../../components/Navbar";
import React, { useState, Suspense } from "react";
import LoginSection from "./_components/Login";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginSection />
      </Suspense>
    </>
  );
};

export default Login;
