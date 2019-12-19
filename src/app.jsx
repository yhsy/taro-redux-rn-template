// 基础依赖
import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

// 首页模板
import Index from '@pages/home'

/* Dva状态管理-start */
// Dva配置
import dva from '@store/dva'
import models from '@models/index'

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
    // 页面路由
    pages: [
      // 'pages/index/index',
      // 'pages/dva/index',
      // 首页
      'pages/home/index',
      // 登录页
      'pages/login/index',
      // 分类
      'pages/cate/index',
      // 购物车
      'pages/cart/index',
      // 我的
      'pages/user/index'
    ],
    // 用于设置状态栏、导航条、标题、窗口背景色
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '西瓜购',
      navigationBarTextStyle: 'black'
    },
    // 全局tabBar配置
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [
        {
          pagePath: "pages/home/index",
          iconPath: "./assets/tab-bar/home.png",
          selectedIconPath: "./assets/tab-bar/home-active.png",
          text: "首页"
        }, 
        {
          pagePath: "pages/cate/index",
          iconPath: "./assets/tab-bar/cate.png",
          selectedIconPath: "./assets/tab-bar/cate-active.png",
          text: "分类"
        },
        {
          pagePath: "pages/cart/index",
          iconPath: "./assets/tab-bar/cart.png",
          selectedIconPath: "./assets/tab-bar/cart-active.png",
          text: "购物车"
        },
        {
          pagePath: "pages/user/index",
          iconPath: "./assets/tab-bar/user.png",
          selectedIconPath: "./assets/tab-bar/user-active.png",
          text: "我的"
        }
      ]      
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
