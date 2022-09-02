import { createSlice } from "@reduxjs/toolkit";


export const ResumeSlice = createSlice({
    name: 'resume',
    initialState:{},
    reducers: {
        submitForm: (state, action) => {
            console.log(action.payload, 'action payload')
            state.resume = {...state.resume, resume: action.payload}
        }
    }
})

export const { submitForm } = ResumeSlice.actions;

export default ResumeSlice.reducer;