import React, {Component} from 'react';
import Weather from './Weather';
let weatherApi = '4777b8d76e2b5feb';
let weatherData

class ListItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			location: '',
			url: '',
			name: '',
			weather:''
		}
	}



	infoHandler = () => {
		let latlong = this.props.location;
		let split = latlong.split(':').slice(1,3).join().split(',');
  		let gone = split.splice(1,1);
  		let locationData = split.join()
  		let weatherUrl = 'http://api.wunderground.com/api/' + weatherApi + '/forecast10day/q/' +  locationData + '.json';
  		console.log(weatherUrl)
  		fetch(weatherUrl)
  			.then(response => {
  				return response.json()
  			}).then(json => {
  				this.setState({
  					name: this.props.name,
					location: this.props.location,
					url: this.props.url,
  					weather: json.forecast.txt_forecast.forecastday
  				}) 

  			})
	}
	render() {
		let location = this.state.location
		return(
			<div className='park-list'>
				{!location &&
					<div>
						<li key={this.props.name}>
							{this.props.name}
							<button className='button' onClick={this.infoHandler}>More Info</button>
						</li>
					</div>
				}

				{location &&
					<div className='info-div'>
						<p className='park-name'>{this.state.name}</p>
						<a href={this.state.url}>visit website</a>
						<p>Weather forecast for {this.state.weather[0].title}</p>
						<p className='weather'>{this.state.weather[0].fcttext}</p>
						<img src={this.state.weather[0].icon_url} />
						
						
					</div>
				}	
			</div>
			
			)
	}
}

class Results extends Component {
	render(){
		let parkList;
		if(this.props.results.length > 0){
			parkList = this.props.results.map(park => {
				return <ListItem name={park.fullName} location={park.latLong} url={park.url} />
			})
		}
		return (
			<div >
				<ul className='park-list'>
					{parkList}
				</ul>
			</div>
	
		)
	}
}

export default Results;



