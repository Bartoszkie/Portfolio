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

const Cart = ({ right, description, date, link, platform, platformTitle, bgLink }) => {

  return (
    <CartContainer right={right}>
      <CartContainerContent right={right}>
        <DateTag right={right}>{date}</DateTag>
        <InfoTag right={right}>{description}</InfoTag>
        <LinkTag href={link} right={right} bgColor={bgLink}>{platformTitle}</LinkTag>
        <PlatformTag right={right}>{platform}</PlatformTag>
        <Circle right={right}></Circle>
      </CartContainerContent>
    </CartContainer>
  );
};

export default Cart;
