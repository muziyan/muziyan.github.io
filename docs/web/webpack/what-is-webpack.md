---
title: what is webpack ?
tag: webpack 
---

# Webpack是什么?

[Webpack官网地址](https://webpack.js.org/)   
[Webpack中文地址](https://webpack.docschina.org/)

> `Webpack`是一个现代Javascript应用的静态模块打包工具,两大最核心的特点: `一切皆模块`和`按需加载`.

[toc]

## Webpack的一些核心概念

* [入口(`entry`)](#入口-entry)
* [输出(`output`)](#输出-output)
* [loader(模块和资源的转换器)](#loader)
* [插件(`plugin`)](#插件-plugin)
* [模式(`mode`)](#模式-mode)
* [依赖图(`dependency graph`)](#依赖图-dependency-graph)
* [代码块(`chunk`)](#代码块-chunk)


### 入口(`entry`)  

入口起点的作用是指示webpack应该是用哪个模块,来作为构建其内部`依赖图`的开始,在进入入口起点后,webpack会找那些模块和库是入口起点(直接和间接)依赖.  

#### Example:  
> TIP:   
> 通常`webpack`配置文件名为`webpack.config.js`  
> 注意默认下面使用`ES6`模块语法风格配置文件.  
> 需要设置`package.json`中的`type`为`module`就可以开始愉快玩耍啦!

> 现在所有的输出目录默认为`dist`,下面所有代码片段的输出注释默认为`dist`目录下.

通常我们的入口起点只需要配置一个,我们可以直接写上文件路径,会输出一个`main.js`.  
也可以用对象语法写上`key`自主设置`chunk`文件名称
```js
// 简易写法
export default {
  entry: 'path/to/my/entry/file.js'
}
// output => path/to/dist/main.js

// 对象语法
export default {
  entry: {
    mainApp: 'path/to/my/entry/file.js' 
  }
}
// output => path/to/dist/mainApp.js
```

入口起点可以是单个也可以是多个.如果我们需要将多个入口起点的依赖关系绘制在一个`chunk`时,我们可以将一个文件路径数组传递给`entry`属性,这将会创建一个所谓的`multi-main entry`.我们按照下列写法就可以实现!!
```js
// multi-main entry
export default {
  entry: [
    'path/to/my/entry/file.js',
    'path/to/my/entry/file1.js'
  ],
  output: {
    filename: 'bundle.js'
  }
}

// output => path/to/dist/bundle.js
```

多入口起点输出多个`chunk`文件,内部也会构建多个独立分离的依赖图
```js
export default {
  entry: {
    app: 'path/to/my/entry/file0.js',
    adminApp: 'path/to/my/entry/file1.js'
  }
}

// output => 
// | path/to/dist
//    - app.js
//    - adminApp.js

```

官方文档中提示我们,一个HTML中最好只使用一个入口起点,在我们需要构建多页面程序时再去使用多个入口起点.  
如果我们的`app.js`和`admin.js`都引入了同一个模块`base.js`,并都各自执行了这个模块的方法.我们的模块仅正确实例化一次,则两个入口模块都会收到对共享模块到处的同一对象的引用,从而导致数据错误.  

``` html
// index.html

<script src="path/to/dist/app.js"></script>  
<script src="path/to/dist/adminApp.js"></script>
```

如果我们公共的依赖模块由每个入口起点分别实例化一次,就不会造成数据错误这个问题.  

> TIP:  问题讲解的[原文地址](https://bundlers.tooling.report/code-splitting/multi-entry/#webpack)

对象语法是应用程序中定义入口最可扩展的方式,除了自定义输出文件名称外还有其他可选属性:  
* `dependOn`: 当前入口所依赖的入口。它们必须在该入口被加载前被加载。注意不要循环引用
* `filename`: 指定要输出的文件名称,而不是用`key`来当作输出名称
* `import`: 启动时需要加载的模块,相当于按需加载
* `library`: 指定依赖库选项,为当前入口构建一个依赖库.
* `runtime`: 运行时`chunk`的名字,如果设置了,就会创建一个新的运行时`chunk`.在5.43.0之后可以设置为`false`以避免一个新的运行时`chunk`


### 输出(`output`)



### Loader

### 插件(`plugin`)

### 模式(`mode`)

### 依赖图(`dependency graph`)

### 代码块(`chunk`)

## Webpack解决了那些问题?



