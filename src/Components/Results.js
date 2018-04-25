import React, {Component} from 'react';

class Results extends Component {
	render(){
		let parkList;
		if(this.props.results.length > 0){
			parkList = this.props.results.map(park => {
				return <ListItem name={park.fullName} location ={park.latLong} url={park.url} />
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

class ListItem extends Component {
	render() {
		console.log('this one', this.props.name)
		return(
			<div className='park-list'>
				
				<li>{this.props.name}</li>

			</div>

			)
	}
}

