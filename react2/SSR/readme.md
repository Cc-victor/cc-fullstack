- 为什么在SPA之后还需要SSR？
   SPA 的好处是显示后切页面更快  不用重新刷新
    single page application web   SPA 单页应用
   Server Side Rendering  服务器端渲染  -> Virtual DOM
   跨平台应用
   1. -> (在服务器建立)html 传输出去，解决SEO问题
   2. SPA还有什么缺点？ 
    1. 首次加载耗时过长（请求拉取->页面运行5s -> 异步请求）
    2. 前进、后退管理
       由于单页Web应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，
        所有的页面切换需要自己建立堆栈管理，当然此问题也有解决方案，比如利用URI中的散列+iframe实现；
    3. SEO难度较高
       由于所有的内容都在一个页面中动态替换显示，所以在SEO上其有着天然的弱势，
       所以如果你的站点对SEO很看重，且要用单页应用，那么就做些静态页面给搜索引擎用吧；

模块化是什么意思？
 1. 组织代码的方式
     - commonJS  node 原生自带  require + moudle exports
     - ES6 推出的新方法  import export default