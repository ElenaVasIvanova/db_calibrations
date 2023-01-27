import axios from "axios";
const API_URL = 'http://db-calibrations-loft-api.onrender.com/calibrations/'
const createCalibration = async (calibrationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, calibrationData, config)
  return response.data
}
const updateCalibration = async (updateData, calibrationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.put(API_URL + calibrationId, updateData, config)
  return response.data
}
const getCalibrations = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL, config)
  return response.data
}
const getCalibration = async (calibrationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL + calibrationId, config)
  return response.data
}
const deleteCalibration = async (calibrationId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(API_URL + calibrationId, config)
  return response.data
}
const calibrationService = {
  createCalibration,
  getCalibrations,
  getCalibration,
  deleteCalibration,
  updateCalibration
}
export default calibrationService
