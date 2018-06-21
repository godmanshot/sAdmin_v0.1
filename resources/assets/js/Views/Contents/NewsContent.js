import React from 'react';
import Content from './Content';
import News from '../../Models/News';

export default class NewsContent extends Content {
	constructor(props) {
		super(props);

		this.className = News;
	}

	render() {
		return (
			<div>
				<div className="header"><h3>Новости</h3></div>
				<p className="text-right"><a onClick={() => this.reupdate()} href="#">Обновить</a></p>
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
								{this.state.models.map((model) =>
									<tr>
										<td className="id">{model.id}</td>
										<td className="title">{model.title}</td>
										<td className="mini_description">{model.mini_description}</td>
										<td className="publish_date">{model.publish_date}</td>
										<td className="actions"><a onClick={() => this.delete(model)} href="#">Удалить</a></td>
									</tr>
								)}
							</tbody>
						</table>
						{this.getPagination()}
					</div>
				</div>
			</div>
		);
	}
}