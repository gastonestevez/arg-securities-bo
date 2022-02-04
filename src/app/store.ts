import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import messageReducer from '../features/InscriptionForm/messageSlice'
import completedFormReducer from '../features/InscriptionForm/completedFormSlice'
export function makeStore() {
  return configureStore({
    reducer: { counter: counterReducer, message: messageReducer, completedForm: completedFormReducer },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
