let styles = [
  `
/*
* Inspired by http://strml.net/
* 大家好，我是王帅
* 看到一边关于动态展示的效果，自己也想实现一个
* 说做就做，我也来写一份动态展示的demo！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
  line-height: 180%;
}
/* 白色背景太单调了，我们来点背景 */
body {
  background: #000000;
  color: skyblue;
}
/* 文字离边框太近了 */
.styles-wrap {
  padding: 2em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; 
  height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: #409eff; }
.token.property{ color: #e6a23c; }
.token.punctuation{ color: #5c887a; }
.token.function{ color: #f56c6c; }

/* 加点 3D 效果呗 */
html {
  perspective: 1000px;
}
.styles-wrap {
  position: fixed; 
  left: 1rem;
  top: 0; 
  transition: .5;
  transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resume-wrap{
  position: fixed; 
  right: .5rem; 
  top: 0;
  padding: .5em; 
  margin: .5em;
  width: 48vw; 
  height: 90vh; 
  border: 1px solid;
  background: white; 
  color: #222;
  overflow: auto;  
}
/* 好了，我开始写demo了 */
`,
  `
/* 这个demo好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 用户 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */
`,
  `
/* 再对 HTML 加点样式 */
.resume-wrap{
  padding: 2em;
}
table {
  margin-left:1em;
}
h1 {
  width:140px;
  margin:10px auto;
}
.resume-wrap h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resume-wrap ul,.resume-wrap ol{
  list-style: none;
}
.resume-wrap ul> li::before{
  content: ' ';
  margin-right: 1em;
}
.resume-wrap ol {
  counter-reset: section;
}
.resume-wrap ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: 1em;
}
.resume-wrap blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`
];

export default styles;
