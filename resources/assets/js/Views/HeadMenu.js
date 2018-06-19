import React from 'react';
import Action from '../Models/Action';
import Notification from '../Models/Notification';

export default class HeadMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {notifications: []};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.notifications(),
			1000
		);
	}

	notifications() {
		Notification.getBuilder().all((data) => this.setState({notifications: data}));
	}

	render() {
		return (
			<div className="head_menu d-flex">
				<div className="hello">Добро пожаловать!</div>
				<div className="right-side ml-auto">
					<span onClick={()=>alert('sdf')}>
						Уведомления: {this.state.notifications.length}
						<ul className="notifications">
							{this.state.notifications.map((not) => <li>{not.text}</li>)}
						</ul>
					</span>
					<span>Выйти</span>
				</div>
			</div>
		);
	}
}