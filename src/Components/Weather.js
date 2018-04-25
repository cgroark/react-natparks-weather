import React, {Component} from 'react';

class Weather extends Component {
	
	render(){
		return(
			<div>
				{this.props.latLong}
				<h1>weather info here</h1>
			</div>
		)
	}
}

export default Weather;