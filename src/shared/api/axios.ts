import { USER_KEY } from 'shared/const/localStorage'
import axios from 'axios'

export const axiosApi = axios.create({
  baseURL: 'http://localhost:2000',
  headers: {
    Authorization: localStorage.getItem(USER_KEY)
  }
})
