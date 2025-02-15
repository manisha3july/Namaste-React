 import { useEffect, useState } from "react";
 import { MENU_API_URL } from "./constants";
 




 const useResturantMenu = (restID)=>{

  const [restInfo, setRestInfo] = useState(null);
    
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API_URL + restID);
  
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
  
      const myData = await response.json();
      
      setRestInfo(myData.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
      // Handle error (e.g., show error message, retry logic)
    }
  };
  

  

 return restInfo


}

export default useResturantMenu