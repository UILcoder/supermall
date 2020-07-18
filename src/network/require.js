import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })
  //axios拦截器
  //需求拦截
  // instance.interceptors.request.use(config => {
  //   //拦截config
  //   console.log(config)
  //   //拦截后要释放config
  //   return config
  // }, err => {
  //     console.log(err)
  // })

  // //响应拦截
  // instance.interceptors.response.use(res => {
  //   //拦截响应结果
  //   console.log(res)
  //   //只需要返回结果中的数据
  //   return res.data
  // }, err => {
  //    console.log(err)
  //  })
  return instance(config)
}