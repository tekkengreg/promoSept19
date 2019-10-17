import React, { Component } from "react";
import Item from "./Item";

const db = [
  { name: "fiiiiiirst", isActive: "blue" },
  { name: "seeeecond", isActive: "purple" }
];

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateItem = () => {
    const itemDomArray = [];
    for (let i = 0; i < db.length; i++) {
      itemDomArray.push(<Item name={db[i].name} isActive={db[i].isActive} />);
    }

    return itemDomArray;
  };

  render() {
    return <ul>{this.updateItem()}</ul>;
  }
}

export default ListItems;
