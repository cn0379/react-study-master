import React from 'react'
import PropTypes from 'prop-types';
import '../static/less/swiper.css'

export default class Swiper extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    let { step, speed } = this.props
    this.state = {
      step,
      speed
    }
  }

  // 数据的克隆
  componentWillMount() {
    let { data } = this.props,
      cloneData = data.slice(0);
    cloneData.push(data[0]);
    cloneData.unshift(data[data.length - 1]);
    this.cloneData = cloneData;
  }

  // 自动轮播
  componentDidMount() {
    this.autoTimer = setInterval(this.autoMove, this.props.interval)
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.step > (this.cloneData.length - 1)) {
      this.setState({
        step: 1,
        speed: 0
      })
    }

    if(nextState.step < 0) {
      this.setState({
        step: this.cloneData.length - 1,
        speed: 0
      })
    }
  }

  componentDidUpdate() {
    let { step, speed } = this.state;
    if (step === 1 && speed === 0) {
      let delayTimer = setTimeout(() => {
        clearTimeout(delayTimer);
        this.setState({
          step: step + 1,
          speed: this.props.speed
        })
      }, 0)
    }
  }

  render() {
    let { data } = this.props,
      { cloneData } = this;
    if (data.length === 0) return '';
    let { step, speed } = this.state,
      wrapperSty = {
        width: cloneData.length * 613 + 'px',
        left: -step * 613 + 'px',
        transition: `all ${speed}ms ease-in 0ms`
      }

    return <section>
      <div className="box" onMouseEnter={this.clearMove} onMouseLeave={this.palyMove}>
        <div className="swiper-container" style={wrapperSty} >
          {
            cloneData.map((item, index) => {
              let { pic, title } = item;
              return <div key={index} className="swiper-item">
                <img title={title} src={pic} />
              </div>
            })
          }
        </div>
        <ul className="pagination" >
          {
            cloneData.map((item, idx) => {
              let actIndex = step - 1;
              this.actIndex  = actIndex
              let len = cloneData.length - 2;
              if (idx < len) {
                if (actIndex === len) {
                  actIndex = 0
                }
                return <li key={idx} className={this.actIndex === idx ? 'act' : ''} ></li>
              }
            })
          }
        </ul>
        <div className="arrow" onClick={this.stepRight} >&gt;</div>
        <div className="arrow left" onClick={this.stepLeft}>&lt;</div>
      </div>
    </section>
  }

  // 自动轮播
  autoMove = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  // 暂停轮播
  clearMove = () => {
    clearInterval(this.autoTimer)
  }

  // 开启轮播
  palyMove = () => {
    this.autoTimer = setInterval(this.autoMove, this.props.interval)
  }

  // Right 
  stepRight = () => {
    this.setState({
      step: this.state.step + 1
    })
  }

  // Left 
  stepLeft = () => {
    if(this.actIndex == 0 ) {
      this.actIndex = 3
    }
    this.actIndex --;
    console.log(this.actIndex)
    this.setState({
      step: this.state.step - 1
    })
  }
}