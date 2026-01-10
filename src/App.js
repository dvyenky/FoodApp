import Header from "./components/Header";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
