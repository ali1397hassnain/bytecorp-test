import React, { useState } from "react";
import { HeaderWrapper, NavButton } from "./headerStyles";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
export default function Header() {
  const [display, setDisplay] = useState({});
  return (
    <>
      <NavButton
        onClick={() => setDisplay({ transform: "translate3d(0vw, 0, 0)" })}
      >
        <img src={menu} className="menu" alt="menu" />
      </NavButton>

      <HeaderWrapper style={display}>
        <a href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <div className="headerItems">
          <a className="headerItem" href="#">
            Breakfast
          </a>
          <a className="headerItem" href="#">
            Lunch
          </a>
          <a className="headerItem" href="#">
            Dinner
          </a>
        </div>
        <img src={cart} className="cart" alt="cart" />
        <div
          className="closeButton"
          onClick={() => setDisplay({ transform: "translate3d(-100vw, 0, 0)" })}
        >
          <img src={close} className="close" alt="close" />
        </div>
      </HeaderWrapper>
    </>
  );
}
