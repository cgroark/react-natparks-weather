import React, {Component} from 'react';
import Weather from './Weather';

class ListItem extends Component {
	constructor(props){
		super(props)
		this.state = {
			location: '',
			url: '',
			name: ''
		}
	}

	infoHandler = () => {
		this.setState({
			name: this.props.name,
			location: this.props.location,
			url: this.props.url
		})
		console.log(this.props.name)
	}
	render() {
		let location = this.state.location
		return(
			<div>
				{!location &&
					<div className='park-list'>
						<li>
							{this.props.name}
							<button className='button' onClick={this.infoHandler}>More Info</button>
						</li>
					</div>
				}

				{location &&
					<div className='info-div'>
						<h1>{this.state.name}</h1>
						<h3>{this.state.url}</h3>
						<Weather latLong={this.state.location}/>
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
			console.log('liiiist', parkList)
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



