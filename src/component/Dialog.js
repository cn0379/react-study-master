import React from 'react'

export default function Dialog(props) {
  let { title, type } = props;
  return <section>
    <h1>第一个标题</h1>
    <div>{title}</div>
    <div>{type === 1 ? '正确' : '错误'}</div>
  </section>
}
