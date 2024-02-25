import ax from 'axios'
import { StorageUtils } from '../utils'
import Config from '.'

interface AxiosConnection {
  baseApiUrl: any
  logoutUrl: string
}

const getAxios = ({ baseApiUrl, logoutUrl }: AxiosConnection) => {
  const axios = ax.create({
    baseURL: baseApiUrl,
    headers: {
      common: {
        'Content-Type': 'application/json',
      },
    },
    timeout: 50000,
  })

  axios.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error.response)
    },
  )

  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.group('network error')
      console.error(error?.response)
      console.error(error)
      console.groupEnd()
      if (error?.response?.data?.code === 1012) {
        StorageUtils.removeAllStorage()
        return (window.location.href = logoutUrl)
      }
      return Promise.reject(error.response || error)
    },
  )

  return axios
}

const config = new Config(process.env)
export const axios = getAxios({ baseApiUrl: `${config.endpoints.https}`, logoutUrl: '' })