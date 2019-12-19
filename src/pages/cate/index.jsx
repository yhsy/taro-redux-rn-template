import Taro, { PureComponent } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

import "./cate.scss";

class Cate extends PureComponent {
  config = {
    navigationBarTitleText: "分类页",
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
      <View className="g_cate flex_center h_full">
        <Text className="u_red">分类页</Text>
      </View>
    );
  }
}

export default Cate;
