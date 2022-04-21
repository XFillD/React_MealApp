import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className="button" onClick={props.onclk}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>{props.text}</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
