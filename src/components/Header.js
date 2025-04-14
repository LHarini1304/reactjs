import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [buttontype, setButtonType] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="LoginButton"
            onClick={() => {
              buttontype === "Login"
                ? setButtonType("Logout")
                : setButtonType("Login");
              console.log("Login button clicked", buttontype);
            }}
          >
            {buttontype}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
