import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const status_value = useOnlineStatus();
  const { loggedIn } = useContext(UserContext);
  return (
    <header className="flex items-center justify-between mx-[50px] my-[20px] h-[80px] border-b shadow-xl/20">
      {/* Logo on the left */}
      <div>
        <img src={LOGO_URL} width="100" height={"65px"} alt="logo" />
      </div>

      {/* Navigation in the middle */}
      <nav className="flex items-center gap-[40px]">
        <span className="text-[16px] font-[500]">
          {status_value ? "🟢 Status Online" : "🔴 Status Offline"}
        </span>

        <Link
          to="/"
          className="text-[16px] font-[500] text-[#000000] no-underline hover:text-blue-600"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-[16px] font-[500] text-[#000000] no-underline hover:text-blue-600"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="text-[16px] font-[500] text-[#000000] no-underline hover:text-blue-600"
        >
          Contact
        </Link>

        <Link
          to="/grocery"
          className="text-[16px] font-[500] text-[#000000] no-underline hover:text-blue-600"
        >
          Grocery
        </Link>

        <Link
          to="/help"
          className="text-[16px] font-[500] text-[#000000] no-underline hover:text-blue-600"
        >
          Help
        </Link>
      </nav>

      {/* Login button on the right */}
      <div>
        <button
          className="
            bg-[#007bff] text-[#ffffff] border-0
            px-[20px] py-[10px] text-[16px] rounded-[5px]
            cursor-pointer transition-colors duration-300 ease-in-out
            hover:bg-[#0056b3] active:translate-y-[1px]
          "
          onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
        >
          {loginBtn}
        </button>
        <span className="mx-[15]">{loggedIn}</span>
      </div>
    </header>
  );
};

export default Header;
