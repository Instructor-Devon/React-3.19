import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            imgPath: ""
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();

        this.props.onFormSubmit(this.state);

        this.setState({
            title: "",
            description: "",
            imgPath: ""
        })
    }
    render() {
        return (
            <form onSubmit={(event) => this.handleFormSubmit(event)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Description</label>
                    <input className="form-control" type="text" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Image URL</label>
                    <input className="form-control" type="text" value={this.state.imgPath} onChange={(event) => this.setState({imgPath: event.target.value})}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
export default Form;