import Taro, { Component } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

import "./cart.scss";

class Cart extends Component {
  config = {
    navigationBarTitleText: "购物车",
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
      <View className="g_cart flex_center h_full">
        <Text className="u_red">购物车页</Text>
      </View>
    );
  }
}

export default Cart;
