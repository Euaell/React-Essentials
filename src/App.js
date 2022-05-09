import React, { useState} from 'react';
import './App.css';
import Nav from './nav';
import Compontent from './compontent';
function App() {
	const content = useState(
		{
			id: "",
			Title: "CNC",
			desc: "Automatic CNC milling machine is used for mold making and 3D milling works, including metal molds, clock parts, metal electrode, shoe molds, metal arts and crafts, jewelry and other molds making, the CNC mill can make 2D or 3D relief on various materials."
		}
	);

	return (
		<>
			<div className="App">
				<Nav />
			</div>
			<Compontent content={content[0]} />

			{/* contents.forEach(content => {
				<Compontent content={content}/>
			}); */}
		</>
		
		
	);
}

export default App;
