import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:3
        };
    }
    componentDidMount(){
        this.interval = setInterval(()=> this.countdown(), 1000);
    }
    countdown(){
        if(this.state.time > 1){
            this.setState(prevState => ({
                time: prevState.time - 1
            }));
        } else {
            this.props.onTimesUp();
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render() {
        return (
            <h2>Get ready to memorize cells in {this.state.time}</h2>
        )
    }
}
export default Timer;

