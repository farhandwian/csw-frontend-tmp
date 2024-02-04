// ForgotPassForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../atoms/Input";
import Button from "@/components/atoms/Button";

const ForgotPassForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Harap masukkan email dengan benar")
      .required("Harap masukkan email"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Login submitted with values:", values);
      // Add your login logic here
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-3">
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
        <Button type="submit">Send Reset Link</Button>
      </div>
    </form>
  );
};

export default ForgotPassForm;
