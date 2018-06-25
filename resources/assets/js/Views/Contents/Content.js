import React from 'react';
import Pagination from '../Pagination';

export default class PostContent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			models: Array(6).fill(''),
			current_page: 1,
			last_page: ''
		};

		this.className = null;
	}

	componentDidMount() {
		this.init();
	}

	componentDidUpdate(prevProps) {
	  if (this.props.match.url !== prevProps.match.url) {
			this.init();
	  }
	}

	init() {
		var page = this.props.match.params.page ? this.props.match.params.page : 1;

		this.className.getBuilder().paginate(page, (data) => this.setState({
			models: data.data,
			current_page: data.current_page,
			last_page: data.last_page
		}));
	}

	delete(model) {
		if(confirm()) {
			this.className.getBuilder().delete(model.id, (data) => this.init());
		}
	}

	getPagination() {
		return <Pagination base_route={this.constructor.baseRoute} current_page={this.state.current_page} last_page={this.state.last_page} />;
	}

}