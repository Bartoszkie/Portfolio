import React from "react";
import {
  CartDemoContainer,
  CartDemoImg,
  CartDemoDescr,
  CartDemoDetails,
  CartDemoDetailsName,
  CartDemoFooter,
  TechNames
} from "./cart-demo.styles";

// import ReactLogo from "../../assets/IMG/react-icon.png";
// import HtmlLogo from "../../assets/IMG/html-icon.png";
// import Csslogo from "../../assets/IMG/sass-icon.png";
// import RwdLogo from "../../assets/IMG/rwd-icon.png";

// import { ImagesArray } from "./imagesObject";

const CartDemo = props => {
  return (
    <CartDemoContainer>
      <CartDemoImg src={props.img} />
      <CartDemoDetails>
        <CartDemoDetailsName>Crwn Clothing</CartDemoDetailsName>
        <CartDemoDescr>{props.description}</CartDemoDescr>
      </CartDemoDetails>
      <CartDemoFooter>
          <TechNames>Tech stack:</TechNames>
          <CartDemoDescr>React</CartDemoDescr>
          <CartDemoDescr>React</CartDemoDescr>
          <CartDemoDescr>React</CartDemoDescr>
      </CartDemoFooter>
    </CartDemoContainer>
  );
};

export default CartDemo;
