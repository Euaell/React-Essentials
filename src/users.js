function Users({data}) {
    return ( 
        <div className="row">
			<div className="col s10 m3">
				<div className="card Roboto-Slab">
					<div className="card-image">
						<img height={250} alt={`avatar of ${data.login}`}  src={data.avatar_url}/>
						<span className="card-title">{data.name}</span>
					</div>
					<div className="card-content">
						<p>{data.bio}</p>
					</div>
					<div className="card-action center">
						<a  rel="noreferrer" target="_blank" href={`https://twitter.com/${data.twitter_username}`}>twitter</a>
					</div>
				</div>
			</div>
		</div>
     );
}

export default Users;