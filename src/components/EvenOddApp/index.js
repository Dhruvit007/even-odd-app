import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increment = () => {
    this.setState(prevState => {
      const randomValue = Math.ceil(Math.random() * 100)
      return {count: prevState.count + randomValue}
    })
  }

  isEvenOrOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="contain-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {this.isEvenOrOdd()}</p>
          <button className="button" onClick={this.increment}>
            Increment
          </button>
          <p className="comment">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
