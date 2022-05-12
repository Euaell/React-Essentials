import React, {useState, useEffect} from "react";
import Loading from "./preloader";
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

	if (loading) return <Loading />
	
	if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
	if (!data) return;
	
	
    return ( 
        <>
            <Users data={data}/>
        </>
     );
}
