import React from "react";

import { Img, Text } from "components";

const SplashScreenPage = () => {
  return (
    <>
      <div className="bg-yellow-600 font-inter h-[1020px] mx-auto p-[45px] md:px-10 sm:px-5 relative w-full">
        <div className="bg-blue_gray-100 flex flex-col h-full items-center justify-end m-auto p-[60px] md:px-5">
          <Text
            className="mt-[3px] text-black-900 text-center text-lg"
            size="txtInterRegular18"
          >
            logo
          </Text>
        </div>
        <Img
          className="absolute h-[918px] inset-[0] justify-center m-auto object-cover w-[47%]"
          src="images/img_mangalam1.png"
          alt="mangalamOne"
        />
      </div>
    </>
  );
};

export default SplashScreenPage;
