import React,{ Component } from 'react';

class Parks extends Component {
	constructor(props){
		super(props)
		this.state = {
			park: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
