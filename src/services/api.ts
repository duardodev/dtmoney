import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dtmoney-sampaiocode.vercel.app/api'
  // baseURL: 'https://localhost:3000/api'
})