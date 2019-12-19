// 默认依赖
import Taro, {Component} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

/* 状态管理依赖-start */
import {create} from 'dva-core';
import {connect} from '@tarojs/redux'
// Action方法
import action from '../../store/action'
/* 状态管理依赖-end */

// 样式
import './index.scss'

// 全局状态
@connect(({count, loading}) => ({
  ...count,
  // 异步loading状态
  isLoading: loading.effects["count/asyncAddNum"],
}))

class Home extends Component {
  config = {
    navigationBarTitleText: '首页-Dvajs',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  // 加法运算
  addNum = () => {
    this.props.dispatch(action("count/addNum",this.props.cNum));
  }

  // 减法运算
  minusNum = () => {
    this.props.dispatch(action("count/minusNum",this.props.cNum));
  } 

  // 异步加法
  asyncAddNum = () => {
    this.props.dispatch(action("count/asyncAddNum"));
  }


  render() {
    // redux里的数据
    const { cNum, isLoading} = this.props;

    return (
        <View className='index'>

          <Button className='add_btn' onClick={this.addNum}>
            <Text className='add_btn_text'>+</Text>
          </Button>
          <Button className='dec_btn' onClick={this.minusNum}>
            <Text className='add_btn_text'>-</Text>
          </Button>
          
          <Button className='asc_btn' onClick={this.asyncAddNum}>
              <Text className='add_btn_text'>async+5</Text>
          </Button> 
         
          <View className='num'>
            <Text className='num_text'>{isLoading ? '异步加载中' : cNum}</Text>
          </View>
        </View>
      )
  }
}

export default Home;
