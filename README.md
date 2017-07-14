# Vue-Text-Roll
新项目用Vue做，所以抽空研究点Vue的小玩意儿，写点小插件啥的。<br>
这个插件是滚动展示文字列表用的，比如那种“光荣榜”神马的。<br>
比如这种：

![img](https://github.com/TerryBeanX2/Vue-Text-Roll/raw/img/example.png)

    我只实现圆筒的滚动效果，上下倾斜的部分需要你自己加个父级去遮,中间区域形成无缝的滚动展示效果。

可自定义属性示例:
```javascript
originList: {  //要滚动的列表
    default: ()=> { 
      return ['哈哈哈', '哈哈哈', '哈哈哈', '哈哈哈']
    }
},
height: {  //每个小条目的高度
    type: [String, Number],
    default: 20
},
align: {  //条目内文字对齐方式
    type: String,
    default: 'center'
},
duration: {  //滚动速度，越大滚动越慢
    type: [String, Number],
    default: 10
},
wrapHeight: {  //外部容器高度
    type: [String, Number],
    default: 200
},
direction:{  //滚动方向，'up'或者'down'，默认down
    type:String,
    default:'down'
},
minItem:{  //最少条目，建议设置不小于20，如果不够20，本插件会自动复制列表
    type:[String,Number],
    default:20
}
```

### 安装
> Vuejs 

```bash
npm install vue-text-roll --save
```
### 用法 
##### ES6
```js
Vue.use(require('vue-text-roll'))
```

```html
<roll-text wrapHeight="200" duration="20" wrapHeight="200" direction="down" height="20" align="center" originList="yourList"></roll-text>
```
