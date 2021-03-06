import http from '@/axios/axios'
import * as T from './types'

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
}
export default loginApi
