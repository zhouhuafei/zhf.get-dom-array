# 获取dom数组
```
const getDomArray = require('zhf.get-dom-array');
getDomArray('body'); // [ bodyDom ]
```

# 从指定的父元素里获取
```
const getDomArray = require('zhf.get-dom-array');
getDomArray('.div', '.parent'); // [ divDom1, divDom2 ]
```
