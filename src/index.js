import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from './component/Dialog'
// import './myJSX.js'
/***
 * ReactDOM.render([JSX],[CONTAINER], [CALLBACK]);  把JSX元素渲染到页面中
 *    JSX: REACT 的虚拟元素
 *    CONTAINER: 容器, 我们想把元素放到页面中的那个容器中
 *    CALLBACK:  回调
 */


// let data = "My React"
// let data = [
//   {
//     name: 'Bob',
//     age: 18
//   },
//   {
//     name: 'Tom',
//     age: 20
//   },
// ]
// ReactDOM.render(<div id="box">Hello
// <ul>
//     {
//       data.map((item, index) => {
//         let { name, age } = item;
//         return <li key={ index }>
//           <span>{ name }</span>
//           <span>{ age }</span>
//         </li>
//       })
//     }
//   </ul>
// </div>, root, () => {
//   let oBox = document.querySelector("#box")
//   console.log(oBox.innerHTML)
// });

let root = document.querySelector("#root")

ReactDOM.render(
  <div>
    <Dialog title="标题" type={1} />
    <Dialog type="请登录" con={ 
      <div>
        <input type="text" placeholder="请输入账户" />
        <input type="password" placeholder="请输入密码" />
      </div>
    }>
      <button>Login</button>
      <button>Cancel</button>
    </Dialog>
  </div>, root)