# css-modules-transform-loader
在React+Webpack中，用来配合css-loader模块中的modules使用。

## 为什么要用？

在css-loader中，如果使用modules，则className必须为变量，就导致使用IDE或者插件（Emmet）的自动生成代码功能无法使用，比如使用Emmet时，div.class会自动生成`<div className="class"></div>`，但是如果配置了modules，则我们需要的是`className={class}`，所以就需要这个插件来配合工具自动生成代码。


## 安装
```
npm i css-modules-transform-loader -S
```

## 用法 
1. 添加在babel-loader或者ts-loader之前（css-loader需要开启modules）
```
{ test: /\.jsx?$/, loader: "css-modules-transform-loader!babel-loader" },
{ test: /\.css$/, loader: "style-loader!css-loader?modules" },
```
2. 在jsx中如下使用
```
const style = require('./hello.css');
<div className="style$hello style$world">
  <div className="style$hello_world">
  </div>    
</div>
```
将会自动转换成
```
<div className={style.hello} + " " + {style$world}>
  <div className={style.hello_world}>
  </div>    
</div>
```
