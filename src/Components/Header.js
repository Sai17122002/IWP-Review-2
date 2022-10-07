import { useNavigate } from "react-router";
import "./Header.css";
import HeaderImage from "../billImage.webp";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div class="logo">
        <img src={HeaderImage} alt="Bill Splitter" width="55" height="50" />
        <p>Bill Split</p>
      </div>
      <nav class="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>
      </nav>

      <div class="button">
        <button onClick={() => navigate("/HomeLogin")} class="header-btn">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
