// LoginForm.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Input";
import Button from "../../Button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { userLogin } from "@/store/auth/authActions";
import { AppDispatch, useAppSelector } from "@/store";
import { Alert } from "flowbite-react";
import { toast } from "sonner";
import { NextPage } from "next";

import { HiInformationCircle } from "react-icons/hi";
import { Spinner } from "flowbite-react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const LoginForm: NextPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined | null>("");
  const [loading, setLoading] = useState<boolean>(false);

  // const { loading, userInfo, error, success } = useAppSelector(
  //   (state) => state.auth,
  // );
  const dispatch = useDispatch<AppDispatch>();
  const validationSchema = Yup.object().shape({
    email: Yup.string() // Change from "email" to "email"
      .required("Harap masukkan email"),
    password: Yup.string()
      .min(5, "Password minimal 8 karakter")
      .required("Harap masukkan password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "", // Change from "email" to "email"
      password: "",
    },
    validationSchema,
    onSubmit: async (data) => {
      console.log("Login submitted with values:", data);
      setLoading(true);
      try {
        const response = await signIn("login", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (response?.url === null) {
          setError(response?.error);
        }

        if (response?.ok && response?.url !== null) {
          toast.success(`Login Success. Welcome ${data.email}`);
          router.push(searchParams.get("callbackUrl") || "/home-page");
        } else {
          setError(response?.error);
        }
      } catch (error) {
        setError(error as string);
      }
      setLoading(false);
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
          placeHolder="Masukkan Email Anda" // Change placeholder
          fieldName="email" // Change from "email" to "email"
          fieldType="text" // Change from "email" to "text"
          label="Email" // Change label
          value={formik.values.email} // Change from "email" to "email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email} // Change from "email" to "email"
          touched={formik.touched.email || false} // Change from "email" to "email"
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
