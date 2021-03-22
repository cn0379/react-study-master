+ set HTTPS=true&&npm start  开启https协议模式
+ set PORT=0379&&yarn start

+ react: REACT框架的核心部分,提供了component 类可以供我们进行组件开发,提供了钩子函数(生命周期函数: 所有的生命周期函数都是基于回调函数完成的)
+ react-dom: 把JSX语法,渲染为真实的DOM(能够放到页面中展示的结构都叫做真实的DOM)的组件
+ 基于bable 中的语法解析模块 (BABEL->ORESET-REACT) 把 JSX 语法编译为REACT.createElement(...) 结构 

### React 执行流程
    + [基本流程] 
       static defaultProps
       constructor 创建一个组件
       componentWidllMount 第一次渲染之前
       render 第一次渲染
       componentDidMount 第一次渲染之后
    
    + [修改流程: 当组件的状态发生改变(SET-STATE)或者传递给组建的属性发生改变(重新调用组件传递不同的实行) 都会引发 Render重新执行渲染(差异渲染)]
      shouldComponentUpdate 是否允许组件重新渲染
      componentWillUpdate 重现渲染之前
      render 第二次及以后重新渲染
      componentDidUpdate 重新渲染之后 
    
      componentWillReceiveProps 父组件把传递给子组件的属性发生改变后出发的钩子函数
    
    + [销毁: 原有渲染的内容是不消失的只不过以后并不能基于数据的改变视图了]
      componentWillUnmount: 卸载组件之前
- ##### 平行组件的传值

  先传给父组件的state 在传给你子组件

  redux

  action 存放每一个模块的派发任务
  index.js 所有模块的action进行合并
  