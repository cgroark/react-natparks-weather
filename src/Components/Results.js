import React, {Component} from 'react';
import FavParks from './FavParks';
let weatherApi = '4777b8d76e2b5feb';
let weatherData;

class ListItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			location: '',
			url: '',
			name: '',
			weather:'',
			forecast: '',
			search: '',
			description: ''
		}
	}

	listHandler = () => {
		this.props.handleList(this.props.url, this.props.name)
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
  		this.setState({
  			search: 'yes'
  		})
  		fetch(weatherUrl)
  			.then(response => {
  				return response.json()
  			}).then(json => {
  				this.setState({
  					name: this.props.name,
					location: this.props.location,
					url: this.props.url,
					description: this.props.description,
  					weather: json.forecast.txt_forecast.forecastday,
  					search: ''
  				}) 

  			})
	}
	render() {
		let location = this.state.location;
		let forecast = this.state.forecast;
		let search = this.state.search;

		return(	
			<div className='park-list'>
				{!location && !search &&
					<div className='park-each'>
						<li key={this.props.name}>
							{this.props.name}
							<button className='button' onClick={this.infoHandler}>More Info</button>
							<button className='button' onClick={this.listHandler}>Add to Park List</button>
						</li>
					</div>
				}

				{search && !location &&
					<div className='loading'>
						<h2>Loading...</h2>
					</div>
				}

				{location && !forecast &&
					<div className='forecast-div'>
						<h3 className='park-name'>{this.state.name}</h3>
						<p className='description'>{this.state.description}</p>
						<a href={this.state.url} target='_blank'>Visit Park Website</a>
						<p className='day'>Weather forecast for {this.state.weather[0].title}</p>
						<img src={this.state.weather[0].icon_url} />
						<p className='weather'>{this.state.weather[0].fcttext}</p>
						<button className='button' onClick={this.hideHandler}>Hide Details</button>
						<button className='button' onClick={this.forecastHandler}>3 Day Forecast</button>
						<button className='button' onClick={this.listHandler}>Add to Park List</button>
					</div>
				}	

				{forecast &&
					<div className='forecast-div'>
						<h3 className='park-name'>{this.state.name}</h3>
						<a href={this.state.url} target='_blank'>Visit Park Website</a>
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
						<button className='button' onClick={this.listHandler}>Add to Park List</button>
					</div>
				}
			</div>
			
			)
	}
}

class Results extends Component {
	constructor(props){
		super(props)
		this.state = {
			listData: []
		}
	}

	handleList = (url, name) => {
		let listArr = this.state.listData;
		listArr.push({
			name: name,
			url: url
		});
		this.setState({
			listData: listArr
		})
	}

	deleteItem = (item) => {
		let localList = this.state.listData;
		let itemIdx = localList.indexOf(item);
		localList.splice(itemIdx,1);
		this.setState({
			listData: localList
		})
	}
	render(){
		let parkList;
		if(this.props.results.length > 0){
			parkList = this.props.results.map(park => {
				return <ListItem name={park.fullName} location={park.latLong} url={park.url} description={park.description} handleList={this.handleList}/>
			})
		}
		return (
			<div >
				<ul className='park-list'>
					{parkList}
				</ul>
				<FavParks data={this.state.listData} delete={this.deleteItem}/>
			</div>
	
		)
	}
}

export default Results;



