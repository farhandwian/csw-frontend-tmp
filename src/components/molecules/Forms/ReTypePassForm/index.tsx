// ReTypePassForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../atoms/Input";
import Button from "@/components/atoms/Button";

const ReTypePassForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password minimal 8 karakter")
      .required("Harap masukkan password"),
    konfPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Konfirmasi password harus sesuai dengan password"
    ),
  });

  const formik = useFormik({
    initialValues: {
      email: "Test123@gmail.com",
      password: "",
      konfPassword: "",
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
          isDisabled={true}
        />
        <Input
          fieldType="password"
          fieldName="password"
          placeHolder="Masukkan Password Baru"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password || false}
        />
        <Input
          fieldType="password"
          fieldName="konfPassword"
          placeHolder="Masukkan Konfirmasi Password"
          label="Password"
          value={formik.values.konfPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.konfPassword}
          touched={formik.touched.konfPassword || false}
        />
        <Button type="submit">Login</Button>
      </div>
    </form>
  );
};

export default ReTypePassForm;
