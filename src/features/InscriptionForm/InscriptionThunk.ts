import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { AppState, AppThunk } from "../../app/store"

import axios from "axios"

export interface CounterState {
    value: number
    status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
    value: 0,
    status: "idle",
}

export const registerPersonaFisica =
    (payload: any): AppThunk =>
    async (dispatch, getState) => {
        try {
            const response = await axios.post(
                "http://localhost:1234/api/persona/fisica",
                JSON.stringify(payload),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            console.log(response)
            return response
        } catch (error) {
            console.error(error)
        }
    }
