import React from 'react';
import Action from '../Models/Action';
import Notification from '../Models/Notification';

export default class HeadMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {notifications: []};

		this.notifyRef = React.createRef();
	}

	componentDidMount() {
		this.notifications();
		
		this.timerID = setInterval(
			() => this.notifications(),
			5000
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
					<ul className="notifications" ref={this.notifyRef}>
						{this.state.notifications.map((not) => <li>{not.text}</li>)}
					</ul>
					<span onClick={() => this.notifyRef.current.classList.toggle("active")}>
						Уведомления: {this.state.notifications.length}
					</span>
					<span>Выйти</span>
				</div>
			</div>
		);
	}
}