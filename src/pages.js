import React, {useState, useRef} from "react";
import { PreUser } from "./preUser";
import { useLocation } from "react-router-dom";
import File from "./file";

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
				<div className="input-field col s3">
					<input ref={inp} id="first_name" type="text" className="validate" />
					<label htmlFor="first_name"> User Name</label>
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
			<File />
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

export function PageNotFound(){
	let location = useLocation();
	console.log(location);
	return (
		<div>
			<h1>[{location.pathname} Not Found!!]</h1>
		</div>
	)
}