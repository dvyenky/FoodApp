// this is created for customHook as we not call any API so we just do as a learning purpose  
const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listRestauants, setListRestaurants] = useState([]);
  const fetchData = async () => {
    const api_data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0845338&lng=72.9104776"
    );
    const result = await api_data.json();
    setListOfRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      )
    );
    setListRestaurants(
      result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      )
    );
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  return listRestauants, listOfRestaurants, setListRestaurants;
};

export default useRestaurantList;


