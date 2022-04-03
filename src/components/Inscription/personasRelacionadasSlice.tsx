import { createSlice } from "@reduxjs/toolkit"

export interface PersonasRelacionadasState {
    personas: any
}
const initialState: PersonasRelacionadasState = {
    personas: []
}

export const personasRelacionadasSlice = createSlice({
    name: "personasRelacionadas",
    initialState,
    reducers: {
        onChangePersonas: (state, { payload }) => {
            const filteredForms = state.personas.filter(f => f.index !== payload.index)
            state.personas = [...filteredForms, {...payload }]
            
        },
        removePersonas: (state, { payload }) => {
            const filteredForms = state.personas.filter(f => f.index !== payload.index)
            state.personas = filteredForms     
        },
        addPersonas: (state, { payload }) => {
            state.personas = [...state.personas, payload]
        },
        onChangeRelacion: (state, { payload }) => {
            const editedForm = state.personas.find(f => f.index === payload.index)
            const filteredForms = state.personas.filter(f => f.index !== payload.index)
            state.personas = [...filteredForms, {
                ...editedForm,
                tipo: payload.tipo
            }]
        }
        
        
    },
})

export const { onChangePersonas, removePersonas, addPersonas, onChangeRelacion } = personasRelacionadasSlice.actions
export default personasRelacionadasSlice.reducer
