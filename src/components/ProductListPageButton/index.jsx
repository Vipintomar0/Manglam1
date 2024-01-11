import React from "react";

import { Text } from "components";

const ProductListPageButton = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-blue_gray-100_02 flex flex-col items-center justify-start rounded w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[52px] items-center justify-start p-4 rounded w-full"
            style={{ backgroundImage: "url('images/img_group25.svg')" }}
          >
            <div className="flex flex-col items-center justify-start my-[3px] md:px-10 sm:px-5 px-[230px]">
              <Text
                className="text-center text-white-A700 text-xs uppercase"
                size="txtUbuntuRegular12"
              >
                {props?.buttontext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductListPageButton.defaultProps = {};

export default ProductListPageButton;
