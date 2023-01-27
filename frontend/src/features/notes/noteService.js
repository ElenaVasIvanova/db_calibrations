import axios from "axios";
const API_URL = 'https://db-calibrations-loft.onrender.com/REACT_SERVER_URL/api/calibrations/'
const getNotes = async (calibrationId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.get(API_URL + calibrationId + '/notes', config)
	return response.data
}
const createNote = async (noteText, calibrationId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
	const response = await axios.post(API_URL + calibrationId + '/notes', 
	{
		text: noteText,
	} 
	,config)
	return response.data
}
const noteService = {
	getNotes,
	createNote
}
export default noteService
