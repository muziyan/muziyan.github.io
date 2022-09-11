## 事件循环

> 浏览器中`JavaScript`的执行机制和`NodeJs` 的机制都是基于事件循环,我们掌握事件循环才能更好的去编写代码.

事件循环的概念就是`JavaScript`引擎 `等待任务` -> `执行任务`->`进入休眠状态等待更多任务`这几个状态之间转换的无限循环.

## 1、JS执行机制

在进入页面后,外部脚本`<script src="path/to/file.js"/>`加载完成后,`script`会进入任务队列.

在此同时用户可能会移动鼠标产生`mousemove`事件,`setTimeout` 可能也刚好也到时间了,这些都会进入任务队列等待执行.

队列中的任务基于‘先进先出’的原则执行,当浏览器引擎执行完`script`后,会再去处理`mousemove`事件,然后再处理`setTimeout`处理程序,依次执行.

`JavaScript`是单线程的,同一时间我们只能执行一个任务,所以我们需要将要执行的任务排成一个队列去依次执行.

但很多时候我们需要执行的任务可能是请求数据、定时器、读取文件等等,在等待这些任务完成时,用户不能进行任何页面上的操作,这绝对是用户无法忍受,所以`JavaScript`将所有的任务区分成了同步任务和异步任务.