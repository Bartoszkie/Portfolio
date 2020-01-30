import React, { useState, useEffect } from "react";
import {
  CartDemoContainer,
  CartDemoImg,
  CartDemoDescr,
  CartDemoDetails,
  CartDemoDetailsName,
  CartDemoFooter,
  TechNames,
  TechNamesP,
  CartDemoLinkTo
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
      <CartDemoLinkTo href={props.repo}>
        <CartDemoImg src={props.img} />
      </CartDemoLinkTo>
      <CartDemoDetails>
        <CartDemoDetailsName>{props.title}</CartDemoDetailsName>
        <CartDemoDescr>{props.description}</CartDemoDescr>
      </CartDemoDetails>
      <CartDemoFooter>
        <TechNames>Tech stack:</TechNames>
        {techStack.map((item, index) => (
          <TechNamesP key={index}>{item}</TechNamesP>
        ))}
      </CartDemoFooter>
    </CartDemoContainer>
  );
};

export default CartDemo;
