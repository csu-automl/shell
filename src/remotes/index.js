import axios from 'axios'

export const withAuthorization = (authorization, config = {}) => ({
  ...config,
  headers: {
    ...config.headers,
    Authorization: `Bearer ${authorization}`
  }
})

export const AUTH = axios.create({
  baseURL: window.__APP_CONFIG__.auth.url
})

export const BACKEND = axios.create({
  baseURL: window.__APP_CONFIG__.api.host
})
