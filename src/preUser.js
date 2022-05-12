import React, {useState, useEffect} from "react";
import Users from "./users";

export function PreUser({user}) {
    const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!user) return;
		setLoading(true);
		fetch(`https://api.github.com/users/${user}`)
		.then(response => response.json())
		.then(data => setData(data))
		.then(() => setLoading(false))
		.catch(err => setError(err));
	}, [user])

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
     );
}
