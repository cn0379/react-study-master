import React from 'react'
import PropTypes from 'prop-types'

export default class Body extends React.Component {

  static contextTypes = {
    n: PropTypes.number,
    m: PropTypes.number,
  }


  constructor(props, context) {
    super(props)
   console.log(context.n = 10)
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