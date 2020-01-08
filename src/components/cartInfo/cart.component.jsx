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

const Cart = () => {
  return (
    <CartContainer>
      <CartContainerContent>
        <DateTag>Jan 2018</DateTag>
        <PlatformTag>YouTube</PlatformTag>
        <InfoTag>Some random text</InfoTag>
        <LinkTag>Github -></LinkTag>
        <Circle />
      </CartContainerContent>
    </CartContainer>
  );
};

export default Cart;
