import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { id: "heading" }, "Manisha")
);

const Header = () => {
  return (
    <header>
      <div className="logo">MyLogo</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const restoList = [
  {
    id: 1,
    name: "The Gourmet Spot",
    cuisine: "Italian",
    cost_for_two: 50,
    rating: 4.5,
    delivery_timing: "30-40 mins",
    image_src: "https://via.placeholder.com/300x180?text=The+Gourmet+Spot",
  },
  {
    id: 2,
    name: "Spice Symphony",
    cuisine: "Indian",
    cost_for_two: 40,
    rating: 4.3,
    delivery_timing: "25-35 mins",
    image_src: "https://via.placeholder.com/300x180?text=Spice+Symphony",
  },
  {
    id: 3,
    name: "Sushi World",
    cuisine: "Japanese",
    cost_for_two: 60,
    rating: 4.7,
    delivery_timing: "40-50 mins",
    image_src: "https://via.placeholder.com/300x180?text=Sushi+World",
  },
  {
    id: 4,
    name: "Burger Haven",
    cuisine: "American",
    cost_for_two: 25,
    rating: 4.2,
    delivery_timing: "20-30 mins",
    image_src: "https://via.placeholder.com/300x180?text=Burger+Haven",
  },
  {
    id: 5,
    name: "Le French Bistro",
    cuisine: "French",
    cost_for_two: 70,
    rating: 4.8,
    delivery_timing: "45-55 mins",
    image_src: "https://via.placeholder.com/300x180?text=Le+French+Bistro",
  },
];

const RestoCard = (props) => {
  const { name, cuisine, cost_for_two, rating, delivery_timing, image_src } =
    props.restoData;
  return (
    <div className="card">
      <img src={image_src} alt="Restaurant Image" className="card-image" />
      <div className="card-content">
        <h2 className="restaurant-name">{name}</h2>
        <p className="cuisine">Cuisine: {cuisine}</p>
        <p className="cost-for-two">Cost for Two: $${cost_for_two}</p>
        <p className="rating">Rating: {rating} ⭐</p>
        <p className="delivery-timing">Delivery: ${delivery_timing}</p>
      </div>
    </div>
  );
};


const RestoBody = () => {
    return(
        // <RestoCard restoData={restoList[0]} />/
        <div className="card-container">
            { restoList.map((restaurant)=>{
            return <RestoCard key={restaurant.id} restoData={restaurant} />
        })}
        </div>
       
    )
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <RestoBody />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
