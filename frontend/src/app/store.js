import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import calibrationReducer from '../features/calibrations/calibrationSlice'
import noteReducer from '../features/notes/noteSlice'
export const store = configureStore({
	reducer: {
		auth: authReducer,
		calibration: calibrationReducer,
		notes: noteReducer,
	}
})