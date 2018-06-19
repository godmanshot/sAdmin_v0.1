import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import Action from './Models/Action';
import App from './Models/App';
import LeftMenu from './Views/LeftMenu';
import HeadMenu from './Views/HeadMenu';

export default class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {actions: []};
		
		App.getBuilder().all((data) => (
			this.setState({actions: data.actions})
		));
	}

	render() {
		return (
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
							<LeftMenu actions={this.state.actions} />
		                </div>
		                <div className="col-md-10"></div>
		            </div>
		        </div>
	        </div>
		);
	}
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);