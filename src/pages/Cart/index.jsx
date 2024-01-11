import React from "react";

import { Img, Text } from "components";
import CartImage11 from "components/CartImage11";
import CartShape from "components/CartShape";
import ProductListPageColor from "components/ProductListPageColor";
import ProductListPageQuantity from "components/ProductListPageQuantity";

const CartPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-[253px] w-full">
        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
          <div className="flex flex-col gap-2.5 justify-start w-full">
            <div className="bg-blue_gray-100 flex flex-col items-start justify-end p-5 w-full">
              <Text
                className="md:ml-[0] ml-[101px] mt-0.5 text-[13px] text-blue_gray-700 text-center"
                size="txtInterRegular13"
              >
                Shopping cart
              </Text>
            </div>
            <div className="flex flex-row gap-[200px] items-start justify-start md:ml-[0] ml-[18px] md:px-5 w-[35%] md:w-full">
              <Text
                className="text-[13px] text-center text-gray-700"
                size="txtInterRegular13Gray700"
              >
                Subtotal( 1 item)
              </Text>
              <Text
                className="text-center text-gray-700 text-xs"
                size="txtInterRegular12Gray700"
              >
                $42.14
              </Text>
            </div>
          </div>
          <div className="bg-blue_gray-100 flex flex-col justify-start max-w-[971px] mx-auto p-[18px] md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-[16%] md:w-full">
              <div className="bg-blue_gray-100_02 flex flex-col items-center justify-start rounded w-full">
                <div
                  className="bg-cover bg-no-repeat h-[30px] pr-[5px] relative rounded w-full"
                  style={{ backgroundImage: "url('images/img_group25.svg')" }}
                >
                  <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[17%]">
                    <Text
                      className="text-[11px] text-center text-white-A700"
                      size="txtInterRegular11"
                    >
                      Continue Shopping
                    </Text>
                  </div>
                  <Img
                    className="absolute h-[30px] inset-y-[0] left-[0] my-auto object-cover w-[69%]"
                    src="images/img_object.png"
                    alt="object"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-end md:ml-[0] ml-[146px] mr-[157px] mt-[22px] py-3 w-[68%] md:w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[38px] items-start justify-start md:ml-[0] ml-[25px] w-[62%] md:w-full">
                  <div className="h-[156px] relative w-[65%] sm:w-full">
                    <CartImage11 className="absolute h-[156px] inset-[0] justify-center m-auto w-[91%]" />
                    <Img
                      className="absolute h-[153px] inset-[0] justify-center m-auto object-cover rounded-[9px] w-full"
                      src="images/img_image604.png"
                      alt="image604"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-black-900 text-sm"
                      size="txtInterLight14"
                    >
                      Parlor Services
                    </Text>
                    <Text
                      className="mt-6 text-gray-700 text-xs"
                      size="txtInterRegular12Gray700"
                    >
                      Brand: Revolve
                    </Text>
                    <Text
                      className="mt-[47px] text-base text-blue_gray-700"
                      size="txtInterBold16"
                    >
                      100
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-ubuntu md:gap-5 items-center justify-start mt-[43px] w-full">
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-10 items-center justify-start rounded-[3px] w-[34%] md:w-full"
                    style={{ backgroundImage: "url('images/img_size.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-2 rounded-[3px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group28.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-blue_gray-100_01 text-sm"
                          size="txtUbuntuRegular14"
                        >
                          Size:
                        </Text>
                        <Text
                          className="text-blue_gray-800 text-center text-sm"
                          size="txtUbuntuBold14"
                        >
                          S
                        </Text>
                        <Img
                          className="h-6 rounded-[3px] w-6"
                          src="images/img_grid.svg"
                          alt="grid"
                        />
                      </div>
                    </div>
                  </div>
                  <ProductListPageQuantity className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full" />
                  <div className="flex md:flex-1 flex-col items-center justify-start w-[34%] md:w-full">
                    <ProductListPageColor
                      className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start rounded-[3px] w-full"
                      style={{ backgroundImage: "url('images/img_size.svg')" }}
                    />
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-inter sm:gap-10 items-center justify-between md:ml-[0] ml-[77px] mt-[27px] w-[76%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start pr-[7px] py-[7px] w-[44%] sm:w-full">
                    <Img
                      className="h-4 mb-0.5"
                      src="images/img_favorite_blue_gray_100_01.svg"
                      alt="favorite_One"
                    />
                    <Text
                      className="text-[11px] text-blue_gray-300"
                      size="txtInterRegular11Bluegray300"
                    >
                      Add to wishlist
                    </Text>
                  </div>
                  <div className="md:h-6 h-8 pr-1 py-1 relative w-2/5 sm:w-full">
                    <Text
                      className="absolute h-max inset-y-[0] left-[15%] my-auto text-[11px] text-blue_gray-300"
                      size="txtInterRegular11Bluegray300"
                    >
                      Remove Item
                    </Text>
                    <Img
                      className="absolute h-6 inset-y-[0] left-[0] my-auto"
                      src="images/img_close.svg"
                      alt="close"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-ubuntu items-center justify-start md:ml-[0] ml-[373px] mt-[42px] w-[24%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-[13px] text-blue_gray-700 text-right"
                    size="txtUbuntuBold13"
                  >
                    We accept
                  </Text>
                  <Img
                    className="h-[31px] md:h-auto object-cover w-[31px]"
                    src="images/img_mastercardicon.png"
                    alt="mastercardicon"
                  />
                  <Img
                    className="h-[50px] md:h-auto object-cover"
                    src="images/img_visaicon.png"
                    alt="visaicon"
                  />
                </div>
                <Text
                  className="text-[13px] text-blue_gray-700 text-center"
                  size="txtUbuntuBold13"
                >
                  !00% Safe and Secure
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-inter items-center justify-start mb-[42px] md:ml-[0] ml-[341px] mt-[71px] w-[35%] md:w-full">
              <CartShape className="bg-blue_gray-100_02 flex flex-col items-center justify-start w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
