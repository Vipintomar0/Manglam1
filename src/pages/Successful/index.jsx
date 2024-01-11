import React from "react";

import { Button, Img, Text } from "components";

const SuccessfulPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ubuntu justify-start mx-auto pb-[423px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-blue_gray-100 flex flex-col items-start justify-start p-[11px] w-full">
            <div className="flex flex-row gap-[93px] items-center justify-start mb-0.5 md:ml-[0] ml-[25px] md:px-5 w-[22%] md:w-full">
              <Img
                className="h-[25px] md:h-auto object-cover w-[32%]"
                src="images/img_object.png"
                alt="object"
              />
              <Text
                className="text-[13px] text-blue_gray-700 text-center"
                size="txtUbuntuBold13"
              >
                Go Back
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-end mt-[99px] md:px-10 sm:px-5 px-[171px] w-full">
          <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
            <Img
              className="h-[106px]"
              src="images/img_importedlayers_gray_700.svg"
              alt="importedlayers"
            />
            <Text
              className="mt-10 text-2xl md:text-[22px] text-center text-gray-900_01 sm:text-xl"
              size="txtInterRegular24"
            >
              Congratulations. Your order is accepted.
            </Text>
            <Text
              className="mt-[61px] text-blue_gray-400 text-center text-sm"
              size="txtInterRegular14Bluegray400"
            >
              Let me be clear. Not even close. We did not go by choice, we went
              because of necessity.
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center mt-[161px] md:px-10 sm:px-5 px-[425px] w-full">
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <Button
              className="cursor-pointer leading-[normal] min-w-[140px] rounded-[15px] text-center text-xs"
              color="gray_700"
              size="xs"
              variant="fill"
            >
              Track Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessfulPage;
