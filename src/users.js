function Users({data}) {
    return ( 
        <div className="row">
			<div className="col s10 m2">
				<div className="card small">
					<div className="card-image">
						<img height={200} alt={`avatar of ${data.login}`}  src={data.avatar_url}/>
						<span className="card-title">{data.name}</span>
					</div>
					<div className="card-content">
						<p>{data.bio}</p>
					</div>
					<div className="card-action">
						<a  rel="noreferrer" target="_blank" href={`https://twitter.com/${data.twitter_username}`}>twitter</a>
					</div>
				</div>
			</div>
		</div>
     );
}

export default Users;