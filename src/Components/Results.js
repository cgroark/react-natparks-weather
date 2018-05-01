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
			weather:'',
			forecast: ''
		}
	}

	forecastHandler = () => {
		this.setState({
			forecast: 'yes'
		})
	}

	hideHandler = () => {
		this.setState( {
			location: '',
			forecast: '',
		})
	}


	infoHandler = () => {
		let latlong = this.props.location;
		let split = latlong.split(':').slice(1,3).join().split(',');
  		let gone = split.splice(1,1);
  		let locationData = split.join()
  		let weatherUrl = 'http://api.wunderground.com/api/' + weatherApi + '/forecast10day/q/' +  locationData + '.json';
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
		let location = this.state.location;
		let forecast = this.state.forecast;
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

				{location && !forecast &&
					<div className='info-div'>
						<p className='park-name'>{this.state.name}</p>
						<a href={this.state.url}>Visit Park Website</a>
						<p className='day'>Weather forecast for {this.state.weather[0].title}</p>
						<img src={this.state.weather[0].icon_url} />
						<p className='weather'>{this.state.weather[0].fcttext}</p>
						<button className='button' onClick={this.hideHandler}>Hide Details</button>
						<button className='button' onClick={this.forecastHandler}>3 Day Forecast</button>
					</div>
				}	

				{forecast &&
					<div className='forecast-div'>
						<p className='park-name'>{this.state.name}</p>
						<a href={this.state.url}>Visit Park Website</a>
						<div className='forecast'>
							<div className='weather-day'>
								<p className='day'>Weather forecast for {this.state.weather[0].title}</p>
								<img className ='weather-icon' src={this.state.weather[0].icon_url} />
								<p className='weather'>{this.state.weather[0].fcttext}</p>
							</div>
							<div className='weather-day'>
								<p className='day'>Weather forecast for {this.state.weather[2].title}</p>
								<img src={this.state.weather[2].icon_url} />
								<p className='weather'>{this.state.weather[2].fcttext}</p>
							</div>
							<div className='weather-day'>
								<p className='day'>Weather forecast for {this.state.weather[4].title}</p>
								<img src={this.state.weather[4].icon_url} />
								<p className='weather'>{this.state.weather[4].fcttext}</p>
							</div>
						</div>
						<button className='button' onClick={this.hideHandler}>Hide Details</button>
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



