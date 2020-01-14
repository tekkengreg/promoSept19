import React, { Component } from 'react';
import Column from './Column';
import './App.scss';

const rownum = 40;
const colnum = 70;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 300)
  }
  render() {
    const { counter } = this.state;
    return (
      <div className="App">
        {
          Array(colnum).fill(0).map((item, i) => (
            <Column
              key={`column-${i}`}
              rownum={rownum}
              counter={counter}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
