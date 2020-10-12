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
    callback: PropTypes.func,
  }

  getChildContext() {
    let { n, m } = this.state;
    return {
      n,
      m,
      callback: this.upDataContext
    }
  }

  upDataContext = tyep => {
    console.log(this.state.m)
    if (tyep == 'support') {
      console.log(this.state.n)
      this.setState({
        n: this.state.n + 1,
      })
      return;
    } else {
      this.setState({
        m: this.state.m + 1,
      })
    }
  }

  constructor(props) {
    super(props)
    let { count: { n = 0, m = 0 } } = this.props;
    this.state = { n, m };   
  }

  render() {
    let { title, store } = this.props;
    return <section className={'panel-panel-default'} style={{ width: 150, margin: 'auto' }} >
      <Head title={title} />
      <Body store={store} />
      <Footer store={store} />
    </section>
  }
}