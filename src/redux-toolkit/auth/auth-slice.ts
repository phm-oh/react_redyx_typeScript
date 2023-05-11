import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface AuthState {
  profile: string
}

const initialState: AuthState = {
  profile: 'Phanumet',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions

export const selectAuthSate = (state: RootState) => state.authSate
export default authSlice.reducer