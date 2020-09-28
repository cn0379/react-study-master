function createElement(obj) {
  // type, props, children
  // let obj = {
  //   type: null,
  //   props: {
  //     children: ''
  //   },
  //   ref: null,
  //   key: null
  // };
  // obj = { ...obj, type, props: { ...props, children } };\
  let newObj = Object.assign({
    type: null,
    props: {
      children: ''
    },
    ref: null,
    key: "HH"
  }, obj)
  'key' in newObj.props ? (obj.key = obj.props.key, obj.props.key = '') : null;
  'ref' in newObj.props ? (obj.ref = obj.props.ref, obj.props.ref = '') : null;
  return newObj;
}

// console.log(createElement('h1', { id: "text", className: "test2", style: { color: 'red' }, ref: 'AA', key: 'BB' }, '\u73E0'))
console.log(createElement({ type: 'h1', props: { id: "text", className: "test2", style: { color: 'red' }, children: '\u73E0', ref: '', key: '' } }))