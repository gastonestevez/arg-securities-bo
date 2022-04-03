import { createSlice } from "@reduxjs/toolkit"

export interface completedFormState {
    completed: boolean
}
const initialState: completedFormState = {
    completed: false,
}

export const completedFormSlice = createSlice({
    name: "completedForm",
    initialState,
    reducers: {
        toggleCompletedForm: (state) => {
            state.completed = true
        },
        resetForm: (state) => {
            state.completed = false
        }
    }
})

export const { toggleCompletedForm, resetForm } = completedFormSlice.actions
export default completedFormSlice.reducer