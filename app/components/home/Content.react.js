import React from 'react';


class Content extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
            <div>
               <div className="callout large">
					<div className="row column text-center">
						<h1>Changing the World Through Design</h1>
						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
						<a href="#" className="button large">Learn More</a>
						<a href="#" className="button large hollow">Learn Less</a>
					</div>
				</div>
				<article className="grid-container">
					<div className="grid-x grid-margin-x">
						<div className="medium-6 cell small-order-2 medium-order-1">
							<h2>Our Agency, our selves.</h2>
							<p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero. Vestibulum mollis mauris enim. Morbi euismod magna ac lorem rutrum elementum. Donec viverra auctor.</p>
						</div>
						<div className="medium-6 cell small-order-1 medium-order-2">
							<img className="thumbnail" src="https://placehold.it/750x350" />
						</div>
					</div>

					<div className="grid-x grid-margin-x">
						<div className="medium-4 cell">
							<h3>Photoshop</h3>
							<p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
						</div>
						<div className="medium-4 cell">
							<h3>Javascript</h3>
							<p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
						</div>
						<div className="medium-4 cell">
							<h3>Marketing</h3>
							<p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
						</div>
					</div>

					<hr />

					<div className="row column">
						<ul className="vertical medium-horizontal menu expanded text-center">
							<li><a href="#"><div className="stat">28</div><span>Websites</span></a></li>
							<li><a href="#"><div className="stat">43</div><span>Apps</span></a></li>
							<li><a href="#"><div className="stat">95</div><span>Ads</span></a></li>
							<li><a href="#"><div className="stat">59</div><span>Cakes</span></a></li>
							<li><a href="#"><div className="stat">18</div><span>Logos</span></a></li>
						</ul>
					</div>

					<hr />

					<div className="row column">
						<h3>Our Recent Work</h3>
					</div>

					<div className="grid-x grid-margin-x medium-up-3 large-up-4">
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
						<div className="cell">
							<img className="thumbnail" src="https://placehold.it/550x550" />
						</div>
					</div>

					<hr />
				</article>
				<article className="grid-container">
					<div className="row column">
					<ul className="menu">
						<li><a href="#">One</a></li>
						<li><a href="#">Two</a></li>
						<li><a href="#">Three</a></li>
						<li><a href="#">Four</a></li>
					</ul>
					</div>
				</article>
            </div>
		);
	}
}

export default Content;