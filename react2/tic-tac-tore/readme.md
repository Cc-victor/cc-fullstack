# 设计组件学习一

不是切页面，写组件，设计组件
把组件发布到npm 省市选择

- 通过原生的JS
- 分析出react的组件设计的点
   1. 有一些状态  
      全局状态  hasWinner  -> Game
      chess:1  MVVM 
      pattern 二维数组
      数据修改 ，操作DOM  build() 再执行一遍
      MVVM 来做数据状态的改变与界面的响应式结合起来，
      onClick -> 数据 + build
      react -> 响应式

   2. 悔棋  下棋的历史记录
      三维数组
      怎么设计数据状态？ currentData  totalData
      设计组件 Game Board -> currentData

      组件三个  Game Board Square
      history  数组 ，每一项都是二维数组  每一项都有当前下棋第二数据
      stepNumber:0  ++ i 
      current  history[stepNumber]
      onclick cell slice