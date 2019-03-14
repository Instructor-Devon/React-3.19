import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import InfoCard from './InfoCard';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };
    }

    onHandleSubmit(data) {
        this.setState(prevState => ({
            cards: [...prevState.cards, {...data, id:Date.now()}]
        }));
    }

    reduceCards(id) {
        this.setState(prevState => ({
            cards: prevState.cards.filter(card => card.id !== id)
        }))
    }

    buildCards() {
        if(this.state.cards < 1)
            return null;

        return this.state.cards.map((card) => {
            const { title, description, imgPath, id } = card;
            return <InfoCard 
                title={title} 
                description={description} 
                imgPath={imgPath} 
                key={id}
                id={id} 
                handleDelete={(id) => this.reduceCards(id)}/>;
        })
        
    }
    
    render() {
        return (
            <div className="container">
                <h1>Add a new Thing!</h1>
                <Form onFormSubmit={(data) => this.onHandleSubmit(data)} />
                <hr />
                {this.buildCards()}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));