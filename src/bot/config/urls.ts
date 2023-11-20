const BASE_URL = 'http://localhost:3000'

export enum ENDPOINT {
  REGISTER = '/register',
  ADD_GAME = '/addgame'
}

export const getEndpoint = (path: string): string => {
  return BASE_URL + path
}