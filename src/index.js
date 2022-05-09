import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<App />
	// <div>
	// 	<h1 style={{ color: 'blue'}}> Hello, World! </h1>
	// 	<ul>
	// 		<li>Monday</li>
	// 		<li>Tuesday</li>
	// 		<li>Wednesday</li>
	// 		<li>Thursday</li>
	// 	</ul>
	// </div>


	// React.createElement(
	// 	"div",
	// 	null, 
	// 	React.createElement("h1", {style: {color: "blue"}}, "Hello, World!"),
	// 	React.createElement(
	// 		"ul",
	// 		null,
	// 		React.createElement("li", null, "monday"),
	// 		React.createElement("li", null, "Tuesday"),
	// 		React.createElement("li", null, "Wednesday"),
	// 	))
);

