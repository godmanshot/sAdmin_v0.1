import React from 'react';
import Action from '../Models/Action';

export default class LeftMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {		
		var list = Array(6).fill('');

		if(this.props.actions.length > 0) {
			list = this.props.actions;
		}

		return (
		  <div className='left-menu'>
		    <ul>{list.map((arr) => <li>{arr.name}</li>)}</ul>
		  </div>
		);
	}
}