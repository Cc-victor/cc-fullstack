 -移动电商的布局
 -10% 百分比
   1. css继承
   2. 用什么方法可以实现.box占满整个屏，不使用继承
      -定位
      -vw,vh移动端屏
   3.float:left;
   4.如果不浮动
     display:inline-block;
     它的间隔由换行符也是一个字符  换行符=0  字符的大小由font-size控制
   5.rem 是相对单位，相对于html根元素
     只要html设置成 屏宽的1/10 1rem=10%

   6.如何让不同宽度的手机？
     动态设置font-size

  提升格局，从学校里传统的  PC端 ->到移动端 ->动的
  vw
   vh 
  rem{
      rem全名root em，简写rem，故其也是一个相对长度单位，但只相对于根元素，可以简单的通过更改根元素大小，从而调整所有字体大小。

只相对于根元素（html）
通过修改根元素可成比例的调整页面字体大小
其适配方案通过js脚本设置像素点来实现
  }
   onresize
布局这块   display:inline-block; display:flex;  flex=1;l
定位 position
弹性 flexible
浮动 float
