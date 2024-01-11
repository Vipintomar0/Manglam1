import React from "react";

import { Img, Text } from "components";

const ProductListPageColor = (props) => {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundImage: "url('images/img_size.svg')" }}
      >
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-end p-[7px] rounded-[3px] w-full"
          style={{ backgroundImage: "url('images/img_group28.svg')" }}
        >
          <div className="flex flex-row items-center justify-between w-full">
            <Text
              className="text-blue_gray-100_01 text-sm"
              size="txtUbuntuRegular14"
            >
              {props?.colortext}
            </Text>
            <div className="bg-blue_gray-800 h-[23px] rounded-[11px] w-[23px]"></div>
            <Img
              className="h-6 rounded-[3px] w-6"
              src="images/img_favorite.svg"
              alt="favorite"
            />
          </div>
        </div>
      </div>
    </>
  );
};

ProductListPageColor.defaultProps = {};

export default ProductListPageColor;
