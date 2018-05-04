import React, {Component} from 'react';


class ParkList extends Component {
	render(){
		return(
			<div>
					<h1>Park List</h1>
					<li>{this.props.name}</li>
			</div>

			)
	}
}

export default ParkList;