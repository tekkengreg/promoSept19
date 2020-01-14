import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
        this.char = this.getChar();
        this.opacityRef = 0.1;
        this.opacityCurrent = 0.1;
        this.color = "grey"
    }

    getChar = () => String.fromCharCode(Math.floor(Math.random() * 1000 + 192));


    render() {
        const { isActive } = this.props;
        
        if (isActive) {
            this.char = this.getChar();
            this.opacityCurrent =  1;
            this.color = "blue";
        }else{
            this.color = "grey";
            if(this.opacityCurrent > this.opacityRef)
                this.opacityCurrent -= 0.05;
            if(this.opacityCurrent < this.opacityRef)
                this.opacityCurrent = this.opacityRef
        }

        const style = {
            color: this.color,
            filter: `opacity(${this.opacityCurrent})`
        }

        return (<div className="Cell"
            style={style}>
            {this.char}
        </div>);
    }
}

export default Cell;