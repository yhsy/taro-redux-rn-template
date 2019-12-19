# taro-mall

## 本地环境
#### Node版本: v11.15.0
#### Npm版本:  v6.7.0
#### cNpm版本: v6.1.1
****
### 以下都要用cnpm进行安装
#### Taro版本(非常重要): v1.3.29
`cnpm i -g @tarojs/cli@v1.3.29`
#### Yarn版本: v1.21.1
`cnpm i -g yarn@1.21.1`
#### nrm版本: v1.2.1
`cnpm i -g nrm@1.2.1`
#### 切换npm依赖包的镜像用taobao
`nrm use taobao`

****

## 本地运行

本项目直接调用的网易严选接口（网易登录接口改动，暂时无法登陆）。

``` bash
# 安装依赖，或 npm i
yarn

# 运行小程序，编译后的文件位于项目下的 dist 文件夹

# （微信 dev:weapp，支付宝 dev:alipay）
npm run dev:weapp

# 运行 React Native，请务必查阅文档：https://nervjs.github.io/taro/docs/react-native.html
npm run dev:rn

# 运行 H5
npm run dev:h5

```

## 项目说明



## License

MIT
