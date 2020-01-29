import React, { useState, useEffect } from "react";
import {
  CartDemoContainer,
  CartDemoImg,
  CartDemoDescr,
  CartDemoDetails,
  CartDemoDetailsName,
  CartDemoFooter,
  TechNames,
  TechNamesP
} from "./cart-demo.styles";

const CartDemo = props => {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    if (props.tech !== undefined) {
      const techStack = props.tech.split(",");
      setTechStack(techStack);
    }
  }, [props.tech]);

  return (
    <CartDemoContainer>
      <CartDemoImg src={props.img} />
      <CartDemoDetails>
        <CartDemoDetailsName>{props.title}</CartDemoDetailsName>
        <CartDemoDescr>{props.description}</CartDemoDescr>
      </CartDemoDetails>
      <CartDemoFooter>
        <TechNames>Tech stack:</TechNames>
        {techStack.map(item => (
          <TechNamesP>{item}</TechNamesP>
        ))}
      </CartDemoFooter>
    </CartDemoContainer>
  );
};

export default CartDemo;
