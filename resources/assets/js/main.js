import React from 'react';
import ReactDOM from 'react-dom';
import resourses from './resourses';
import LeftMenu from './Views/LeftMenu';
import HeadMenu from './Views/HeadMenu';
import Content from './Views/Content';
import App from './Models/App';
import { BrowserRouter } from 'react-router-dom';

App.getBuilder().all();
export default class Main extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<div className="container-fluid">
						<div className="row">
					    	<div className="col-12">
					        	<HeadMenu />
					    	</div>
						</div>
					</div>
					<div className="container-fluid">
					    <div className="row">
					        <div className="col-md-2">
								<LeftMenu />
					        </div>
					        <div className="col-md-10">
					        	<Content />
					        </div>
					    </div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);