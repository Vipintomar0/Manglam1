import React from "react";

import { Img, Text } from "components";

const ProductListPageQuantity = (props) => {
  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-start rounded-[3px] w-full"
          style={{ backgroundImage: "url('images/img_size.svg')" }}
        >
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-end p-[7px] rounded-[3px] w-full"
            style={{ backgroundImage: "url('images/img_group28.svg')" }}
          >
            <div className="flex flex-row items-center justify-between w-full">
              <Img
                className="h-6 rounded-[3px] w-6"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="text-base text-blue_gray-700 text-center"
                size="txtUbuntuBold16"
              >
                {props?.placeholder}
              </Text>
              <Img
                className="h-6 rounded-[3px] w-6"
                src="images/img_plus.svg"
                alt="plus"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductListPageQuantity.defaultProps = { placeholder: "1" };

export default ProductListPageQuantity;
