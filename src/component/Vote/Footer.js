import React from 'react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
  static contextTypes = {
    callback: PropTypes.func
  }
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let { callback } = this.context;
    console.log(this.props)
    let { store: { dispatch } } = this.props;
    console.log(dispatch)
    return <div className={'panel-footer'} >
      <button onClick={() => {
        dispatch({
          type: 'VOTE_SUPPORT'
        })
      }} className={'btn btn-success'}> 支持 </button>
      <button onClick={() => {
        dispatch({
          type: 'VOTE_AGAINNST'

        })
      }} className={'btn btn-danger'}> 反对 </button>
    </div>
  }
}