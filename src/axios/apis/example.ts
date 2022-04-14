import http from '@/axios/axios'
import * as T from './types'

export const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}

export const searchTips: T.ISearchTips = {
  tips(params) {
    return http.get('v1/search/tip', params)
  },
}
