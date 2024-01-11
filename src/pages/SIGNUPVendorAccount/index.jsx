import React from "react";

import { Button, Img, Input, Text } from "components";

const SIGNUPVendorAccountPage = () => {
  return (
    <>
      <div className="bg-amber-A200 flex flex-col font-outfit items-center justify-end mx-auto p-[21px] sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[941px] mb-3.5 mt-8 mx-auto md:px-5 w-full">
          <div className="flex flex-col justify-start">
            <Text
              className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
              size="txtOutfitSemiBold25"
            >
              Sign up !
            </Text>
            <Text
              className="mt-[5px] text-[13px] text-black-900"
              size="txtOutfitRegular13"
            >
              Create account by filling the form below .
            </Text>
            <Input
              name="groupTwentyOne"
              placeholder="Enter name"
              className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
              wrapClassName="ml-3.5 md:ml-[0] mt-[25px] w-[95%]"
              type="text"
              shape="round"
              color="gray_600_01"
              size="sm"
              variant="outline"
            ></Input>
            <Input
              name="groupTwentyTwo"
              placeholder="Enter email"
              className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
              wrapClassName="ml-3.5 md:ml-[0] mt-[13px] w-[95%]"
              type="email"
              shape="round"
              color="gray_600_01"
              size="sm"
              variant="outline"
            ></Input>
            <Input
              name="groupTwentyThree"
              placeholder="Enter phone number"
              className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
              wrapClassName="ml-3.5 md:ml-[0] mt-[13px] w-[95%]"
              type="number"
              shape="round"
              color="gray_600_01"
              size="sm"
              variant="outline"
            ></Input>
            <Input
              name="groupTwenty"
              placeholder="Enter D.O.B"
              className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
              wrapClassName="ml-3.5 md:ml-[0] mt-[13px] w-[95%]"
              shape="round"
              color="gray_600_01"
              size="sm"
              variant="outline"
            ></Input>
            <Input
              name="groupNineteen"
              placeholder="Enter pan number"
              className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
              wrapClassName="ml-3.5 md:ml-[0] mt-[13px] w-[95%]"
              type="number"
              shape="round"
              color="gray_600_01"
              size="sm"
              variant="outline"
            ></Input>
            <Input
              name="groupEighteen"
              placeholder="Enter adhaar number"
              className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
              wrapClassName="md:ml-[0] ml-[15px] mt-[13px] w-[95%]"
              type="number"
              shape="round"
              color="gray_600_01"
              size="sm"
              variant="outline"
            ></Input>
            <div className="h-[54px] md:h-[98px] md:ml-[0] ml-[15px] mt-[51px] relative w-[96%]">
              <div className="absolute bg-amber-500 h-[47px] inset-x-[0] mx-auto rounded top-[0] w-[99%]"></div>
              <Button className="absolute bottom-[0] cursor-pointer inset-x-[0] leading-[normal] min-w-[318px] mx-auto rounded text-base text-center">
                Create Account
              </Button>
            </div>
            <Text
              className="md:ml-[0] ml-[49px] mt-[46px] text-black-900 text-xs"
              size="txtOutfitLight12"
            >
              <span className="text-black-900 font-outfit text-left font-light">
                Do you have already have account ?{" "}
              </span>
              <span className="text-black-900 font-outfit text-left font-bold">
                LOGIN
              </span>
            </Text>
          </div>
          <Img
            className="h-[918px] md:h-auto md:mt-0 mt-[13px] object-cover"
            src="images/img_mangalam1.png"
            alt="mangalamOne"
          />
        </div>
      </div>
    </>
  );
};

export default SIGNUPVendorAccountPage;
