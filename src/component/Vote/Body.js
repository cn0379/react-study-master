import React from 'react'
import PropTypes from 'prop-types'

export default class Body extends React.Component {

  static contextTypes = {
    n: PropTypes.number,
    m: PropTypes.number,
  }


  constructor(props, context) {
    super(props, context)
    let { store: { getState } } = this.props,
      { n, m } = getState();
    this.state = { n, m };
  }

  componentDidMount() {
    let { store: { getState, subscribe } } = this.props;
    let delsubscribe  = subscribe( () => {
        let { n, m  } = getState();
        this.setState ({
            n,
            m 
        })
    })
  }

  render() {
    // let { n, m } = this.context;
    let { n, m } = this.state;
    console.log(this.context)
    return <div className={'panel-body'} >
      支持人数: <span>{n}</span>
      <br />
      反对人数: <span>{m}</span>
      <br />
      支持率: <span>0.00%</span>
    </div>
  }
}