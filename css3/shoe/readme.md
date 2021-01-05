# 电商是2021永恒的主题


1. 得物APP   构建一个学习目的
   新的细分领域的电商在上市过程中，
   - 得到 知识电商
   - 得物 潮牌电商
     群体 25 以下的 潮牌群体 talk
     阿里电商/腾讯电商 互联网关系链
     拼多多 / 京东


2. 功能细分 商品卡片的设计
  - 难点是半圆 -> 更大半径的圆， 圆的中心会改变 ？
  - 鞋
    两个运动 向上， 转角 animation  
  - 文字部分
    opactio 0 - 1
    container
  - 写一个页面  
    首先 良好的结构
    不要想样式， 要毛坯
    .dw 项目代号 是项目 不是简单的页面
    container？ 5种居中方法
    容器 设一个宽度+margin auto？
    定位？
    弹性布局  水平居中
- stylus 用法
前端都有这么多命令行
  stylus -w *.
  stylus -w *.stylus
  -o *.css
  watch 监听
  output 向外输出
  1. 用tab 缩进
  2. 嵌套的css
   .dw_card
    &:hover
    &:after
   .dw_card__imgBx
   会生成 .dw_card .dw_card__imgBx{
   }
   & 不是下级，是引用上级
absolute	生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

fixed	生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。

relative	生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。

static	默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
inherit	规定应该从父元素继承 position 属性的值。

overflow 属性规定当内容溢出元素框时发生的事情。
visible	默认值。内容不会被修剪，会呈现在元素框之外。
hidden	内容会被修剪，并且其余内容是不可见的。
scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
inherit	规定应该从父元素继承 overflow 属性的值。