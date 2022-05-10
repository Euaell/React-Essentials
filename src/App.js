import React, {useReducer} from "react";
import './App.css';

function App(props) {
	const [checked, toggle] = useReducer(
		(checked) => !checked,
		false
	);

	return (
		<>
			<input type="checkbox" value={checked} onChange={toggle}/>
			<p>{checked ? "Checked" : "Unchecked"}</p>
		</>
	)
}

export default App;
