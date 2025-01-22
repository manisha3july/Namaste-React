

const StyleCard = {
    backgroundColor: '#fff',
}



const ResturantCard = (props) => {

    const {name, cuisines, avgRatingString,  costForTwo, cloudinaryImageId, sla } = props.restData.info
    return (
        <div className='rest-card' style={StyleCard}>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} style={{ width: '100%' }}></img>
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">{cuisines.join(', ')}</p>
                <p className="card-rating">{avgRatingString}</p>
              
                <p className="card-description"> {costForTwo}</p>
                <p className="card-description">{sla?.slaString}</p>
            </div>

        </div>
    )
}

export default ResturantCard