import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import mestoLogo from "../images/mestologo.svg";
import BurgerMenu from "./BurgerMenu";

function Header(props) {
  const [size, setSize] = useState({});
  const [burger, setBurger] = useState(false);

  const location = useLocation();
  const ref = useRef();

  const put = (
    <Link className="header__link" to="/signin">
      Войти
    </Link>
  );
  const exit = (
    <Link className="header__link" to="/" onClick={props.logout}>
      Выйти
    </Link>
  );
  const register = (
    <Link className="header__link" to="/signup">
      Регистрация
    </Link>
  );

  const emailParagraph = <p className="header__email">{props.email}</p>;
  const btnExit = props.loggedIn && exit;
  const div = document.querySelector(".menu__box");

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const soldCheckbox = ({ target: { checked } }) => {
    if (div) {
      setBurger(checked);
      div.style.display = checked ? "block" : "none";
    } else {
      console.error('Element with class "menu__box" not found.');
    }
  };

  return (
    <>
      {size.clientWidth < 598 ? (
        <div className="menu__box popup_transition" onClick={soldCheckbox}>
          <div
            className="menu__box-container"
            onClick={(evt) => evt.stopPropagation()}
          >
            {emailParagraph}
            {btnExit}
          </div>
        </div>
      ) : null}
      <header className="header" ref={ref}>
        <div className="header__conteiner-phone">
          {location.pathname === "/signup" && put}
          {location.pathname === "/signin" && register}
        </div>
        <div className="header__row">
          <img className="header__logo" src={mestoLogo} alt="Место" />
          <div className="header__row header_block">
            <p className="header__email header__email-right">{props.email}</p>
            {location.pathname === "/signup" && put}
            {location.pathname === "/signin" && register}
            {props.loggedIn && exit}
          </div>
          {props.loggedIn && (
            <BurgerMenu burger={burger} soldCheckbox={soldCheckbox} />
          )}
        </div>
      </header>
    </>
  );
}
export default Header;
