/* import react */
import React from 'react';
/* import other components */
import Nav from '../../components/home/Nav.react';
import Content from '../../components/home/Content.react';

/* action */
//import {loadChats} from '../../actions/chat/ChatActions';

class Home extends React.Component{
	constructor(){
		super();		
	}

	render(){
		return(<div>
				<Nav />
				 <section className="container-fluid">
				    <div className="columns is-table is-tablet is-desktop">
                <Content />
				    </div>
				</section>
			</div>

		);
	}
}

export default Home;