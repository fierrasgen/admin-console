import React from "react";
import {Wrapper} from "./styles";
import falogo from "../../falogo.png"

export const Header = () => {
    return (
          <Wrapper>
              <img src={falogo} alt="fa-logo"/>
          </Wrapper>
    )
}


