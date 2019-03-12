
const Header = React.createElement("h1", null, "Hello React");


const App = (props) => {
    return React.createElement("div", {className: "jumbotron"},
        React.createElement("h1", null, `Hello ${props.name}`),
        React.createElement("p", null, `${props.name} is ${props.description}`)
    );
}

ReactDOM.render(App({name: "React", description: "a super cool JS library"}), document.getElementById("root"));