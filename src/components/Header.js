import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import "../index.css";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <>
      <div className="header">
        <div>
          <img src={LOGO_URL} width={"100px"} />
        </div>
        <div className="navigation-items">
          <Link to={"/"} className="link-button">
            <span>Home</span>
          </Link>
          <Link to={"/about"} className="link-button">
            <span>About</span>
          </Link>
          <Link to={"contact"} className="link-button">
            <span>Contact Us</span>
          </Link>
          <Link className="link-button">
            <span>Help</span>{" "}
          </Link>
        </div>
        <div>
          {" "}
          <button
            className="login-button"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Header;
