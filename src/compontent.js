function Compontent({content}) {
    
    return ( 
        <div className="col s9 m5">
            <div className="card">
                <div className="card-image">
                    <img height={200} width={200} src={content.pic} alt=""/>
                    <span className="card-title name">{content.Name}</span>
                </div>
                <div className="card-content">
                    <p>{content.desc}</p>
                </div>
                <div className="card-action">
                    <a href="/">visit</a> {content.price} Birr
                </div>
            </div>
        </div>
     );
}
 
export default Compontent;