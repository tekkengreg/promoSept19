import React, { Component } from "react";
export const CardContext = React.createContext();

class CardProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      inc: this.inc
    };
  }

  inc = i => this.setState({ counter: this.state.counter + i });

  render() {
    return (
      <CardContext.Provider value={this.state}>
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default CardProvider;

export const withCard = C => props => (
  <CardContext.Consumer>
    {value => <C {...props} ctxt={value} />}
  </CardContext.Consumer>
);
