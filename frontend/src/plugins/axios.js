import axios from 'axios'

axios.interceptors.request.use(config => {
  config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})

export default axios
