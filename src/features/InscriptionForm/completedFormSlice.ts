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
            state.completed = !state.completed
        }
    }
})

export const { toggleCompletedForm } = completedFormSlice.actions
export default completedFormSlice.reducer