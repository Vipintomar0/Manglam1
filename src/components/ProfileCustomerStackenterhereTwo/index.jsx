import React from "react";

import { Img, Text } from "components";

const ProfileCustomerStackenterhereTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[16%] flex flex-col inset-x-[0] items-center justify-center mx-auto px-4 w-[163px] md:w-full">
          <Text
            className="text-gray-900 text-sm tracking-[0.25px] w-auto"
            size="txtRobotoRegular14"
          >
            {props?.dynamictext}
          </Text>
        </div>
        <div className="absolute flex flex-col items-center justify-start left-[7%] top-[4%] w-auto">
          <div className="flex flex-col items-start justify-start pt-1.5 px-1 w-auto">
            <Text
              className="text-[10px] text-gray-600_02 tracking-[0.25px] w-auto"
              size="txtRobotoRegular10Gray60002"
            >
              {props?.dynamictext1}
            </Text>
          </div>
        </div>
        <Img
          className="absolute h-6 inset-y-[0] my-auto right-[5%] w-6"
          src="images/img_arrowdropdown.svg"
          alt="arrowdropdown"
        />
      </div>
    </>
  );
};

ProfileCustomerStackenterhereTwo.defaultProps = {
  dynamictext: "United States",
  dynamictext1: "Country",
};

export default ProfileCustomerStackenterhereTwo;
