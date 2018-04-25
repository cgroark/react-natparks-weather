import React,{ Component } from 'react';
let api = 'TpUEGQRVegmV8RRSxrepQC1vjb9NjINuVHNsAvhq';

class Parks extends Component {
	constructor(props){
		super(props)
		this.state = {
			park: '',
			parkData: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		console.log(this.state.park)
		this.setState({
			park: e.target.value
		})
	}

	

	handleSubmit(e) {
		e.preventDefault()
		let parksApi = "https://developer.nps.gov/api/v1/parks?stateCode=" + this.state.park + "&api_key=" + api
		fetch(parksApi)
			.then((response) => {
				return response.json()
			})
			.then((json) => {
				console.log(json.data)
				let national = json.data.filter((park) =>{
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
			<form className='search-bar' onSubmit={this.handleSubmit}>
				<label className='search-label'>Search</label>
				<input placeholder='search here' type='text' value={this.state.park} onChange={this.handleChange} />
				<button className='button' type='submit'>Submit</button>
			</form>
		)
	}
}

export default Parks;

