import React, {useState, useEffect} from "react";
import './App.css';

function App(props) {
	const [emotion, setEmotion] = useState("Happy");
	const [secondary, setSecondary] = useState("Tired");

	useEffect(() => {
		console.log(`It's ${emotion} in here.`);
	}, [emotion])

	useEffect(() => {
		console.log(`It's ${secondary} in here.`);
	}, [secondary])

	return (
		<>
			<h1>Feeling {emotion} and {secondary}</h1>
			<button onClick={() => {setEmotion("Happy"); setSecondary("Tired")}}>Make Happy</button>
			<button onClick={() => setEmotion("Annoyed")}>Annoy</button>
			<button onClick={() => setEmotion("Mad")}>Make angry</button><br />
			<button onClick={() => setSecondary("Cranky")}>Crank</button>
		</>
	)
}

export default App;
