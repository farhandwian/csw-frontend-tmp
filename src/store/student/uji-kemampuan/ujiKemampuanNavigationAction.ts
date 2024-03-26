import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../const";

import { UjiKemampuanState } from "./ujiKemampuanNavigationSlice";

// const backendURL = process.env.BASE_URL;
const backendURL = BASE_URL;

interface NavigationModulArgs {
  type: string;
}

interface NavigationModulResponse {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const transformUjiKemampuanData = (data: NavigationModulResponse) => {
  const { postId, id, name, email, body } = data;

  const transformedData: UjiKemampuanState = {
    loading: false,
    ujiKemampuanData: {
      postId,
      id,
      name,
      email,
      body,
    },
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
