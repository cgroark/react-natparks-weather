import React, {Component} from 'react';
let parkDataList;

class ListPark extends Component {
	deleteHandler = () => {
		console.log('clicked', this.props.item)
		this.props.delete(this.props.item);
	}

	render(){
		return(
			<div className='park-save'>
				<button className='del-button' onClick={this.deleteHandler}>X</button>
				<h4 className='fav-park'>
					{this.props.name}
				</h4>
				<a className='fav-link' href={this.props.url} target='_blank'>Visit Park Website</a>
			</div>

			)
	}
}

class FavParks extends Component {
	render(){
		let listLength = this.props.data.length;
		if(listLength >= 1){
			parkDataList = this.props.data.map(park => {
				return <ListPark name={park.name} url={park.url} item={park} delete={this.props.delete} />
			})
		}
		return(
			<div className = 'fav-list'>
			<h1>Park List</h1>
			{listLength > 0 &&
				<div className=''>
						<div>
							{parkDataList}
						</div>
				</div>
			
			}

			{listLength === 0 &&
				<p>Click 'Add to Park List' to add parks here</p>
			}
			</div>
			
		)
	}
}

export default FavParks;