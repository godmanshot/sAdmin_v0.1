import React from 'react';
import { NavLink } from 'react-router-dom';
import App from '../../Models/App';

export default class PostContent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			models: Array(6).fill(''),
			current_page: 1
		};

		this.className = null;
		this.url = this.props.match.url;
	}

	componentDidMount() {
		this.init();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		console.log(nextProps.match.params.page);
		this.className.getBuilder().paginate(nextProps.match.params.page, (data) => this.setState({
			models: data.data,
			current_page: data.current_page
		}));
	}


	init() {
		var page = this.props.match.params.page ? this.props.match.params.page : 1;

		this.className.getBuilder().paginate(page, (data) => this.setState({
			models: data.data,
			current_page: data.current_page
		}));
	}

	delete(model) {
		if(confirm()) {
			this.className.getBuilder().delete(model.id, (data) => this.reupdate());
		}
	}

	getPagination() {
		return <div>
			<NavLink to={`${this.constructor.baseRoute}` + '/' + (this.state.current_page - 1)}>Предыдущая</NavLink> 
			<NavLink to={`${this.constructor.baseRoute}` + '/' + (this.state.current_page + 1)}>Следующая</NavLink>
		</div>;
	}

}