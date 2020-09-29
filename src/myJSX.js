function createElement(type, props, children) {

  let obj = {
    type: null,
    props: {
      children: '',
    },
    ref: null,
    key: null
  };
  obj = { ...obj, type, props: { ...props, children } };

  // let newObj = Object.assign({
  //   type: null,
  //   props: {
  //     children: ''
  //   },
  //   ref: null,
  //   key: null,
  // }, obj)
  // 'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null;
  // 'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null;
  return obj;
}
let root = document.querySelector("#root")

let objJSX = createElement('h1', { id: "text", className: "test2", style: { color: 'red' }, ref: 'AA', key: 'BB' }, '\u73E0')
console.log(objJSX)
// console.log(createElement({ type: 'h1', props: { id: "text", className: "test2", style: { color: 'red' }, children: '\u73E0', ref: '', key: 'HH' } }))
function render(obj, container, callBack) {
     // 结构type是为了获取dom元素名称 props获取属性
     let { type, props } = obj || {}
    // 创建一个html 元素
    let newElement = document.createElement(type)
     for(let attr in props) {
      // 如果不是私有属性
      if(!props.hasOwnProperty(attr)) break;
      // 如果属性没有值
      if(!props[attr]) break;
      // 保存值
      let value = props[attr];
      if(attr === 'className') {
        newElement.setAttribute('class', value)
        continue;
      }
      if(attr === 'style') {
        if(value === '') continue;
        for(let key in value) {
          if(value.hasOwnProperty(key)) {
             newElement['style'][key]  = value[key]
          }
        }
      }
      if(attr === 'children') {
        if(typeof value == 'string') {
          let text = document.createTextNode(value);
          newElement.appendChild(text);
        }
        continue;
      }
      // 让设置的属性表现在DOM结构上
      newElement.setAttribute(attr, value)
     }
     
     container.appendChild(newElement);

     callBack && callBack()
}

render(objJSX, root, () => {
  console.log('done')
})
