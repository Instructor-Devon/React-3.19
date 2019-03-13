import React from 'react';

class InfoCard extends React.Component {
	constructor(props) {
		super(props);
		// intialize my state object
		this.state = {
			message: "By accepting the terms, you agree to be excellent.",
			hasAgreed: false,
			timesClicked: 0
		}
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
		console.log("I AM RENDERING");
		const {imgPath, title, description} = this.props;

		let myButton = (!this.state.hasAgreed) 
			? <button onClick={() => this.handleTerms()} className="btn btn-primary">Do you accept the terms?</button>
			: null;

		if(this.state.hasAgreed)
			myButton = null;
		
		return (
			<div className="card" style={{width:"18rem"}}>
				<img onClick={() => this.handleImageClick()} src={imgPath} className="card-img-top" alt="info" />
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

// const InfoCard = props => {
// 	const {imgPath, title, description} = props;
// 	console.log(imgPath);
// 	return (
// 		<div className="card" style={{width:"18rem"}}>
// 			<img src={imgPath} className="card-img-top" alt="info" />
// 			<div className="card-body">
// 				<h5 className="card-title">{title}</h5>
// 				<p className="card-text">{description}</p>
// 				<button className="btn btn-primary">Do Something!</button>
// 				<hr />
// 				<p>By accepting the terms, you agree to be excellent.</p>
// 			</div>
// 		</div>
// 	)
// };

export default InfoCard;
