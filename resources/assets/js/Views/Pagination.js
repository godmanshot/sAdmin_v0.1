import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Pagination extends React.Component {

	render() {
		var current = this.props.current_page;
		var route = this.props.base_route;
		var last_page = this.props.last_page;

		return <div>
			<NavLink to={current > 1 ? `${route}`+'/'+(current-1) : '#'} className={'btn ' + (current > 1 ? '' : 'disabled')}>Предыдущая</NavLink>
			<NavLink to={`${route}`+'/'+(current+1)} className={'btn ' + ((current >= last_page) ? 'disabled' : '')}>Следующая</NavLink>
		</div>;
	}
}