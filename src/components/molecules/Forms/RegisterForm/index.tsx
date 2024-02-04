// RegisterForm.tsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../../atoms/Input";
import Button from "@/components/atoms/Button";

const RegisterForm: React.FC = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    nomorWA: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: Yup.string()
      .email("Harap masukkan email dengan benar")
      .required("Harap masukkan email"),
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
      email: "",
      password: "",
      nama: "",
      nomorWA: "",
      kelas: "",
      provinsi: "",
      kabupatenKota: "",
      kecamatan: "",
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
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <Input
          placeHolder="Masukkan Nama Anda"
          fieldName="nama"
          fieldType="text"
          label="Nama"
          value={formik.values.nama}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.nama}
          touched={formik.touched.nama || false}
        />
        <Input
          placeHolder="Masukkan Email Anda"
          fieldName="email"
          fieldType="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email || false}
        />
        <Input
          placeHolder="Masukkan Nomor Whatsapp Anda"
          fieldName="nomorWA"
          fieldType="text"
          label="Nomor Whatsapp"
          value={formik.values.nomorWA}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.nomorWA}
          touched={formik.touched.nomorWA || false}
        />
        <Input
          placeHolder="Pilih Provinsi"
          fieldName="provinsi"
          fieldType="text"
          label="Provinsi"
          value={formik.values.provinsi}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.provinsi}
          touched={formik.touched.provinsi || false}
        />
        <Input
          placeHolder="Pilih Kabutpaten/Kota"
          fieldName="kabupatenKota"
          fieldType="text"
          label="Kabupaten/Kota"
          value={formik.values.kabupatenKota}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.kabupatenKota}
          touched={formik.touched.kabupatenKota || false}
        />
        <Input
          placeHolder="Pilih Kecamatan"
          fieldName="kecamatan"
          fieldType="text"
          label="Kecamatan"
          value={formik.values.kecamatan}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.kecamatan}
          touched={formik.touched.kecamatan || false}
        />
        <Input
          fieldType="password"
          fieldName="password"
          placeHolder="Masukkan Password"
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
          placeHolder="Masukkan Password"
          label="Konfirmasi Password"
          value={formik.values.konfPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.konfPassword}
          touched={formik.touched.konfPassword || false}
        />
        <Input
          placeHolder="Pilih Kelas"
          fieldName="kelas"
          fieldType="text"
          label="Kelas"
          value={formik.values.kelas}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.kelas}
          touched={formik.touched.kelas || false}
        />
      </div>
      <Button type="submit">Daftar</Button>
    </form>
  );
};

export default RegisterForm;
