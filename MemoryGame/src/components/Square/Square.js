import React, {Component} from 'react';
import './Square.css';

class Square extends Component {
    wasSelected(){
        if(this.props.canChoose)
            this.props.onChoose(this.props.idx, this.props.hidden);
    }
    render() {
        const color = this.props.hidden ? "lightgrey" : this.props.color;
        return (
            <div className="square"
                 onClick={()=>this.wasSelected()}
                 style={{backgroundColor:color}}>
            </div>
        );
    }
}
export default Square;
