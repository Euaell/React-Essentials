import React, {useState, useEffect} from "react";
import Users from "./users";

export function Home({login}){
    const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!login) return;
		setLoading(true);
		fetch(`https://api.github.com/users/${login}`)
		.then(response => response.json())
		.then(data => setData(data))
		.then(() => setLoading(false))
		.catch(err => setError(err));
	}, [login])

	if (loading)
	{
		return (
			<>
				<br />
				<div className="preloader-wrapper small active l-marg">
					<div className="spinner-layer spinner-green-only">
						<div className="circle-clipper left">
							<div className="circle"></div>
						</div>
						<div className="gap-patch">
							<div className="circle"></div>
						</div>
						<div className="circle-clipper right">
							<div className="circle"></div>
						</div>
					</div>
				</div>
			</>
		)
	}
	
	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
	if (!data) return;
	
	return (
		<>			
			<Users data={data}/>
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