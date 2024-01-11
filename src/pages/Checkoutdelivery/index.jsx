import React from "react";

import { Img, Input, Text } from "components";

const CheckoutdeliveryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[21px] justify-start mx-auto pb-[137px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-blue_gray-100 flex flex-col items-start justify-end p-[15px] w-full">
            <Text
              className="ml-8 md:ml-[0] mt-1 text-gray-900_01 text-sm"
              size="txtInterRegular14Gray90001"
            >
              Delivery
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[309px] w-full">
          <div className="flex flex-col items-center justify-start mr-[33px] w-[68%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white-A700 border-2 border-gray-900_01 border-solid flex flex-col items-center justify-start p-4 rounded-[33px] w-full">
                <Text
                  className="mb-[13px] text-base text-gray-900_01"
                  size="txtInterBold16Gray90001"
                >
                  Booking Confirmation
                </Text>
              </div>
              <Img
                className="h-[11px] w-[11px]"
                src="images/img_favorite_black_900.svg"
                alt="favorite"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[9px] justify-start mt-[55px] w-[89%] md:w-full">
            <Text
              className="md:ml-[0] ml-[13px] text-gray-900_01 text-xs"
              size="txtInterRegular12Gray90001"
            >
              First name
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Img
                className="h-8 rounded-bl-[16px] rounded-br-[16px]"
                src="images/img_rectangle31.svg"
                alt="rectangleThirtyOne"
              />
              <Text
                className="ml-3.5 md:ml-[0] mt-[11px] text-gray-900_01 text-xs"
                size="txtInterRegular12Gray90001"
              >
                Last name
              </Text>
              <Input
                name="rectangle31copy"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="flex h-8 mt-[9px] rounded-[16px] w-full"
                color="gray_700"
                variant="fill"
              ></Input>
              <Text
                className="md:ml-[0] ml-[13px] mt-[19px] text-gray-900_01 text-xs"
                size="txtInterRegular12Gray90001"
              >
                Phone number
              </Text>
              <Img
                className="h-8 mt-[9px] rounded-[16px]"
                src="images/img_rectangle31.svg"
                alt="rectangle31copy_One"
              />
              <Text
                className="ml-3 md:ml-[0] mt-4 text-gray-900_01 text-xs"
                size="txtInterRegular12Gray90001"
              >
                E-mail
              </Text>
              <Img
                className="h-8 mt-[9px] rounded-[16px]"
                src="images/img_rectangle31.svg"
                alt="rectangle31copy_Two"
              />
              <Text
                className="md:ml-[0] ml-[13px] mt-[11px] text-gray-900_01 text-xs"
                size="txtInterRegular12Gray90001"
              >
                Country
              </Text>
              <Img
                className="h-8 mt-2"
                src="images/img_rectangle31copy.svg"
                alt="rectangle31copy_Three"
              />
              <Text
                className="ml-3.5 md:ml-[0] mt-[11px] text-gray-900_01 text-xs"
                size="txtInterRegular12Gray90001"
              >
                City
              </Text>
              <Img
                className="h-8 mt-2"
                src="images/img_rectangle31copy.svg"
                alt="rectangle31copy_Four"
              />
              <Text
                className="md:ml-[0] ml-[7px] mt-[11px] text-gray-900_01 text-xs"
                size="txtInterRegular12Gray90001"
              >
                Address
              </Text>
              <div className="bg-gray-700 h-[63px] mt-[9px] rounded-[10px] w-full"></div>
              <Text
                className="md:ml-[0] ml-[7px] mt-[11px] text-gray-900_01 text-xs"
                size="txtInterRegular12Gray90001"
              >
                Zipcode
              </Text>
              <div className="bg-gray-700 h-8 mt-2 rounded-[16px] w-[42%]"></div>
            </div>
          </div>
          <div className="flex flex-row gap-[9px] items-center justify-end mr-[38px] mt-[68px] w-[65%] md:w-full">
            <div className="md:h-[30px] h-[38px] relative w-[44%]">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[30px] inset-x-[0] items-start justify-start mx-auto p-[7px] rounded-[15px] top-[0] w-full"
                style={{ backgroundImage: "url('images/img_group11.svg')" }}
              >
                <Img
                  className="h-2.5 mb-1 md:ml-[0] ml-[11px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <Text
                className="absolute bottom-[0] right-[36%] text-gray-700 text-xs w-[23%] sm:w-full"
                size="txtInterRegular12Gray700"
              >
                Back
              </Text>
            </div>
            <div className="md:h-[30px] h-[38px] relative w-[53%]">
              <div className="absolute bg-gray-700 flex flex-col inset-x-[0] items-end justify-start mx-auto p-[7px] rounded-[15px] top-[0] w-full">
                <Img
                  className="h-2.5 mb-1 mr-3.5"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
              </div>
              <Text
                className="absolute bottom-[0] left-[21%] text-white-A700 text-xs w-[39%] sm:w-full"
                size="txtInterRegular12"
              >
                Next Step
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutdeliveryPage;
