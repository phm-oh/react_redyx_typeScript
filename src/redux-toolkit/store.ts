import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth-slice'
import thingReducer from './thing/thing-slice'
import  roomBookingReducer  from './room/room-slice'


export const store = configureStore({
  reducer: {
    authSate: authReducer ,
    thingSate: thingReducer,
    roomBookingState:roomBookingReducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch