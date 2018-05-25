import React from 'react';
import {Route, Switch} from 'react-router';
import Presentation from '../partials/Presentation.react';
import ReactDashboard from '../partials/ReactDashboard.react';
import ReduxDashboard from '../partials/ReduxDashboard.react';
import FoundationDashboard from '../partials/FoundationDashboard.react';
import PrivateRoute from '../../containers/session/PrivateRoute.react';
//import ReactDashboard from '';
//import ReduxDashboard from '';
//import FoundationDashboard from '';


class Content extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<Switch>
					<Route path="/" component={Presentation} exact={true}/> 					
					<Route path="/react" component={ReactDashboard} exact={false} /> 
					<Route path="/redux" component={ReduxDashboard} exact={true} /> 
					<Route path="/foundation" component={FoundationDashboard} exact={true} />					
				</Switch>
			</div>			
		);
	}
}

export default Content;