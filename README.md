# css-modules-transform-loader
在React+Webpack中，用来配合css-loader模块中的modules使用。

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
