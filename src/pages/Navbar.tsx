import "../pages/navbar.css";
import logo from "../images/header/logo.svg";
import phone from "../images/header/ico-phone.svg";
import email from "../images/header/ico-email.svg";
import information from "../images/header/information.svg";
import cart from "../images/header/cart.svg";
import { useState } from "react"; // Import useState hook
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // State to manage active language
  const [activeLanguage, setActiveLanguage] = useState("");

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleGoToCreate = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-about">
        <div className="navbar-contact">
          <div className="nav-phone">
            <img src={phone} alt="" />
            <a href="tel:0793 38 000">
              <span>0793 38 000</span>
            </a>
          </div>
          <div className="nav-email">
            <img src={email} alt="" />
            <a href="mailto:info@burgercraft.md">
              <span>info@burgercraft.md</span>
            </a>
          </div>
          <div className="nav-delivery">
            <img src={information} alt="" />
            <span>LIVRARE</span>
          </div>
          <div className="nav-cart" onClick={handleCartClick}>
            <img src={cart} alt="" />
            <span className="cart-quantity">2</span>
          </div>
        </div>
        <div className="navbar-links">
          <a href="#">ACASĂ</a>
          <a href="#">MENIU</a>
          <a href="#" className="link-burg" onClick={handleGoToCreate}>
            CREEAZĂ-ȚI BURGERUL
          </a>
          <a href="#">DESPRE NOI</a>
          <a href="#">BLOG</a>
        </div>
      </div>
      <div className="navbar-lang">
        <div className="social-header">
          <a
            href="https://www.facebook.com/Burgercraftmd/"
            target="_blank"
            className="nav-img-inst"
          ></a>
          <a
            href="https://www.instagram.com/burgercraftmd/"
            target="_blank"
            className="nav-img-face"
          ></a>
        </div>
        <div className="lang-header">
          <button
            className={activeLanguage === "ro" ? "active ro" : "ro"}
            onClick={() => changeLanguage("ro")}
          >
            ro
          </button>
          <button
            className={activeLanguage === "ru" ? "active ru" : "ru"}
            onClick={() => changeLanguage("ru")}
          >
            ru
          </button>
          <button
            className={activeLanguage === "en" ? "active en" : "en"}
            onClick={() => changeLanguage("en")}
          >
            en
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
