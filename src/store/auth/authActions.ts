import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../const";

import { AuthState } from "./authSlice";

// const backendURL = process.env.BASE_URL;
const backendURL = BASE_URL;

interface RegisterUserArgs {
  email: string;
  password: string;
  nama: string;
  nomorWA: string;
  kelas: string;
  provinsi: string;
  kabupatenKota: string;
  kecamatan: string;
  konfPassword: string;
}

interface TransformedRegisterData {
  Name: string;
  Email: string;
  Phone: string;
  Province: string;
  Regency: string;
  District: string;
  Password: string;
  ConfirmPassword: string;
  Class: string;
}

const transformRegisterData = (
  data: RegisterUserArgs,
): TransformedRegisterData => {
  const transformedRegisterData: TransformedRegisterData = {
    Name: data.nama,
    Email: data.email,
    Phone: data.nomorWA,
    Province: data.provinsi,
    Regency: data.kabupatenKota,
    District: data.kecamatan,
    Password: data.password,
    ConfirmPassword: data.konfPassword,
    Class: data.kelas,
  };

  return transformedRegisterData;
};

export const registerUser = createAsyncThunk<
  string,
  RegisterUserArgs,
  {
    rejectValue: string;
  }
>("auth/register", async (RegisterUserArgs, { rejectWithValue }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const transformedData = transformRegisterData(RegisterUserArgs);

    const response = await axios.post(
      `${backendURL}/api/v1/account/register`,
      transformedData,
      config,
    );
    // Return a success message or data if needed
    return response.data.message || "User registered successfully";
  } catch (error: any) {
    // Return custom error message from backend if present
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

//-----------------------------------------------------------------------------------------------------------------------

interface UserLoginArgs {
  username: string;
  password: string;
}

interface UserLoginDataFromResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

const transformLoginData = (data: UserLoginDataFromResponse): AuthState => {
  const { id, username, email, firstName, lastName, gender, image, token } =
    data;

  const transformedData: AuthState = {
    loading: false,
    userInfo: {
      name: firstName + " " + lastName,
      username,
      image,
    },
    userToken: token,
    error: null,
    success: true,
  };

  return transformedData;
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }: UserLoginArgs, { rejectWithValue }) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const transformedResponse = transformLoginData(response.data);

      return transformedResponse;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
