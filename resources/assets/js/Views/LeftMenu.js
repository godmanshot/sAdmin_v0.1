import React from 'react';
import Action from '../Models/Action';
import App from '../Models/App';
import { Link } from 'react-router-dom'

export default class LeftMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			actions: Array(6).fill('')
		};

		App.getBuilder().all((data) => (
			this.setState({actions: data.actions})
		));
	}

	render() {

		return (
		  <div className='left-menu'>
		    <ul>{this.state.actions.map((arr) => <li>{arr != '' ? <Link to={App.baseRoute+'/'+arr.identity}>{arr.name}</Link> : ''}</li>)}</ul>
		  </div>
		);
	}
}