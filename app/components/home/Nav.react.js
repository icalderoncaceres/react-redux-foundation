import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';

class Nav extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(<div>
				<div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
					<button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
					<div className="title-bar-title">Menu</div>
				</div>
				<div className="top-bar" id="responsive-menu">
					<div className="top-bar-left">
						<ul className="dropdown menu" data-dropdown-menu>
							<li><a href="https://icalderoncaceres.github.io" target="_blank">Iván Calderon</a></li>
							<li><Link to="react">React</Link></li>
							<li><Link to="redux">Redux</Link></li>
							<li><Link to="foundation">Foundation</Link></li>
						</ul>
					</div>
					<div className="top-bar-right">
						<ul className="menu">
							<li><input type="search" placeholder="Buscar"></input></li>
							<li><button type="button" className="button">Buscar</button></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;