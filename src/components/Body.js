import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const Body = () => {
    const [listOfResto, setListOfResto] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredResto, setFilteredResto] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();

        const allRestaurants = json.data.cards
            .filter(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            .flatMap(card => card.card.card.gridElements.infoWithStyle.restaurants);

        setListOfResto(allRestaurants || []);
        setFilteredResto(allRestaurants || []);
    };

 const handleSearch = () => {
    const searchItem = listOfResto.filter((item) =>
        item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    console.log('Hotel Search results:', searchItem); // Safe to log here
    setFilteredResto(searchItem);
};

    const handleTopRated = () => {
        const topRated = listOfResto.filter(
            (res) => parseFloat(res.info.avgRatingString) > 4
        );
        setFilteredResto(topRated);
    };

    return listOfResto.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='mainBody'>
            <div className="container">
                <div className="topBox">
                    <div className="search">
                        <input
                            type="text"
                            className="search-box"
                            placeholder="Search restaurants..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="searchbtn" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                    <div className='filter'>
                        <button className="filter-btn" onClick={handleTopRated}>
                            Top Rated Restaurants
                        </button>
                    </div>
                </div>

                <div className='rest-container'>
                    {filteredResto.map((restaurant, index) => (
                        <Link key={`${restaurant.info.id}-${index}`} to={`/resturant/${restaurant.info.id}`}>
                            <ResturantCard restData={restaurant} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
