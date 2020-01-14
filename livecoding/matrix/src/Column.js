import React, { Component } from 'react';
import Cell from './Cell';

class Column extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIdx: this.getActiveIdx()
        }
    }

    getActiveIdx = () => {
        const { rownum } = this.props;
        return Math.floor(Math.random() * rownum);
    }

    render() {
        const { rownum, counter } = this.props;
        const { activeIdx } = this.state;
        return (
            <div className="Column">
                {
                    Array(rownum).fill(0).map((item, i) => (
                        <Cell
                            key={`cell-${i}`}
                            counter={counter}
                            isActive={i === (activeIdx + counter) % rownum}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Column;