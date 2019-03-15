import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ""
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();

        this.props.onFormSubmit(this.state.name);

        this.setState({
            name: "",
        })
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="title">Pokemon Name</label>
                    <input className="form-control" type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
                </div>
                
                <button disabled={this.state.name === ""}>Search</button>
            </form>
        )
    }
}
export default Form;