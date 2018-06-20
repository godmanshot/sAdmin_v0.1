import React from 'react';
import News from '../../Models/News';
import NewsContent from './NewsContent';

export default class PostContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			news: []
		};
	}

	componentDidMount() {
		News.getBuilder().all((data) => this.setState({news: data}));
	}

	render() {
		// console.log(this.props.ContentComponent);
		return (
			<div className="" onClick={() => this.props.setContent(<NewsContent />)}>
				hello
			</div>
		);
	}
}