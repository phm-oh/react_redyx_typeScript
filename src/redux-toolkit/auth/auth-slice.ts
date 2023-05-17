import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { login } from "../../services/auth.service";
import { LoginFormInput } from "../../app-types/login-form-input.type";
import { LoginErrorResponse, LoginResponse } from "../../app-types/login.type";
import { AxiosError } from "axios";

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

export const loginThunk = 
createAsyncThunk <LoginResponse  , LoginFormInput ,{rejectValue:LoginErrorResponse} >  
("auth/loginThunkStatus",async (user: LoginFormInput , {rejectWithValue}) => {
    try {
      const response = await login(user.email, user.password);
      console.log(response.data);

      return response.data;
    } catch (error: any) {
      let err : AxiosError<LoginErrorResponse> = error;
      if(!err.response){
        throw error;
      }
      return rejectWithValue(err.response.data);
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

  extraReducers:(builder)=> {
    builder.addCase(loginThunk.fulfilled ,  (state , action: PayloadAction<LoginResponse | null>) => {
           state.loginResponse = action.payload;
    })
  },


});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const { updateProfileAcion } = authSlice.actions;
export const selectAuthSate = (state: RootState) => state.authSate;
export default authSlice.reducer;
