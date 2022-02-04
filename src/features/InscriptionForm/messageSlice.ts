import { createSlice } from "@reduxjs/toolkit"

export interface MessageState {
    title: string
    type: string
    message: string
    active: boolean
}
const initialState: MessageState = {
    title: "",
    type: "",
    message: "",
    active: false,
}

export const CREATE_MESSAGE = "CREATE_MESSAGE"

// export const createMessage = (payload: MessageState) => ({
//     type: CREATE_MESSAGE,
//     payload,
// })

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        createMessage: (state, { payload }) => {
            state.active = payload.active
            state.title = payload.title
            state.message = payload.message
            state.type = payload.type
        },
        clearMessage: (state) => {
            state = initialState
        },
    },
})

export const { createMessage, clearMessage } = messageSlice.actions
export default messageSlice.reducer
