import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import InfoCard from './InfoCard';

const App = (props) => {
    return (
        <div className="cards container">
            <InfoCard 
                imgPath="https://media.giphy.com/media/3o7qE7lYVVr6GjKeWY/giphy.gif"
                title="Monster Truck" 
                description="Awesome monster truck action with a side of adrenaline!"/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));