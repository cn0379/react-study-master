import React from 'react';
import ReactDOM from 'react-dom';
/***
 * ReactDOM.render([JSX],[CONTAINER], [CALLBACK]);  把JSX元素渲染到页面中
 *    JSX: REACT 的虚拟元素
 *    CONTAINER: 容器, 我们想把元素放到页面中的那个容器中
 *    CALLBACK:  回调
 */

let root = document.querySelector("#root")

let data = "My React"

ReactDOM.render(<div id="box">Hello { data }</div>, root, () => {
  let oBox = document.querySelector("#box")
  console.log(oBox.innerHTML)
});