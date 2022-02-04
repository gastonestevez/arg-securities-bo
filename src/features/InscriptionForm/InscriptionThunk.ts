import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { AppState, AppThunk } from "../../app/store"

import axios from "axios"
import { createMessage } from "./messageSlice"

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
            const {
                NEXT_PUBLIC_AUNESA_USER: us,
                NEXT_PUBLIC_AUNESA_PASSWORD: pa,
                NEXT_PUBLIC_AUNESA_OPENING_ACOUNT_ENDPOINT: endpoint,
                NEXT_PUBLIC_AUNESA_LOGIN_ENDPOINT: loginEndpoint
            } = process.env
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
            console.log(us, pa, endpoint, loginEndpoint, process.env);
            const loginPayload = {
                clientId: "0303456",
                username: us,
                password: pa,
            }

            const config = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
            const { data } = await axios.post(loginEndpoint, loginPayload, config)
            const { token } = data
            const instance = axios.create({
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const res = await instance.post(endpoint, payload)
            console.log(res)
            return res
            // const response = await axios.post(
            //     "http://localhost:1234/api/persona/fisica",
            //     JSON.stringify(payload),
            //     {
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //     }
            // )
        } catch (error) {
            console.error(error)
            dispatch(createMessage({
                active: true,
                title: 'Hubo un problema con el formulario',
                type: 'error',
                message: error.errors[0].detail
            }))
        }
    }
