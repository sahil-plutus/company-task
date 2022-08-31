import { configureStore } from '@reduxjs/toolkit';
import { resumeSlice } from '../components/ResumeSlice';
import resumeReducer from '../components/ResumeSlice'


export const store = configureStore({
    reducer:{
        resume: resumeReducer,
    }
})