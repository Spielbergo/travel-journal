export default function Entries(props) {    
    return (
        <div className="entry--container">
            <div className="entry--img">
                <img src={props.img} alt={props.alt} />
            </div>

            <div className="entry--text">

                <div className="entry--location">
                    <span><i className="fa-solid fa-location-dot"></i> {props.location}</span>
                    <span className="entry--maplink"><a href={props.map} target="_blank">View on Google Maps</a></span>
                </div>
                
                <h3>{props.attraction}</h3>
                
                <div className="entry--dates">
                    <span>{props.startDate}</span>
                    <span>{props.endDate}</span>
                </div>

                <div className="entry--description">
                    {props.description}
                </div>

            </div>
        </div>        
    )
}