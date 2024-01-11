import React from "react";

import { Text } from "components";

const ProfileCustomerBigoutline = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bottom-[16%] flex flex-col inset-x-[0] items-center justify-center mx-auto px-4 w-[163px] md:w-full">
          <Text
            className="text-gray-900 text-sm tracking-[0.25px] w-auto"
            size="txtRobotoRegular14"
          >
            {props?.gender}
          </Text>
        </div>
        <div className="absolute border border-gray-500 border-solid flex flex-col h-full inset-[0] items-start justify-center m-auto pb-3 px-3 rounded-lg w-full">
          <div className="flex flex-col items-start justify-start mb-[15px] w-auto">
            <div className="flex flex-col items-start justify-start pt-1.5 px-1 w-auto">
              {!!props?.genre ? (
                <Text
                  className="text-[10px] text-gray-900 tracking-[0.25px] w-auto"
                  size="txtRobotoRegular10"
                >
                  {props?.genre}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProfileCustomerBigoutline.defaultProps = { gender: "Female" };

export default ProfileCustomerBigoutline;
