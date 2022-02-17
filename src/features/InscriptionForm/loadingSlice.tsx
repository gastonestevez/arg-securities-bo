import { createSlice } from "@reduxjs/toolkit"

export interface LoadingState {
    isLoading: boolean
}
const initialState: LoadingState = {
    isLoading: false
}

export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.isLoading = payload
            
        }
    },
})

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer
