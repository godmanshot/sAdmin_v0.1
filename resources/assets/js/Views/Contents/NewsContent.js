import React from 'react';
import News from '../../Models/News';
import PostContent from './PostContent';

export default class NewsContent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			news: Array(6).fill('')
		};
	}

	componentDidMount() {
		News.getBuilder().all((data) => this.setState({news: data}));
	}

	render() {
		return (
			<div>
				<div className="header"><h3>Новости</h3></div>
				<div className="body">
					<div className="list">
						<table className="table">
							<thead>
								<tr>
									<th>ID</th>
									<th>Заголовок</th>
									<th>Описание</th>
									<th>Дата публикации</th>
									<th>Действия</th>
								</tr>
							</thead>
							<tbody>
								{this.state.news.map((news) =>
									<tr>
										<td className="id">{news.id}</td>
										<td className="title">{news.title}</td>
										<td className="mini_description">{news.mini_description}</td>
										<td className="publish_date">{news.publish_date}</td>
										<td className="actions">Удалить</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}