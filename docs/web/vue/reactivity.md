# Vue3的响应式数据如何实现的？

## 前言

`vue2`中使用了`defineProperty`来进行数据，不过由于`defineProperty`一次只能拦截一个属性并无法拦截到新增属性，所以在`vue3`中使用了`Es6`的`Proxy Api`来进行数据拦截,`Proxy`相较于`defineProperty`的优势在于可以拦截到所有属性的变动。


`Proxy Demo`:
```js

const obj = {
  flag: true
} 

const handler = {
  get(target,prop){
    return target[prop]
  },
  set(target,prop,newVal,receive){
    target[prop] = newVal
    return true
  }
}

const objProxy = new Proxy(obj,handler)
```

## 正文

### 





