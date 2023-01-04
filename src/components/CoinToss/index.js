import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {
    isHead: true,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const getNum = Math.floor(Math.random() * 2)
    if (getNum === 0) {
      this.setState(prevState => ({
        isHead: prevState.isHead,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else if (getNum === 1) {
      this.setState(prevState => ({
        isHead: !prevState.isHead,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {isHead, total, heads, tails} = this.state
    const imageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image" />
          <button
            className="button"
            type="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count">
            <p className="total">Total:{total}</p>
            <p className="head">Heads:{heads}</p>
            <p className="tail">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
