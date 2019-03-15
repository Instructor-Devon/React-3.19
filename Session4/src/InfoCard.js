import React from 'react';

class InfoCard extends React.Component {
	constructor(props) {
		console.log("CONTRUCTOR");
		super(props);
		// intialize my state object
		this.state = {
			message: "By accepting the terms, you agree to be excellent.",
			hasAgreed: false,
			timesClicked: 0,
			time: 0
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState(prevState => ({
				time: prevState.time + 1
			}))
		}, 1000);
		console.log("DID MOUNT");
	}

	componentWillUnmount() {
		console.log("UNMOUNT");
		clearInterval(this.timer);
	}
	handleImageClick() {
		this.setState((prevState) => ({
			timesClicked: prevState.timesClicked + 1
		}));
	}
	handleTerms() {
		this.setState({
			message:"Thank you for agreeing to the terms!",
			hasAgreed: true
		});
	}
	render() {
		console.log("RENDER");
		const {imgPath, title, description} = this.props;

		let myButton = (!this.state.hasAgreed) 
			? <button onClick={() => this.handleTerms()} className="btn btn-primary">Do you accept the terms?</button>
			: null;

		if(this.state.hasAgreed)
			myButton = null;
		
		return (
			<div className="card" style={{width:"18rem", display:"inline-block"}}>
				<button onClick={() => this.props.handleDelete(this.props.id)} className="btn btn-danger">X</button>
				<img onClick={() => this.handleImageClick()} src={imgPath} className="card-img-top" alt="info" />
				<h3>{this.state.time}</h3>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					{myButton}
					<hr />
					<p>{this.state.message}</p>
					<h2>{this.state.timesClicked}</h2>
				</div>
			</div>
		)
	}
}
export default InfoCard;
