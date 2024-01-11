import React from "react";

import { Img } from "components";

const CartImage11 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="border border-blue_gray-100_01 border-solid h-[156px] rounded-sm w-full"></div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[39px] sm:px-5 w-[90%]"
          style={{ backgroundImage: "url('images/img_group34.svg')" }}
        >
          <Img className="h-14" src="images/img_icon.svg" alt="icon" />
        </div>
      </div>
    </>
  );
};

CartImage11.defaultProps = {};

export default CartImage11;
