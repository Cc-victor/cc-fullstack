# 首页react 实战  可学之处

- Loading 组件打造过程
  页面的状态，要在列表状态（空/API后有），加一个Loading 状态
  1. reducer 中加一个  enterLoading  true
      action CHANGE_ENTER_LOADING
  2. 请求列表是，吧 false
  3. loading使用styled-component + animation-delay  打造方法
  4. 使用三元运算符  显示与不显示


- 列表的打造
   1. 数据源