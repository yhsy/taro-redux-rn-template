// 根据环境变量配置不同的接口地址(前缀)
const getBaseUrl = (url) => {
  let BASE_URL = '';
  if (process.env.NODE_ENV === 'development') {
    // console.log('开发环境')
    //开发环境 - 根据请求不同返回不同的BASE_URL
    if (url.includes('/api/')) {
      BASE_URL = 'http://localhost:7001';
    } else if (url.includes('/iatadatabase/')) {
      BASE_URL = '';
    }
  } else {
    // console.log('生产环境')
    // 生产环境
    if (url.includes('/api/')) {
      BASE_URL = ''
    } else if (url.includes('/iatadatabase/')) {
      BASE_URL = ''
    }
  }
  return BASE_URL
}

export default getBaseUrl;
