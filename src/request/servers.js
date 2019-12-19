/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"
// import Taro from "@tarojs/taro"

export const getResultData_servers = (postData) => {
  return HTTPREQUEST.post('/api/white-screen/search', postData)
}

// 登录接口
export const login = (postData) => {
  // console.log('login请求进来了')
  console.log(`data is ${JSON.stringify(postData)}`)
  // 封装请求
  return HTTPREQUEST.post('/api/admin/login', postData)
}
