import React, {Component} from 'react';


class Weather extends Component {
	render(){
		return(
			<div>
					<h1>Weather?</h1>
					<li>{this.props.date}</li>
					<li>{this.props.conditions}</li>
					<li>{this.props.icon}</li>
			</div>

			)
	}
}

export default Weather;