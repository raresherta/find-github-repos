import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
	return (
		<div>
			<nav className='github-nav'>
				<h1>
					<i className='fab fa-github' /> Github Finder
				</h1>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
