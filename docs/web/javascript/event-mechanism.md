# 事件机制

> 事件机制拥有三个阶段，分别是：`事件捕获`、`处于目标`和`事件冒泡`。  
> 需要注意的是`IE`是没有事件捕获这一阶段，具体原因可自行查阅。

事件执行的时候，我们整个执行流程会先去`捕获`再进行`冒泡`。
* 捕获:  
  会从`Document`对象去向下传播事件，直到找到目标元素，才会停止传播。
* 冒泡:  
  会从目标元素向上传播事件，直到`Document`对象，才会停止传播。  


<!-- TODO: 后续更换成图片 -->
<div style="text-align:center">
  <div style="text-align:center;width:400px;display:inline-block;">
    <p style="text-align:left">捕获</p>
    Document -> DIV -> Target -> DIV -> Document
    <p style="text-align:right">冒泡</p>
  </div>
</div>
> Target 前后区分捕获和冒泡


假设我们拥有下列的DOM结构，我们去依次分析事件捕获和事件冒泡，再去了解事件委托。

```html
<ul>
  <li>
    <span>
      <a></a>
    </span>  
  </li>
</ul>  
```

## 事件捕获
> 由网景最先提出，事件会从最外层开始触法，直到最具体的元素。

如上列`DOM`结构，假设我们的`ul`和`span`都绑定了点击事件，`span`没有脱离文档流被被`ul`包含，那么这时候点击`span`会先触发`ul`的点击事件，然后再触发`span`的点击事件。

```js

ul.addEventListener('click'，() => {
  console.log('ul')
}，true)

span.addEventListener('click'，() => {
  console.log('span')
}，true)

// log执行顺序
// ul => span

```

可能我们不希望触法子元素的事件，这时候我们可以使用`stopImmediatePropagation()`方法来阻止事件捕获。
> 关于[`stopImmediatePropagation`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation)方法的详细描述请查阅`MDN`

```js

ul.addEventListener('click'，(e) => {
  e.stopImmediatePropagation()
  console.log('ul')
}，true)

// log 将不会打印 span

```

总得来说就是事件捕获就是: 优先触发父元素的事件再传递到子元素， 也就是 `父 => 子`。


## 事件冒泡
> 由微软提出，事件会从最内层开始触法，直到最外层的元素.

还是使用事件捕获时的例子来进行讲解， `ul`和`span`都绑定了点击事件， `span`没有脱离文档流， 那么这时候我们点击`span`的时候会和捕获时的执行顺序完全相反， 会优先触法`span`的点击事件，再触发`ul`的点击事件。

```js

ul.addEventListener('click'，() => {
  console.log('ul')
})

span.addEventListener('click'，(e) => {
  console.log('span')
})

// log执行顺序
// span => ul

```

如果我们希望点击`span`不触法`ul`的事件，我们可以使用`stopPropagation()`方法来阻止事件冒泡。
> 关于[`stopPropagation`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation)方法的详细描述请查阅`MDN`

```js
span.addEventListener('click'，(e) => {
  e.stopPropagation()
  console.log('span')
})

// log 将不会打印 ul
```

总得来说事件冒泡就是: 优先触法子元素的事件再传递到父元素，也就是 `子 => 父`这么一个流程。


> TIP: 上面已经讲述了捕获和冒泡这两种机制和阻止传播的方法。由此可见这两种机制除了执行顺序的不一致，其他的都大差不差.



## 事件委托
> `事件委托`又称为`事件代理`，简单来讲就是将元素一整块进行监听，是否触发了制定的事件。  

```js

ul.addEventListener('click',(e) => {
  const targetName = e.target.nodeName
  console.log(targetName)
  switch (targetName) {
    case "UL":
      
      break;
    ...
    default:
      break;
  }
})

// 根据每次点击到的元素打印： UL || LI || SPAN || A

```

上述例子，就是简单的事件委托用法,我们可以根据点击到的元素去执行对应的事件，而不需要每个元素都去绑定一个事件。

为什么我们只绑定了`ul`，却可以获取到`li`、`span`和`a`这些元素呢。因为我们使用事件委托将`ul`整个`DOM`结构都监听了，任何处于`ul`内部中的元素，都会触发点击事件。

通常我们会在拥有多个子元素且需要绑定相同事件的元素上去使用，例如：

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

我们需要做一个`tab`切换每个`li`都需要绑定点击事件，我们应该去使用事件委托而不是获取所有`li`去单独绑定。

```js

// 不推荐
const liList = document.querySelectorAll("li")
for (let i = 0; i < liList.length; i++) {
  const element = liList[i];
  element.onClick = () => {
    // TODO
  }
}


// 推荐
const ul = document.querySelector("ul")
ul.addEventListener('click',(e) => {
  if (e.target.nodeName === 'LI') {
    // TODO
  }
})

```

这么做的好处在于：
* 我们只需要绑定一次事件，提高效率
* 动态添加进去的元素也同样拥有事件
* 不需要管理多个函数 <b>(这里指js引擎，而不是代码上)</b>
* 减少了内存的消耗 <b>(不需要额外获取dom和执行loop去挨个绑定事件)</b>
* 减少了代码和DOM之间的关联 <b>(只需要关注父元素，不需要关注内部元素)</b>
* 修改DOM的时候不需要考虑删除事件 <b>(修改dom的时候不需要思考之前绑定的事件没有删除是否会造成副作用)</b>

> TIP: 在`vue`或`react`等框架中，我们需要注意在销毁组件时使用`removeEventListener`删除掉事件监听,否则多次绑定会执行多次，容易造成执行栈溢出。


## TODO 待完善







