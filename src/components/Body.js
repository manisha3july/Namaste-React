
import ResturantCard from "./ResturantCard";
import resList from "./utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfResto, setListOfResto] = useState([])
    const [searchText, setSearchText] = useState('')
    const [filerOfResto, setfilerOfResto] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log();
        // Extract restaurants from all cards
        const allRestaurants = json.data.cards
            .filter(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants) // Ensure card has restaurants
            .flatMap(card => card.card.card.gridElements.infoWithStyle.restaurants); // Combine all restaurant lists

        setListOfResto(allRestaurants || []); // Update state with the complete list
        setfilerOfResto(allRestaurants || [])
    }



    return listOfResto.length == 0 ? <Shimmer /> : (
        <div className='mainBody'>
            <div className="topBox">
                <div className="search">
                    <input type="text" className="search-box" placeholder="" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button
                        className="searchbtn"
                        onClick={() => {
                            const searchItem = listOfResto.filter((item) =>
                                item.info.name.toLowerCase().includes(searchText.toLowerCase()) // Case-insensitive search
                            );
                            setListOfResto(searchItem); // Update the list with filtered items
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className='fillter'>
                    <button className="fillter-btn" onClick={() => {

                        const filteredList = listOfResto.filter((res) => (res.info.avgRatingString > 4))

                        setListOfResto(filteredList)
                    }} >Top Rated Resturants</button>
                </div>
            </div>

            <div className='rest-container'>
                {/* <ResturantCard  restData={resList[0]} />
                <ResturantCard  restData={resList[1]} />
                <ResturantCard  restData={resList[2]} />
                <ResturantCard  restData={resList[4]} /> */}
                {
                    filerOfResto.map((resturant) => {
                        return <Link key={resturant.info.id} to ={'/resturant/' + resturant.info.id}> <ResturantCard  restData={resturant} /> </Link>;
                    })
                }

            </div>
        </div>
    )
}

export default Body