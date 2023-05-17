import {
  createAsyncThunk,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { login, logout } from "../../services/auth.service";
import { LoginFormInput } from "../../app-types/login-form-input.type";
import { LoginResponse } from "../../app-types/login.type";

export interface AuthState {
  profile: string;
  email: string;

  //ของจริง
  loginResponse: LoginResponse | null
}

const initialState: AuthState = {
  profile: "Kroo Phanumet  Chommpun",
  email: "phanumet@gmail.com",
  loginResponse : null  ,
};

export const loginThunk = createAsyncThunk(
  "auth/loginThunkStatus",
  async (user: LoginFormInput) => {
    try {
      const response = await login(user.email, user.password);
      console.log(response.data);

      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    updateProfileAcion: (state) => {
      state.profile = "Kroo Oh";
      state.email = "oh@udvc.ac.th";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const { updateProfileAcion } = authSlice.actions;
export const selectAuthSate = (state: RootState) => state.authSate;
export default authSlice.reducer;
