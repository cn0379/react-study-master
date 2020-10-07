import React from 'react'
import Head from './Head'
import Body from './Body'
import Footer from './Footer'
import PropTypes from 'prop-types'

export default class Vote extends React.Component {
  
  static defaultProps = {
     
  }

  static childContextTypes = {
    n: PropTypes.number,
    m: PropTypes.number,
  }

  getChildContext () {
    let { count: { n = 0 , m = 0 } } = this.props 
    return {
      n,
      m
    };
  }

  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props)
    return <section className={ 'panel-panel-default' } style={{width: 150, margin:'auto'}} >
      <Head/>
      <Body/>
      <Footer/>
    </section>
  }
}