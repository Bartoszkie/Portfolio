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
        <DateTag right={right}>Jan 11 2019</DateTag>
        <InfoTag right={right}>Some description</InfoTag>
        <LinkTag right={right}>Gihub.com</LinkTag>
        <PlatformTag right={right}>YouTube</PlatformTag>
        <Circle right={right}></Circle>
      </CartContainerContent>
    </CartContainer>
  );
};

export default Cart;
