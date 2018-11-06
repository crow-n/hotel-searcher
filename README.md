# 酒店搜索  

### 介绍  

请求接口为万维易源网的酒店API，链接如下

`https://www.showapi.com/api/view/1653`

UI使用ant design mobile，使用方式请自行搜索API文档

&nbsp;
实现功能：  

+ 设置酒店筛选条件
+ 搜索、显示酒店列表
+ 展示酒店详情页
+ 展示房间列表及详情页
+ 酒店图片浏览
+ 查看酒店定位地图

&nbsp;

由于酒店api接口中，关于订单的接口有问题，所以没有实现订单相关的功能，请见谅。

&nbsp;

### 环境搭建

#### 申请接口

详情在我的million-menus仓库有讲，可前往查看

`https://github.com/crow-n/million-menus`

&nbsp;

#### 修改项目参数

将项目克隆至本地后，将 `src/request/hotel.js` 文件中的 `showapi_appid` 和 `showapi_sign`参数

改为你申请的 `appId` 和 `密钥`

&nbsp;

#### 启动项目

`npm install` 安装所有模块
`npm start` 开发环境下启动项目

建议在谷歌浏览器中运行，

虽然项目是自适应的，但还是更建议选择 iphone 6/ 7/ 8 的调试模式，展示效果会更好

&nbsp;

### 项目展示

![设置筛选条件](https://github.com/crow-n/hotel-searcher/raw/master/preview/fastsearch.gif)

&nbsp;
&nbsp;

![查询到的酒店列表](https://github.com/crow-n/hotel-searcher/raw/master/preview/hotels.gif)

&nbsp;
&nbsp;

![酒店详情页-图片浏览,定位地图](https://github.com/crow-n/hotel-searcher/raw/master/preview/hoteldetail1.gif)

&nbsp;
&nbsp;

![酒店详情页-房间列表 及 房间详情页 ](https://github.com/crow-n/hotel-searcher/raw/master/preview/rooms.gif)

&nbsp;
&nbsp;

![酒店详情页-周边交通景点](https://github.com/crow-n/hotel-searcher/raw/master/preview/hoteldetail2.gif)

&nbsp;

### 最后

感谢各位能看到最后，如果觉得本项目做的还不错的，麻烦给个小星星支持一下，有什么问题也可以提出来探讨哦~
