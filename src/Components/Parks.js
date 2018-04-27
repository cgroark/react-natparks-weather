import React,{ Component } from 'react';
import Results from './Results';
let api = 'TpUEGQRVegmV8RRSxrepQC1vjb9NjINuVHNsAvhq';

class Parks extends Component {
	constructor(props){
		super(props)
		this.state = {
			park: '',
			parkData: []
		}
	}
	handleChange = (e) => {
		this.setState({
			park: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		let parksApi = "https://developer.nps.gov/api/v1/parks?stateCode=" + this.state.park + "&api_key=" + api
		fetch(parksApi)
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				let national = json.data.filter(park =>{
					return park.designation === 'National Park'
				})
				this.setState({
					parkData: national
				})
				console.log('stateeeeeee',this.state.parkData)
			})	
	}

	render() {
		return (
			<div>
				<form className='search-bar' onSubmit={this.handleSubmit}>
					<label className='search-label'>Search</label>
					<input placeholder='search here' type='text' value={this.state.park} onChange={this.handleChange} />
					<button className='search-button' type='submit'>Submit</button>
				</form>
				<Results results={this.state.parkData} />
			</div>
		)
	}
}

export default Parks;

