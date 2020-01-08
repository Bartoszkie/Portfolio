import React from "react";
import {
  CartContainer,
  CartContainerContent,
  Circle,
  DateTag,
  InfoTag,
  LinkTag,
  PlatformTag
} from "./cart.styles";

const Cart = ({ right }) => {
  console.log(right);

  return (
    <CartContainer right={right}>
      <CartContainerContent right={right}>
        <DateTag>Jan 11 2019</DateTag>
        <InfoTag>Some description</InfoTag>
        <LinkTag>Gihub.com</LinkTag>
        <PlatformTag>YouTube</PlatformTag>
        <Circle right={right}></Circle>
      </CartContainerContent>
    </CartContainer>
  );
};

export default Cart;
