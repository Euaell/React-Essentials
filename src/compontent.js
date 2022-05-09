function Compontent(content) {
    return ( 
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">{content.content.Title}</span>
                        <p>{content.content.desc}</p>
                    </div>
                    <div class="card-action">
                        <a href="/">Visit</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Compontent;