import React from 'react';
import { Link } from 'react-router-dom';
// functional just need return no render since that involves react lifecycle
function Header() {
	return (
		<header style={headerStyle}>
			<h1>TodoList</h1>
			<Link style={linkStyle} to="/">
				Home
			</Link>{' '}
			|{' '}
			<Link style={linkStyle} to="/about">
				About
			</Link>
		</header>
	);
}

const linkStyle = {
	color: 'black',
	textDecoration: 'none'
};

const headerStyle = {
	background: 'darkgrey',
	color: 'white',
	textAlign: 'center',
	padding: '10px'
};

export default Header;
