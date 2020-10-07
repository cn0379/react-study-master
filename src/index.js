import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Dialog from './component/Dialog'
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types'
import Swiper from './component/Swiper'

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
// ReactDOM.render(
//   <div>
//     <Dialog title="标题" type={1} />
//     <Dialog type="请登录" con={ 
//       <div>
//         <input type="text" placeholder="请输入账户" />
//         <input type="password" placeholder="请输入密码" />
//       </div>
//     }>
//       <button>Login</button>
//       <button>Cancel</button>
//     </Dialog>
//   </div>, root)

// class Clock extends React.Component {
//   constructor() {
//     super() // 获取父级的this 使用constructor必须使用super 初始化this 
//     this.state = {
//       time: new Date().toLocaleString()
//     }
//   }

//   componentDidMount() {
//     //React`S Life Hook 之一第一次组件渲染完成后触发
//     setInterval(() => {
//       this.setState(
//         {
//           time: new Date().toLocaleString()
//         }
//       )
//     }, 1000)
//   }

//   render() {
//     return <section>
//       <h3>Last Year:</h3>
//       <div style={{ color: 'red', fontSize: 20 + 'px', fontWeight: 700 }}>
//         {this.state.time}
//       </div>
//     </section>
//   }
// }

// 函数式组件
// function Clock () {
//   return <section>
//     <div style={{ color: 'red', fontSize: 20 + 'px', fontWeight: 700 }}>
//        { new Date().toLocaleString() }
//      </div>
//   </section>
// }

// ReactDOM.render(<Clock />, root)

// class Vote extends React.Component {
//   static defaultProps = {};
//   static propTypes = {
//     title: PropTypes.string.isRequired
//   };
//   constructor(props) {
//     super(props)
//     this.state = {
//       n: 0,
//       m: 0,
//     }
//   }

//   render() {
//     let { n, m } = this.state;
//     let rate = (n + m) === 0 ? '0%' : (n / (n + m) * 100 + '%')
//     return <section className="panel panel-default" style={{ width: '60%', margin: '20px auto' }}>
//       <div className="panel-heading" > <h3 className="panel-title">{this.props.title}</h3></div>
//       <div className="panel-body">
//         支持人数: {n}
//         <br /><br />
//           反对人数: {m}
//         <br /><br />
//           支持率: {rate}
//       </div>
//       <div className="panel-footer" >
//         <button className="btn btn-success" onClick={ this.support } >支持</button>
//         <button className="btn btn-danger" onClick= { this.against } >反对</button>
//       </div>
//     </section>
//   }

//   support = () => {
//     this.setState({
//       n: this.state.n + 1
//     })
//   }
//   against = () => {
//     this.setState({
//       m: this.state.m + 1
//     })
//   }
// }


// ReactDOM.render(<Vote title="世界你好!" />, root)

// function resData() {
//   return new Promise(reslove => {
//     setTimeout(() => {
//       reslove(2)
//     }, 3000)
//   })
// }


// class A extends React.Component {
//   // static defaultProps {}
//   constructor() {
//     super();
//     console.log('1=constructor');
//     this.state = { n: 1 };
//   }

//   async componentWillMount() {
//     console.log('2----第一次渲染之前', this.refs.refDeom);
//     let result = await resData()
//     this.setState({
//       n: result
//     })
//   }

//   componentDidMount() {
//     console.log('4----第一次渲染之后', this.refs.refDeom);
//     setInterval(() => {
//       this.setState({
//         n: this.state.n + 1
//       })
//     }, 5000)
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('5是否允许更新')
//     // 在这个钩子函数中,我们获取的state 不是最新修改的而是上一次的状态
//     if (nextState.n > 3) {
//       return false
//     }
//     return true;
//   }

//   componentWillUpdate(nextProps, nextState) {
//     console.log(this.state.n, nextState.n)
//     console.log('6更新前')
//   }

//   componentDidUpdate() {
//     console.log('8更新后')
//   }

//   render() {
//     console.log('RENDER')
//     return <section>
//       <div ref="refDeom" >{this.state.n}</div>
//     </section>
//   }
// }

// ReactDOM.render(<A />, root)

// 父级组件
// class Penel extends React.Component {
//   constructor() {
//     super()
//     this.state = { n: 0 }
//   }

//   fn = () => {
//     this.setState({
//       n: this.state.n + 1,
//     })
//   }

//   render() {
//     return <section className='penel penel-default'>
//       <Head  count={ this.state.n } />
//       <Body cb={ this.fn } />
//     </section>
//   }
// }

// // 子级组件
// class Head extends React.Component {
//   constructor() {
//     super()
//   }

//   render() {
//     return <div className='penel-heading' >
//       <h3 className='penel-title'>点击次数: { this.props.count } </h3>
//     </div>
//   }
// }

// class Body extends React. Component {
//   constructor() {
//     super()
//   } 

//   render() {
//     return <div className='penel-body'>
//       <button className='btn btn-success' onClick={ this.props.cb } >点我</button>
//     </div>
//   }
// }

// ReactDOM.render(<Penel/>, root)

// 轮播 

let IMG_DATA = []
for (let i = 1; i < 5; i++) {
  IMG_DATA.push(
    {
      title: i,
      id: i,
      pic: require(`./static/assets/m${i}.jpg`)
    }
  )
}

ReactDOM.render(
  <Swiper data={IMG_DATA} interval={2000} step={1} speed={300} />,
  root)