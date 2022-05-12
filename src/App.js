import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import {
	Home,
	About, 
	Events,
	Contact,
	PageNotFound
} from "./pages";
 
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home login="euaell" />}/>
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />}/>
				<Route path="/contact" element={<Contact />}/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</div>
	)
}

export default App;
