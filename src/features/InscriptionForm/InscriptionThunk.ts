import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { AppState, AppThunk } from "../../app/store"

import axios from "axios"
import { createMessage } from "./messageSlice"
import { toggleCompletedForm } from "./completedFormSlice"
import { setLoading } from "./loadingSlice"

export interface CounterState {
    value: number
    status: "idle" | "loading" | "failed"
}

const initialState: CounterState = {
    value: 0,
    status: "idle",
}

export const loginAunesa =
    (payload: any): AppThunk =>
    async (dispatch, getState) => {
        try {
            const {
                NEXT_PUBLIC_AUNESA_USER: us,
                NEXT_PUBLIC_AUNESA_PASSWORD: pa,
                NEXT_PUBLIC_AUNESA_OPENING_ACOUNT_ENDPOINT: endpoint,
                NEXT_PUBLIC_AUNESA_LOGIN_ENDPOINT: loginEndpoint,
            } = process.env
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
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
            const { data } = await axios.post(
                loginEndpoint,
                loginPayload,
                config
            )
            const { token } = data
        } catch (e) {
            console.error(e)
        }
    }

export const registerPersonaFisica =
    (payload: any): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setLoading(true))
            const {
                NEXT_PUBLIC_AUNESA_USER: us,
                NEXT_PUBLIC_AUNESA_PASSWORD: pa,
                NEXT_PUBLIC_AUNESA_OPENING_ACOUNT_ENDPOINT: endpoint,
                NEXT_PUBLIC_AUNESA_LOGIN_ENDPOINT: loginEndpoint,
            } = process.env
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
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
            const { data } = await axios.post(
                loginEndpoint,
                loginPayload,
                config
            )
            const { token } = data
            const instance = axios.create({
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const res = await instance.post(endpoint, payload)
            dispatch(setLoading(false))
            return res
        } catch (error) {
            // console.error({error, ez: error.response.data.errors[0].detail})
            console.error(error)
            dispatch(setLoading(false))
            dispatch(
                createMessage({
                    active: true,
                    title: "Ocurrió un problema con el formulario",
                    type: "error",
                    message:
                        error.response?.data?.errors[0].detail ||
                        "Consultar con el área de soporte.",
                })
            )
        }
    }

export const sendMailDocumentation =
    (payload: any): AppThunk =>
    async (dispatch, getState) => {
        try {
            dispatch(setLoading(true))
            let formData = new FormData()
            // formData.append("dniFrenteDorso", payload.dniFrenteDorso)
            // formData.append("constanciaOrigenDeFondos", payload.constanciaOrigenDeFondos)
            formData.append("nombre", payload.nombre)
            formData.append("cuit", payload.cuit)
            formData.append("email", payload.email)

            const { data } = await axios.post(
                process.env.NEXT_PUBLIC_EMAIL_ENDPOINT,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
        } catch (error) {
            console.error(error)
            dispatch(setLoading(false))
            dispatch(
                createMessage({
                    active: true,
                    title: "Ocurrió un problema con el envío de documentación.",
                    type: "error",
                    message:
                        error.response?.data?.errors[0].detail ||
                        "Consultar con el área de soporte.",
                })
            )
        }
    }
