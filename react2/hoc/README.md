- BlogPost CommentList 
   相同点  ，哪些区别？
   改造下写法？
  
- Post Comment 初始化相似的   组件  render  map
  给初值
  只写一个组件  ？   可以  HOC 高阶组件 代码的复用
  返回值是组件的函数 参数
    (组件data，数据) =>  <Common>值
    学会了高阶组件，就可以学习react  源码
    @inject 高阶组件
    class
    connet({props,action})(Component)

- 当数据发生变化时，代码会重新执行一次   n {n}
  但是子组件  数据没有发生变化， 也会执行  性能能提升吗？
  这是一个通用的问题 HOC 

  热更新
  虚拟DOM
  子组件被渲染   这是缺点
  React.Memo