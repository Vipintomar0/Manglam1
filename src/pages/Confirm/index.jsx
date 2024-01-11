import React from "react";

import { Img, Line, Text } from "components";
import CartImage11 from "components/CartImage11";

const ConfirmPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[72px] justify-start mx-auto pb-[390px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-blue_gray-100 flex flex-col items-start justify-end p-4 w-full">
            <Text
              className="md:ml-[0] ml-[30px] text-gray-900_01 text-sm"
              size="txtInterRegular14Gray90001"
            >
              Confirm Order
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[218px] w-full">
          <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-gray-400 text-xs"
                size="txtInterRegular12Gray400"
              >
                DELIVERY
              </Text>
              <div className="flex flex-row gap-[25px] items-start justify-start mt-[30px] w-[44%] md:w-full">
                <Img
                  className="h-[17px] w-4"
                  src="images/img_television_blue_gray_100_03.svg"
                  alt="television"
                />
                <Text
                  className="mt-[3px] text-gray-900_01 text-xs"
                  size="txtInterRegular12Gray90001"
                >
                  Express Delivery —
                </Text>
              </div>
              <div className="flex flex-row gap-[21px] items-start justify-start mt-[18px] w-full">
                <Img
                  className="h-[18px] mt-[3px]"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="sm:flex-1 leading-[16.00px] text-gray-900_01 text-xs w-[88%] sm:w-full"
                  size="txtInterRegular12Gray90001"
                >
                  Komol KuchkarovChilanzar 26, d. 25, kv. 17, Tashkent, 100 131
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[19px] justify-start mt-[50px] w-[68%] md:w-full">
            <Text
              className="md:ml-[0] ml-[39px] text-gray-400 text-xs"
              size="txtInterRegular12Gray400"
            >
              CART
            </Text>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="h-[69px] relative w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[85%]">
                  <div className="flex flex-row items-start justify-start w-full">
                    <CartImage11 className="h-[60px] relative w-[22%]" />
                    <div className="flex flex-col items-start justify-start ml-4 mt-[3px]">
                      <Text
                        className="leading-[16.00px] ml-0.5 md:ml-[0] text-gray-900_01 text-xs w-[99%] sm:w-full"
                        size="txtInterRegular12Gray90001"
                      >
                        <>Lyle & Scott Men&#39;s Short Sleeve Camo Pocket</>
                      </Text>
                      <Text
                        className="mt-1 text-blue_gray-400 text-xs w-[63%] sm:w-full"
                        size="txtInterRegular12Bluegray400"
                      >
                        XXL • White • 1 pcs{" "}
                      </Text>
                    </div>
                    <Text
                      className="sm:flex-1 ml-[42px] mt-[21px] text-gray-900_01 text-xs w-[7%] sm:w-full"
                      size="txtInterRegular12Gray90001"
                    >
                      $76
                    </Text>
                  </div>
                </div>
                <Line className="absolute bg-gray-200 h-px inset-x-[0] mx-auto top-[13%] w-full" />
              </div>
              <div className="h-20 md:h-[79px] relative w-full">
                <Text
                  className="absolute right-[16%] text-gray-900_01 text-xs top-[0] w-[6%] sm:w-full"
                  size="txtInterRegular12Gray90001"
                >
                  $76
                </Text>
                <Line className="absolute bg-gray-200 h-px inset-x-[0] mx-auto top-[0] w-full" />
                <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between left-[0] my-auto w-[73%]">
                  <div className="bg-white-A700 h-[79px] w-[31%]"></div>
                  <Text
                    className="text-blue_gray-400 text-xs"
                    size="txtInterRegular12Bluegray400"
                  >
                    Total
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-200 h-px w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mr-[105px] mt-[18px] w-[35%] md:w-full">
            <div className="flex flex-col gap-[27px] items-start justify-start w-full">
              <Text
                className="text-gray-400 text-xs"
                size="txtInterRegular12Gray400"
              >
                PAYMENT
              </Text>
              <div className="flex flex-row gap-3.5 items-start justify-start w-full">
                <Img
                  className="h-3"
                  src="images/img_television_blue_gray_100_03_12x16.svg"
                  alt="television_One"
                />
                <Text
                  className="text-gray-900_01 text-xs"
                  size="txtInterRegular12Gray90001"
                >
                  VISA XXXX XXXX XXXX 3734{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[26px] items-center justify-end mr-[42px] mt-[18px] w-[48%] md:w-full">
            <div className="md:h-[30px] h-[38px] relative w-[38%]">
              <div className="absolute border-2 border-gray-700 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-2 rounded-[15px] top-[0] w-full">
                <Img
                  className="h-2.5 mb-1 ml-2.5 md:ml-[0]"
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
              <div className="absolute bg-gray-700 h-[30px] inset-x-[0] mx-auto rounded-[15px] top-[0] w-full"></div>
              <Text
                className="absolute bottom-[0] left-[21%] text-white-A700 text-xs w-1/2 sm:w-full"
                size="txtInterRegular12"
              >
                Confirm order
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmPage;
