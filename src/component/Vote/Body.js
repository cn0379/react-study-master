import React from 'react'

export default class Body extends React.Component {
  constructor(props) {
    super(props)
   console.log(this)
  }

  render() {
    return <div className={'panel-body'} >
      支持人数: <span>0</span>
      <br />
      反对人数: <span>0</span>
      <br/>
      支持率: <span>0.00%</span>      
    </div>
  }
}