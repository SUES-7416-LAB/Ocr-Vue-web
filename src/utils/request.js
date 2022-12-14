import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: 'http://test.com',
  timeout: 5000
})

// 响应拦截器
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error((message)))
  }
}, error => {
  Message.error(error.message)
  return Promise.reject(error)
})

export default service
