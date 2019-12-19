import Taro , { PureComponent } from '@tarojs/taro';
import { View, Button, Text, Input, Image } from '@tarojs/components'

// 状态管理
import {connect} from '@tarojs/redux'
// Action方法
import action from '../../store/action'

import './login.scss'

@connect(({count, user, loading}) => ({
    ...user,
    // 异步loading状态
    isLoading: loading.effects["count/login"],
  }))

class Login extends PureComponent {

    config = {
        navigationBarTitleText: '登录页',
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        navigationStyle: 'default',
    }

  state={
    username: '',
    password: '',
  }

    // 登录
    login = () => {
        const { username,password} = this.state;
        const payload = {
            username,
            password,
        }
        this.props.dispatch(action("user/login",payload));
    }

  render() {
    // redux里的数据
    const { userInfo} = this.props;
    // 组件的state
    const { username, password } = this.state;
    return (
      <View>
         <View className='m_login'>
            <View className="ipt_item">
              <Text className='ipt_label'>账号:</Text>
              <Input 
                className='ipt_text' 
                type='text' 
                placeholder='请输入账号'
                value={username}
                onInput={(e)=>{
                  // console.log(e.target.value)
                  const val = e.target.value;
                  this.setState({
                    username: val
                  })
                }}
              />
            </View>
            <View className="ipt_item">
              <Text className='ipt_label'>密码:</Text>
              <Input 
                className='ipt_text' 
                type="password"
                password={true}
                placeholder='请输入密码'
                value={ password }
                onInput={(e)=>{
                  // console.log(e.target.value)
                  const val = e.target.value;
                  this.setState({
                    password: val
                  })
                }}
              />
            </View>
            <View className="ipt_item">
              <Button className='btn_login' onClick={this.login}>
                <Text className='add_btn_text'>登录</Text>
              </Button>
            </View>
            {/* 个人信息 */}
            {/* 
              {
                userInfo.msg && (
                  <View className="user_info">
                    <Text className="text-red">{`个人信息:${userInfo.msg}`}</Text>
                    <Text>{`用户ID:${userInfo.data.id}`}</Text>
                    <Text>{`用户昵称:${userInfo.data.nickname}`}</Text>
                    <Image src={userInfo.data.avatar} />
                  </View>
                )
              } 
            */}
          </View>
      </View>
    );
  }
}
export default Login;