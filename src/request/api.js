/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

// 登录接口
export const login = (postData) => {
  console.log('login请求进来了')
  // console.log(`data is ${JSON.stringify(postData)}`)
  // 封装请求
  return HTTPREQUEST.post('/api/admin/login', postData)
}

// 获取个人信息
export const getUserInfo = (params) => {
  // console.log(`params:${JSON.stringify(params)}`)
  // 封装请求
  return HTTPREQUEST.get('/api/admin/info', params);
}