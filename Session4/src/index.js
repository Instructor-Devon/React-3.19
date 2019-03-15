import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import PokeCard from './PokeCard';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            pokemon: null
        };
    }

    componentWillMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon/1")
        .then(response => {
            console.log(response);
            this.setState({
                pokemon: response.data
            });
        })
        .catch(error => {
            
        })
    }

    onHandleSubmit(name) {
        this.setState({error: null});
        this.fetchPokemon(name);
    }

    fetchPokemon(name) {
        axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
        .then(response => {
            console.log(response, "we did it");
            this.setState({
                pokemon: response.data
            });
        })
        .catch(error => {
            this.setState({
                error: "Pokemon not found!"
            })
        })
    }

    reduceCards(id) {
        this.setState(prevState => ({
            cards: prevState.cards.filter(card => card.id !== id)
        }))
    }

    buildPokemon() {
        if(this.state.pokemon == null)
            return null;
        
        return <PokeCard pokemon={this.state.pokemon} />;
    }

    buildError() {
        if(this.state.error === null)
            return null;

        return <h3 style={{fontWeight: "bold", color: "red"}}>{this.state.error}</h3>
    }

    
    render() {
        return (
            <div className="container">
                <h1>POKEDEX</h1>
                {this.buildError()}
                <Form onFormSubmit={(data) => this.onHandleSubmit(data)} />
                <hr />
                {this.buildPokemon()}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));