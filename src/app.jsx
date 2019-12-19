import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

// 首页模板
// import Index from './pages/index';
// dvajs实例
// import Index from './pages/dva';
import Index from './pages/home'



/* Redux状态管理-start */
  // Redux默认配置
  // import configStore from './store'

  // Redux入口文件
  // const store = configStore()
/* Redux状态管理-end */

/* Dva状态管理-start */
// Dva配置
import dva from './store/dva'
import models from './models'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  // onError(e, dispatch) {
  //   dispatch(action("sys/error", e));
  // },
});
const store = dvaApp.getStore();
/* Dva状态管理-end */

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      // 'pages/index/index',
      // 'pages/dva/index',
      // 首页
      'pages/home/index',
      // 登录页
      'pages/login/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
