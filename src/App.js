import React, { Component, Fragment } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }

  render() {
    return(
      <Fragment>
        <div>count: {this.state.count} </div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </Fragment>
    )
  }
}

export default App;
