import { Fragment } from "react";
import "./Header.css";
import mealsImg from "../../assests/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {


  return (
    <Fragment>
      <header className="header">
        <h1>Meal App</h1>
        <HeaderCartButton text="Your Cart" onclk={props.show} />
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="food img" />
      </div>
    </Fragment>
  );
};

export default Header;
