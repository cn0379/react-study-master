import React from 'react'
import PropTypes from 'prop-types'

export default class Body extends React.Component {

  static contextTypes = {
    n: PropTypes.number,
    m: PropTypes.number,
  }


  constructor(props, context) {
    super(props,context)
  }

  render() {
    let { n, m  } = this.context;
    console.log(this.context)
    return <div className={'panel-body'} >
      支持人数: <span>{ n }</span>
      <br />
      反对人数: <span>{ m }</span>
      <br/>
      支持率: <span>0.00%</span>      
    </div>
  }
}