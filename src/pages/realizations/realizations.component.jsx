import React from "react";
import CartDemo from "../../components/cartDemo/cart-demo.component";
import {
  CartDemoText1,
  CartDemoCSSGrid,
  CartDemoECancelary,
  CartDemoFlexBox,
  CartDemoFloats
} from "../.././texts/cart-demo.texts";

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
    <RealizationsContainer id="realizations">
      <RealizationsHeader>
        <RealizationsH2>My realizations</RealizationsH2>
        <RealizationsP>
          Those are my small projects that I manage to complete. <br></br> Some
          of them were for commercial usage and others for educational purpose
        </RealizationsP>
      </RealizationsHeader>
      <RealizationsContent>
        <CartDemo
          img={CrwnSS}
          title="CRWN CLOTHNING"
          description={CartDemoText1}
          tech="React,SASS,Redux,Firebase,StyledComponents"
        />
        <CartDemo
          img={CrwnSS}
          title="Flexbox Project"
          description={CartDemoFlexBox}
          tech="HTML 5,SASS"
        />
        <CartDemo
          img={CrwnSS}
          title="Floats Project"
          description={CartDemoFloats}
          tech="HTML 5,SASS"
        />
        <CartDemo
          img={CrwnSS}
          title="CSS GRID Project"
          description={CartDemoCSSGrid}
          tech="HTML 5,SASS"
        />
        <CartDemo
          img={CrwnSS}
          title="E-Cancelary"
          description={CartDemoECancelary}
          tech="React,SASS,StyledComponents,Firebase,Node.js"
        />
      </RealizationsContent>
    </RealizationsContainer>
  );
};

export default Realizations;
