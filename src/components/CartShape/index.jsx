import React from "react";

import { Text } from "components";

const CartShape = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[30px] items-center justify-end p-1.5 w-full"
          style={{ backgroundImage: "url('images/img_group25.svg')" }}
        >
          <div className="flex flex-col items-center justify-start mt-0.5 px-0.5">
            <Text
              className="text-center text-white-A700 text-xs"
              size="txtInterRegular12"
            >
              {props?.text}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

CartShape.defaultProps = {};

export default CartShape;
