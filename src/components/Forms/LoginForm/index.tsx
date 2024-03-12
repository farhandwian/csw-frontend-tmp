// LoginForm.tsx
"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Input";
import Button from "../../Button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userLogin } from "@/store/auth/authActions";
import { AppDispatch, useAppSelector } from "@/store";
import { Alert } from "flowbite-react";

import { HiInformationCircle } from "react-icons/hi";
import { Spinner } from "flowbite-react";

import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const { loading, userInfo, error, success } = useAppSelector(
    (state) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();
  const validationSchema = Yup.object().shape({
    username: Yup.string() // Change from "email" to "username"
      .required("Harap masukkan username"),
    password: Yup.string()
      .min(5, "Password minimal 8 karakter")
      .required("Harap masukkan password"),
  });

  const formik = useFormik({
    initialValues: {
      username: "", // Change from "email" to "username"
      password: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log("Login submitted with values:", data);
      // Add your login logic here
      dispatch(userLogin(data));
    },
  });

  // const router = useRouter();

  // useEffect(() => {
  //   // redirect authenticated user to profile screen
  //   if (userInfo) router.push("/user-profile");
  // }, [router, userInfo]);
  return (
    <form onSubmit={formik.handleSubmit}>
      {error && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Info alert!</span> {error}
        </Alert>
      )}
      <div className="space-y-2">
        <Input
          placeHolder="Masukkan Username Anda" // Change placeholder
          fieldName="username" // Change from "email" to "username"
          fieldType="text" // Change from "email" to "text"
          label="Username" // Change label
          value={formik.values.username} // Change from "email" to "username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.username} // Change from "email" to "username"
          touched={formik.touched.username || false} // Change from "email" to "username"
        />
        <Input
          fieldType="password"
          fieldName="password"
          placeHolder="Enter your password"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password || false}
        />
        <div className="flex w-full justify-end">
          <p className="mt-2 font-medium text-[#5E5252] hover:text-indigo-500">
            <Link href={"/forgot-pass"}>Forgot Pass ?</Link>
          </p>
        </div>

        <Button type="submit">{loading ? <Spinner /> : "Login"}</Button>
      </div>
    </form>
  );
};

export default LoginForm;
