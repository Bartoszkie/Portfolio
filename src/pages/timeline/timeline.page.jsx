import React from "react";
import { TimelineContainer } from "./timeline.page.styles";
import Cart from "../../components/cartInfo/cart.component";

const Timeline = () => {
  const rightTrue = true;
  const rightFalse = false;

  return (
    <TimelineContainer>
      <Cart right={rightFalse} />
      <Cart right={rightTrue} />
      <Cart right={rightFalse} />
      <Cart right={rightFalse} />
      <Cart right={rightTrue} />
      <Cart right={rightFalse} />
      <Cart right={rightFalse} />
      <Cart right={rightTrue} />
      <Cart right={rightFalse} />
      <Cart right={rightFalse} />
      <Cart right={rightTrue} />
      <Cart right={rightFalse} />
      <Cart right={rightFalse} />
      <Cart right={rightTrue} />
      <Cart right={rightFalse} />
      <Cart right={rightFalse} />
      <Cart right={rightTrue} />
      <Cart right={rightFalse} />
      <Cart right={rightFalse} />
      <Cart right={rightTrue} />
      <Cart right={rightFalse} />
    </TimelineContainer>
  );
};

export default Timeline;
