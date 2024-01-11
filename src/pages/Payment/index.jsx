import React from "react";

import { Img, Text } from "components";

const PaymentPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter gap-[41px] justify-start mx-auto pb-[451px] w-full">
        <div className="flex flex-col items-center w-full">
          <div className="bg-blue_gray-100 flex flex-col items-start justify-end p-[15px] w-full">
            <Text
              className="ml-8 md:ml-[0] mt-1 text-gray-900_01 text-sm"
              size="txtInterRegular14Gray90001"
            >
              Payment
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end md:px-10 sm:px-5 px-[301px] w-full">
          <div className="flex flex-row items-start justify-end mr-[23px] w-[57%] md:w-full">
            <div className="md:h-14 h-[63px] relative w-[63px]">
              <Img
                className="absolute bottom-[0] h-[7px] inset-x-[0] mx-auto"
                src="images/img_favorite_black_900.svg"
                alt="favorite"
              />
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[59px] inset-x-[0] items-center justify-start mx-auto p-3 top-[0] w-full"
                style={{ backgroundImage: "url('images/img_group15.svg')" }}
              >
                <Img
                  className="h-2.5 md:h-auto my-[11px] object-cover w-[93%]"
                  src="images/img_bitmap.png"
                  alt="bitmap"
                />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start ml-[15px] p-3.5 w-[29%]"
              style={{ backgroundImage: "url('images/img_group15.svg')" }}
            >
              <Img
                className="h-[19px] md:h-auto my-[5px] object-cover w-[98%]"
                src="images/img_bitmap_19x34.png"
                alt="bitmap_One"
              />
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start ml-[15px] p-[19px] w-[29%]"
              style={{ backgroundImage: "url('images/img_group15.svg')" }}
            >
              <Img
                className="h-5 md:h-auto object-cover w-[19px] sm:w-full"
                src="images/img_bitmap_20x19.png"
                alt="bitmap_Two"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[42px] w-[78%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[9px] justify-start w-full">
                <Text
                  className="md:ml-[0] ml-[17px] text-gray-900_01 text-xs"
                  size="txtInterRegular12Gray90001"
                >
                  Cardholder Name{" "}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="bg-gray-700 h-8 rounded-[16px] w-full"></div>
                  <Text
                    className="md:ml-[0] ml-[17px] mt-[21px] text-gray-900_01 text-xs"
                    size="txtInterRegular12Gray90001"
                  >
                    Card Number{" "}
                  </Text>
                  <div className="bg-gray-700 h-8 mt-[9px] rounded-[16px] w-full"></div>
                  <div className="flex flex-row gap-[130px] items-center justify-start ml-2 md:ml-[0] mt-[46px] w-[68%] md:w-full">
                    <Text
                      className="text-gray-900_01 text-xs"
                      size="txtInterRegular12Gray90001"
                    >
                      End Date
                    </Text>
                    <Text
                      className="text-gray-900_01 text-xs"
                      size="txtInterRegular12Gray90001"
                    >
                      CVV
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[9px] w-[96%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[33px] items-end justify-start p-[7px] rounded-[16px] w-[39%]"
                      style={{
                        backgroundImage: "url('images/img_rectangle31.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[35px] items-end justify-between mb-0.5 mr-3.5 w-[65%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtInterRegular12WhiteA700"
                        >
                          mm
                        </Text>
                        <Img
                          className="h-[5px] my-1 w-1.5"
                          src="images/img_importedlayers.svg"
                          alt="importedlayers"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[33px] items-start justify-end p-2 rounded-[16px] w-[39%]"
                      style={{
                        backgroundImage: "url('images/img_rectangle31.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-3 items-center justify-start ml-2.5 md:ml-[0] w-[48%] md:w-full">
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtInterRegular12WhiteA700"
                        >
                          yyyy
                        </Text>
                        <Img
                          className="h-[3px]"
                          src="images/img_importedlayers.svg"
                          alt="importedlayers_One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[9px] items-center justify-end mr-[13px] mt-[91px] w-[62%] md:w-full">
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

export default PaymentPage;
