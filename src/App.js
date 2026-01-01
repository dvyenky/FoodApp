import Header from "./components/Header";
import RestaurantContainer from "./components/RestaurantContainer";
import Search from "./components/Search";

export default function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Search />
        <RestaurantContainer />
      </div>
    </>
  );
}
