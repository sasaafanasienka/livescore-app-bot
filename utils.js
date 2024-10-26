import { BASE_API_URL, API_TOKEN } from "./config.js"

const DEFAULT_PARAMS = {
  APIkey: API_TOKEN,
}

export const getApiUrl = (endpoint, params = {}) => {
  const url = new URL(`${BASE_API_URL}${endpoint}`)
  url.search = new URLSearchParams({ ...DEFAULT_PARAMS, ...params}).toString()
  return url.toString()
}

export const getDate = ({ daysFromNow = 0 } = {}) => {
  const timeStamp = Date.now() + daysFromNow * 24 * 60 * 60 * 1000;
    
  return new Date(timeStamp).toISOString().slice(0, 10);
}

export const dateFormat = (timeStamp) => {
  const date = new Date(timeStamp * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
}