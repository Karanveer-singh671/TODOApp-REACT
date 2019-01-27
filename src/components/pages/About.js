import React from 'react';

export default function About() {
	// React.Fragment if not need any element in the dom then use and not on the dom but need for jsx when returning something
	return (
		<React.Fragment>
			<h1>
				About
				<p>TodoListApp, to practice fundamentals of react over again. </p>
			</h1>
		</React.Fragment>
	);
}
