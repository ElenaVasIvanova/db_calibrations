import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import calibrationService  from './calibrationService'
const initialState = {
	calibrations: [],
	calibration: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: ''
} 
//Create new calibration
export const createCalibration = createAsyncThunk(
	'calibration/create', async (calibrationData, thunkAPI) => {
		//console.log(user)
		try{
			const token = thunkAPI.getState().auth.user.token
			return await calibrationService.createCalibration(calibrationData, token)
		} catch (error) { 
			const message = (error.response && error.response.data && error.response.data.message)
			|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	})
//Update calibration
export const updateCalibration = createAsyncThunk(
	'calibration/update', async ({UpdateData, calibrationId}, thunkAPI) => {
		try{
			const token = thunkAPI.getState().auth.user.token
			return await calibrationService.updateCalibration(UpdateData, calibrationId, token)
		} catch (error) { 
			const message = (error.response && error.response.data && error.response.data.message)
			|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	})
//Get calibrations
export const getCalibrations = createAsyncThunk(
	'calibration/getAll', async (_, thunkAPI) => {
		//console.log(user)
		try{
			const token = thunkAPI.getState().auth.user.token
			return await calibrationService.getCalibrations(token)
		} catch (error) { 
			const message = (error.response && error.response.data && error.response.data.message)
			|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	})
//Get calibration
export const getCalibration = createAsyncThunk(
	'calibration/get', async (calibrationId, thunkAPI) => {
		//console.log(user)
		try{
			const token = thunkAPI.getState().auth.user.token
			return await calibrationService.getCalibration(calibrationId, token)
		} catch (error) { 
			const message = (error.response && error.response.data && error.response.data.message)
			|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	})
//Delete calibration
export const deleteCalibration = createAsyncThunk(
	'calibration/delete', async (calibrationId, thunkAPI) => {
		//console.log(user)
		try{
			const token = thunkAPI.getState().auth.user.token
			return await calibrationService.deleteCalibration(calibrationId, token)
		} catch (error) { 
			const message = (error.response && error.response.data && error.response.data.message)
			|| error.message || error.toString()
			return thunkAPI.rejectWithValue(message)
		}
	})
export const calibrationSlice = createSlice({
	name: 'calibration',
	initialState,
	reducers: {
		reset: (state) => initialState
	},
	extraReducers: (builder) => {
		builder
		.addCase(createCalibration.pending, (state) => {
			state.isLoading = true 
		})
		.addCase(createCalibration.fulfilled, (state) => {
			state.isLoading = false
			state.isSuccess = true
		})
		.addCase(createCalibration.rejected, (state, action) => {
			state.isLoading = false
			state.isError = true
			state.message = action.payload
		})
		.addCase(getCalibrations.pending, (state) => {
			state.isLoading = true 
		})
		.addCase(getCalibrations.fulfilled, (state, action) => {
			state.isLoading = false
			state.isSuccess = true
			state.calibrations = action.payload
		})
		.addCase(getCalibrations.rejected, (state, action) => {
			state.isLoading = false
			state.isError = true
			state.message = action.payload
		})
		.addCase(getCalibration.pending, (state) => {
			state.isLoading = true 
		})
		.addCase(getCalibration.fulfilled, (state, action) => {
			state.isLoading = false
			state.isSuccess = true
			state.calibration = action.payload
		})
		.addCase(getCalibration.rejected, (state, action) => {
			state.isLoading = false
			state.isError = true
			state.message = action.payload
		})
		.addCase(deleteCalibration.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.message = action.payload;
		})
		.addCase(deleteCalibration.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(deleteCalibration.fulfilled, (state, action) => {
			state.isLoading = false
			state.isSuccess = true;
			state.calibrations = state.calibrations.filter(
				(calibration) => calibration._id !== action.payload._id
				);
		})
		.addCase(updateCalibration.pending, (state) => {
			state.isLoading = true 
		})
		.addCase(updateCalibration.fulfilled, (state, action) => {
			state.isLoading = false
			state.isSuccess = true
			state.calibrations.push(action.payload)
		})
		.addCase(updateCalibration.rejected, (state, action) => {
			state.isLoading = false
			state.isError = true
			state.message = action.payload
		})
	}
})
export const {reset} = calibrationSlice.actions
export default calibrationSlice.reducer
