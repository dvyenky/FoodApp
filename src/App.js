import { useContext } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import UserContext from "./utils/UserContext";

export default function App() {
  const { loggedIn } = useContext(UserContext);
  return (
    <>
      <UserContext.Provider value={{ loggedIn }}>
        <div className="mx-[50px]">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  );
}
