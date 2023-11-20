import React from "react";
import { ButtonLoaderDiv } from "./style";

function ButtonLoader() {
  return (
    <ButtonLoaderDiv>
      <div className='lds-hourglass'></div>
    </ButtonLoaderDiv>
  );
}

export default ButtonLoader;
