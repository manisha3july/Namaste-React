 import { useEffect, useState } from "react";
 import { MENU_API_URL } from "constants";
 




 const useResturantMenu = (restID)=>{

  const [restInfo, setRestInfo] = useState(null);
    
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_API_URL + restID +'&catalog_qa=undefined&submitA');
    const json = await response.json();
    setRestInfo(json.data);
    // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
  };


  

 return restInfo


}

export default useResturantMenu