import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NewsContent from './Contents/NewsContent';
import App from '../Models/App';

export default class Content extends React.Component {

	render() {

		return (
			<div className="content">
				<Switch>
					<Route exact path={App.baseRoute+'/news'} component={NewsContent}/>
					<Route exact path={App.baseRoute+'/product'} component={() => <div>Как дела</div>}/>
					<Route exact path={App.baseRoute+'/post'} component={() => <div>Что делаешь</div>}/>
				</Switch>
			</div>
		);
	}
}