import "../index.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div>
          <img
            src="https://marketplace.canva.com/EAGXsRURT9o/1/0/1600w/canva-yellow-and-brown-kitchen-food-logo-JrzZUwc_CLQ.jpg"
            width={"100px"}
          />
        </div>
        <div className="navigation-items">
          <span>Home</span>
          <span>About</span>
          <span>Cart</span>
          <span>Help</span>
        </div>
        <div>
          {" "}
          <button className="login-button">Login</button>{" "}
        </div>
      </div>
    </>
  );
};

export default Header;
