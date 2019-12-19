import Taro, { PureComponent } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

import "./user.scss";

class User extends PureComponent {
  config = {
    navigationBarTitleText: "我的",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTextStyle: "black",
    navigationStyle: "default"
  };

  state = {};

  componentDidMount() {}

  componentWillReceiveProps(nextProps, nextContext) {}

  render() {
    return (
      <View className="g_user flex_center h_full">
        <Text className="u_red">我的页面</Text>
      </View>
    );
  }
}
export default User;
