import React from "react";
import CartDemo from "../../components/cartDemo/cart-demo.component";

import {
  RealizationsContainer,
  RealizationsHeader,
  RealizationsContent,
  RealizationsH2,
  RealizationsP
} from "./realizations.styles";

import CrwnSS from "../../assets/IMG/crwn-gif.gif";

const Realizations = () => {
  return (
    <RealizationsContainer>
      <RealizationsHeader>
        <RealizationsH2>My realizations</RealizationsH2>
        <RealizationsP>
          Those are my small projects that I manage to complete. <br></br> Some
          of them were for commercial usage and others for educational purpose
        </RealizationsP>
      </RealizationsHeader>
      <RealizationsContent>
        <CartDemo img={CrwnSS} description="simple web app" />
        <CartDemo img={CrwnSS} description="simple web app" />

        <CartDemo img={CrwnSS} description="simple web app" />

        </RealizationsContent>
    </RealizationsContainer>
  );
};

export default Realizations;
