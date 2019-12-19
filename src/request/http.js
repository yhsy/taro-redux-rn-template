import '@tarojs/async-await'
import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'

// 获取Storage里面的值
function getStorage(key) {
  return Taro.getStorage({ key })
    .then((res) => {
      // res.data
      // console.log(`正确的getStorage:${JSON.stringify(res)}`)
      // console.log(`resData:${res.data}`);
      return res.data;
    })
    .catch((err) => {
      console.log(`错误:${JSON.stringify(err)}`)
    })
}

// 请求接口鉴权(暂时不用)
// interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

// 请求封装
class httpRequest {
  
  async baseOptions(params, method = "GET") {
    let { url, data } = params;
    // 根据接口前缀获取接口网址
    const BASE_URL = getBaseUrl(url);

    let contentType = "application/json";
    contentType = params.contentType || contentType;

    // 异步获取token的值(Taro同步不支持RN)
    const tokens = await getStorage('token');
    // console.log(`tokensJSON:${JSON.stringify(tokens)}`);

    let authorization = '';
    if(tokens) {
      authorization = `Bearer ${tokens}`;
    }
    
    const option = {
      url: BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        'Authorization': authorization,
        'id': data.id || 0,
      }
    };
    // console.log(`option: ${JSON.stringify(option)}`)
    return Taro.request(option);
  }

  get(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option);
  }

  post(url, data, contentType) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  }

  put(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  }

  delete(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }

}

export default new httpRequest()
