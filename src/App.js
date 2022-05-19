import React, { useEffect, useState} from 'react';
import './App.css';
import Nav from './nav';
import Compontent from './compontent';
function App() {
	const [contents, setContents] = useState([]);
	const abortCont = new AbortController();

	useEffect(() => {
		fetch("http://127.0.0.1:6969/product", {signal: abortCont.signal})
		.then((res) => {
			if (res.ok) return res.json();
			throw Error("Request - could not be fetched!");
		})
		.then(setContents)
		
	}, [])

	return (
		<>
			<div className="App">
				<Nav />
			</div>
			<div className="row">
				{contents.map((content) => {
					return <Compontent content={content} key={content.id} />
				})}		
			</div>
		</>
	);
}

export default App;
