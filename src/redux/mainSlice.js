import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    location: '',
    isSpy: '',
    idRoom: 0
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        addData(state, action) {
            state.location = action.payload[1]
            state.isSpy = action.payload[0] === 'you-spy' ? true : false
            state.idRoom = action.payload[2]
        }
    },
})

export const { addData } = mainSlice.actions

export default mainSlice.reducer