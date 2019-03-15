import React from 'react';

class PokeCard extends React.Component {
	constructor(props) {
		console.log("CONTRUCTOR");
		super(props);
		// intialize my state object
		this.state = {
		}
	}

	render() {
		console.log("RENDER");
		const {sprites, name} = this.props.pokemon;

	

		
		return (
			<div className="card" style={{width:"18rem", display:"inline-block"}}>
				<img src={sprites.front_default} className="card-img-top" alt={name} />
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<hr />
				</div>
			</div>
		)
	}
}
export default PokeCard;
