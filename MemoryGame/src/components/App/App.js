import React, { Component } from 'react';
import Square from '../Square/Square.js';
import Timer from '../Timer/Timer.js';
import Utils from './../../util/Utilities.js';
import './App.css';

const u = new Utils(),
    SIZE = 12,
    PEEK_TIME = 600,
    WAIT_TIME = 300;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "START",
            squares: null
        };
    }
    componentWillMount(){
        this.setState({squares: this.setSquares()});
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.status==="START" && this.state.status!==prevState.status)
            this.setState({squares: this.setSquares()});
    }
    setSquares(){
        let arr = [],
            color;
        for(let i=0; i<SIZE; i++) {
            color = (i%2===0) ? u.randomColor() : color;
            arr.push(this.makeSquare(i, color, true, true));
        }
        return u.shuffle(arr);
    }
    makeSquare(idx, col, hidden, inPlay){
        return ( 
            <Square key={idx} 
                idx={idx} 
                color={col} 
                hidden={hidden} 
                inPlay={inPlay} 
                canChoose={this.state.status==="GUESSING" && inPlay}
                onChoose={(idx, hidden)=>this.handleSelection(idx, hidden)} />
        );
    }
    toggleAll(){
        const squares = [...this.state.squares].map((square, i) => 
            this.makeSquare(square.props.idx, square.props.color, !square.props.hidden, square.props.inPlay));
        this.setState({ squares })
    }
    toggleSome(some){
        // some => [{key, [toggles]}]
        const squares = [...this.state.squares];

        some = some.map(item => Object.assign(item, 
            {idx: squares.indexOf(squares.filter(square => square.props.idx===item.key)[0])}
        ));
        const newSquares = some.map(item => 
            this.makeSquare(item.key, 
                squares[item.idx].props.color, 
                item.props.includes("hidden") ? !squares[item.idx].props.hidden : squares[item.idx].props.hidden,
                item.props.includes("inPlay") ? !squares[item.idx].props.inPlay : squares[item.idx].props.inPlay)
        );
        for(let i in some){
            squares[some[i].idx] = newSquares[i];
        }
        this.setState({squares});

    }
    test(){
        this.toggleSome([
            {key:2, props:["hidden"]},
            {key:10, props:["hidden", "inPlay"]}
        ]);
    }
    handleSelection(key, hidden){
        const squares = [...this.state.squares],
            mKey = key%2===0 ? key+1 : key-1,
            // grab selected square
            selected = squares.filter(square => square.props.inPlay
                && square.props.idx!==key
                && !square.props.hidden),
            hasMatch = selected.filter(square => square.props.idx===mKey).length > 0;
        // if match is selected, set both inactive
        if(hasMatch){
            this.toggleSome([
                {key:key, props:["inPlay", "hidden"]},
                {key:mKey, props:["inPlay"]}
            ]);
        } else {
            if(selected.length > 0){
                this.toggleSome([
                    {key:key, props:["hidden", "inPlay"]},
                    {key:selected[0].props.idx, props:["inPlay"]},
                ]); 
                setTimeout(() => {
                    this.toggleSome([
                        {key:selected[0].props.idx, props:["hidden", "inPlay"]},
                        {key:key, props:["hidden", "inPlay"]}
                    ]); 
                }, WAIT_TIME);
            } else {
                this.toggleSome([
                    {key:key, props:["hidden"]}
                ]); 
            }
        }
    }
    handleTimesUp() {
        this.toggleAll();
        setTimeout(()=> this.handlePeek(), PEEK_TIME);
    }
    handlePeek() {
        this.setState({ status:"GUESSING" })
        this.toggleAll();
    }
    render() {
        const footer = () => {
            switch(this.state.status) {
                case "START":
                    return (
                        <button onClick={()=>this.setState({status:"TIMER"})}>Start Game</button>
                    );
                case "TIMER":
                    return (
                        <Timer onTimesUp={()=>this.handleTimesUp()} />
                    )
                default:
                    return (
                        <button onClick={()=>this.setState({status:"START"})}>Restart Game</button>
                    )
            }
        }
        return (
            <div className="App">
                <h1>Memory Game</h1>
                <div className="Game">
                    {this.state.squares}
                </div>
                {footer()}
            </div>
        );
    }
}

export default App;
