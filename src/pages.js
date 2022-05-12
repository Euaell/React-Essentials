import React, {useState, useRef} from "react";
import { PreUser } from "./preUser";

export function Home({login}){
    const inp = useRef();
	const [user, setUser] = useState(login);

	function clickHandler(){
		if (inp.current.value === "") return;
		setUser(inp.current.value);

		inp.current.value = null;
	}


	return ( 
		<>	
			<div className="row">
				<div className="input-field col s4">
					<input ref={inp} id="first_name" type="text" className="validate" />
					<label for="first_name">User Name</label>
       			</div>
				<div className="col s3">
					<br />
					<input className="btn waves-effect waves-light" type="button" value="search" onClick={clickHandler}/>
				</div>
  			</div>	
			<PreUser user={user}/>
		</>		
	)
}

export function About(){
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Events(){
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact(){
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}