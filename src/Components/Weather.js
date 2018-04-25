import React, {Component} from 'react';
let weatherApi = '4777b8d76e2b5feb';

class Weather extends Component {
	constructor(props){
		super(props)
		this.state = {
			location: ''
		}
		let latlong = this.props.latLong;
		let split = latlong.split(':').slice(1,3).join().split(',');
  		let gone = split.splice(1,1);
  		let weatherUrl = 'http://api.wunderground.com/api/' + weatherApi + '/forecast10day/q/' +  split.join() + '.json';
  		fetch(weatherUrl)
  			.then(response => {
  				return response.json()
  			}).then(json => {
  				console.log(json)
  			})
	}

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