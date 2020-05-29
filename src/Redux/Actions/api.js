import { API_REQUEST } from "./actionsTypes";

export const apiCall = (apiData) => ({
  type: API_REQUEST,
  apiData
})