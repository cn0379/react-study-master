import React from 'react'
import PropTypes from 'prop-types'

export default class Footer extends React.Component {
  static contextTypes = {
    callback: PropTypes.func
  }
  constructor (props, context) {
    super(props, context)
    console.log(context)
  }

  render () {
    let { callback } = this.context;
    return <div className={ 'panel-footer' } >
        <button onClick={ () => { callback('support') } } className={ 'btn btn-success' }> 支持 </button>
        <button onClick={ () => { callback() } } className={ 'btn btn-danger' }> 反对 </button>
    </div>
  }
}