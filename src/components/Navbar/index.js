import { NavbarStyled } from "./navBarStyles";
import Logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

export function Navbar() {
  return (
    <NavbarStyled>
      <img src={Logo} alt="" />
      <div className="nav-options">
        <ul>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
        </ul>
      </div>
      <div className="cart-icon">
        <img src={cart} alt="cart-image" />
      </div>
    </NavbarStyled>
  );
}
