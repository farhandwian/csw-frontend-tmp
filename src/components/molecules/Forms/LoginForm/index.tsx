// LoginForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../atoms/Input";
import Button from "@/components/atoms/Button";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Harap masukkan email dengan benar")
      .required("Harap masukkan email"),
    password: Yup.string()
      .min(8, "Password minimal 8 karakter")
      .required("Harap masukkan password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Login submitted with values:", values);
      // Add your login logic here
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2">
        <Input
          placeHolder="Masukkan Email Anda"
          fieldName="email"
          fieldType="email"
          label="Alamat Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email || false}
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
        <div className="w-full flex justify-end">
          <p className="mt-2 font-medium text-[#5E5252] hover:text-indigo-500">
            <Link href={"/forgot-pass"}>Forgot Pass ?</Link>
          </p>
        </div>
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
