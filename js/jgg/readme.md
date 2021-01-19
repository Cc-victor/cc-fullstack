# grid 布局

- 在哪里，大家看过这种方式
- 考题中，有多少让元素在屏幕居中的方法？
- flex body d:f justify-content:center align-items:center  flex 管一代
- grid   管二代 二维的时候  justify-content:center
- 定位
- margin 赋值
- ......
-grid-template-rows|columns
  布局可以对二位名场面，
- 9 个元素，请大家给一个方案，每个格子颜色不一样
  - js 是王者 ele.style  支恩泽
  - css 方案 .box:nth-child
  ?每一个 都不一样
  .box:nth-child(1|odd|even):last-child
  - 别的方案? 9个格子，更多的格子？ 选择器写的有没有一点累

  - 弹性布局在觉接 现代移动端甚至未来物联网，不好解决或者解决麻烦
  九宫格 多加每一行的父元素
  grid 的二位布局方案来了

  - 在垂直方向做主元素分配高度
  display:grid + grid-template-rows:1fr auto

  1fr是网格css中一种新的柔性单元。[Fr]是分数单位，1fr表示可用空间的1部分。

  - firstChild lastChild
  cgildNodes 换行符会作为空的文本节点
  lastElementChild