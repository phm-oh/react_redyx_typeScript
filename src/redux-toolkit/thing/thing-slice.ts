import { createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface thingState {
  thaiMessage: string
  engMessage:string
  
}

const initialState: thingState = {
  thaiMessage: 'จองรถออนไลน์',
  engMessage:'Online car reserve'
  
}

export const thingSlice = createSlice({
  name: 'thing',
  initialState: initialState,
  reducers: {
    updateThingAcion: (state) => {
      state.thaiMessage = 'ระบบจองห้องประชุมออนไลน์';
      state.engMessage = 'Online Meeting Room';
      
    },
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = authSlice.actions
export const { updateThingAcion } = thingSlice.actions
export const selectThinghSate = (state: RootState) => state.thingSate
export default thingSlice.reducer