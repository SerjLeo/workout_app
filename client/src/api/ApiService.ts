import axios, {Method} from 'axios'

const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://dev.api.serjleodev.ru'
})

apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if(token && config.headers) config.headers.Authorization = token
  return config
})

export default class ApiService {
  static async apiRequest(url: string, params: Record<string, unknown> = {}, method: Method = 'GET') {
    try {
      const response = await apiInstance({
        method,
        url,
        data: method.toUpperCase() !== 'GET' ? params : [],
        params: method.toUpperCase() === 'GET' ? params : []
      })
      return response.data
    } catch (e: unknown) {
      // const error: ApiHTTPError = e
      return {errors: e}
    }
  }
}
