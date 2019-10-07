import React, { Component } from "react";

class Avatar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { image, fname, lname } = this.props;
    return (
      <div>
        <img src={image} />
        <h1>
          {fname} {lname}
        </h1>
      </div>
    );
  }
}

export default Avatar;
