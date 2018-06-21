import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../Models/App';
import NewsContent from './Contents/NewsContent';
import PostContent from './Contents/PostContent';

export default class Content extends React.Component {

	render() {
		NewsContent.baseRoute = App.baseRoute+'/news';
		PostContent.baseRoute = App.baseRoute+'/post';

		return (
			<div className="content">
				<Switch>
					<Route path={App.baseRoute+'/news/:page?'} component={NewsContent}/>
					<Route exact path={App.baseRoute+'/news/page/:page'} component={NewsContent}/>
					<Route exact path={App.baseRoute+'/product'} component={() => <div>Как дела</div>}/>
					<Route exact path={App.baseRoute+'/post'} component={PostContent}/>
				</Switch>
			</div>
		);
	}
}