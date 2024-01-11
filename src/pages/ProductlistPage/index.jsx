import React from "react";

import { Img, Input, List, Text } from "components";
import ProductListPageButton from "components/ProductListPageButton";
import ProductListPageColor from "components/ProductListPageColor";
import ProductListPageQuantity from "components/ProductListPageQuantity";

const ProductlistPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto p-[25px] sm:px-5 w-full">
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="md:flex-1 h-[25px] sm:h-auto ml-9 md:ml-[0] md:mt-0 mt-[27px] object-cover w-[7%] md:w-full"
            src="images/img_object.png"
            alt="object"
          />
          <Text
            className="bg-blue_gray-100 h-[25px] justify-center md:ml-[0] ml-[51px] md:mt-0 mt-[27px] sm:px-5 px-[35px] text-black-900 text-center text-lg w-[200px]"
            size="txtInterRegular18"
          >
            Manglam
          </Text>
          <Img
            className="md:flex-1 h-[25px] sm:h-auto md:ml-[0] ml-[394px] md:mt-0 mt-[27px] object-cover w-[7%] md:w-full"
            src="images/img_object_25x64.png"
            alt="object_One"
          />
          <Img
            className="md:flex-1 h-[25px] sm:h-auto md:ml-[0] ml-[51px] mr-[38px] md:mt-0 mt-[27px] object-cover w-[7%] md:w-full"
            src="images/img_object_1.png"
            alt="object_Two"
          />
        </header>
        <Input
          name="language"
          placeholder="Search "
          className="font-thin leading-[normal] p-0 placeholder:text-blue_gray-50 text-[13px] text-left w-full"
          wrapClassName="flex mt-10 rounded-[10px] w-[92%]"
          suffix={
            <Img
              className="ml-[35px] my-auto"
              src="images/img_search_icon.svg"
              alt="Search icon"
            />
          }
          color="blue_gray_50"
          size="xs"
          variant="fill"
        ></Input>
        <div className="flex flex-col font-ubuntu items-center justify-start max-w-[922px] mt-[17px] mx-auto pl-[13px] md:px-5 py-[13px] w-full">
          <div className="flex flex-col gap-7 items-center justify-start mb-[13px] mt-[25px] w-full">
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-[96%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_1.svg')" }}
                >
                  <div className="h-[139px] relative w-[94%]">
                    <Img
                      className="h-14 m-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_rectangle6390.png"
                        alt="rectangle6390"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-center text-xs"
                      size="txtUbuntuBold12"
                    >
                      Beauty Parlor
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-700 text-center"
                      size="txtUbuntuRegular10"
                    >
                      start from 100 rs
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] sm:mt-0 mt-[3px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_1.svg')" }}
                >
                  <div className="h-[139px] relative w-[95%]">
                    <Img
                      className="h-14 m-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_rectangle6390.png"
                        alt="rectangle6390"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-center text-xs"
                      size="txtUbuntuBold12"
                    >
                      Beauty Parlor
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-700 text-center"
                      size="txtUbuntuRegular10"
                    >
                      start from 100 rs
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_1.svg')" }}
                >
                  <div className="h-[139px] relative w-[95%]">
                    <Img
                      className="h-14 m-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_rectangle6390.png"
                        alt="rectangle6390"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-center text-xs"
                      size="txtUbuntuBold12"
                    >
                      Beauty Parlor
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-700 text-center"
                      size="txtUbuntuRegular10"
                    >
                      start from 100 rs
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_1.svg')" }}
                >
                  <div className="h-[139px] relative w-[95%]">
                    <Img
                      className="h-14 m-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_rectangle6390.png"
                        alt="rectangle6390"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-center text-xs"
                      size="txtUbuntuBold12"
                    >
                      Beauty Parlor
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-700 text-center"
                      size="txtUbuntuRegular10"
                    >
                      start from 100 rs
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] sm:ml-[0] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_1.svg')" }}
                >
                  <div className="h-[139px] relative w-[95%]">
                    <Img
                      className="h-14 m-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_rectangle6390.png"
                        alt="rectangle6390"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-center text-xs"
                      size="txtUbuntuBold12"
                    >
                      Beauty Parlor
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-700 text-center"
                      size="txtUbuntuRegular10"
                    >
                      start from 100 rs
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-8 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[94%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[94%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_1.svg')" }}
                >
                  <div className="h-[139px] relative w-[94%]">
                    <Img
                      className="h-14 m-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_rectangle6390.png"
                        alt="rectangle6390"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-center text-xs"
                      size="txtUbuntuBold12"
                    >
                      Beauty Parlor
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-700 text-center"
                      size="txtUbuntuRegular10"
                    >
                      start from 100 rs
                    </Text>
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-1 flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_1.svg')" }}
                >
                  <div className="h-[139px] relative w-[95%]">
                    <Img
                      className="h-14 m-auto"
                      src="images/img_icon.svg"
                      alt="icon"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <Img
                        className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                        src="images/img_rectangle6390.png"
                        alt="rectangle6390"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-blue_gray-700 text-center text-xs"
                      size="txtUbuntuBold12"
                    >
                      Beauty Parlor
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-700 text-center"
                      size="txtUbuntuRegular10"
                    >
                      start from 100 rs
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start mt-1.5 w-full">
                <List
                  className="sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-[99%]"
                  orientation="horizontal"
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start mb-2.5 sm:ml-[0] sm:mt-0 mt-0.5 pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[94%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start mb-3 sm:ml-[0] pb-[5px] px-[5px] w-full"
                    style={{ backgroundImage: "url('images/img_1.svg')" }}
                  >
                    <div className="h-[139px] relative w-[95%]">
                      <Img
                        className="h-14 m-auto"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                        <Img
                          className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                          src="images/img_rectangle6390.png"
                          alt="rectangle6390"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtUbuntuBold12"
                      >
                        Beauty Parlor
                      </Text>
                      <Text
                        className="mt-1 text-[10px] text-blue_gray-700 text-center"
                        size="txtUbuntuRegular10"
                      >
                        start from 100 rs
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[9px] sm:ml-[0] sm:mt-0 mt-[3px] w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                      style={{ backgroundImage: "url('images/img_1.svg')" }}
                    >
                      <div className="h-[139px] relative w-[95%]">
                        <Img
                          className="h-14 m-auto"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <Img
                            className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                            src="images/img_rectangle6390.png"
                            alt="rectangle6390"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-blue_gray-700 text-center text-xs"
                          size="txtUbuntuBold12"
                        >
                          Beauty Parlor
                        </Text>
                        <Text
                          className="mt-1 text-[10px] text-blue_gray-700 text-center"
                          size="txtUbuntuRegular10"
                        >
                          start from 100 rs
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-1 sm:ml-[0] sm:mt-0 mt-2 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                      style={{ backgroundImage: "url('images/img_1.svg')" }}
                    >
                      <div className="h-[139px] relative w-[95%]">
                        <Img
                          className="h-14 m-auto"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <Img
                            className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                            src="images/img_rectangle6390.png"
                            alt="rectangle6390"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-blue_gray-700 text-center text-xs"
                          size="txtUbuntuBold12"
                        >
                          Beauty Parlor
                        </Text>
                        <Text
                          className="mt-1 text-[10px] text-blue_gray-700 text-center"
                          size="txtUbuntuRegular10"
                        >
                          start from 100 rs
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:ml-[0] sm:mt-0 mt-3 w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col gap-2 h-[184px] items-center justify-start pb-[5px] px-[5px] w-full"
                      style={{ backgroundImage: "url('images/img_1.svg')" }}
                    >
                      <div className="h-[139px] relative w-[95%]">
                        <Img
                          className="h-14 m-auto"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <Img
                            className="h-[139px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-full"
                            src="images/img_rectangle6390.png"
                            alt="rectangle6390"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-blue_gray-700 text-center text-xs"
                          size="txtUbuntuBold12"
                        >
                          Beauty Parlor
                        </Text>
                        <Text
                          className="mt-1 text-[10px] text-blue_gray-700 text-center"
                          size="txtUbuntuRegular10"
                        >
                          start from 100 rs
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[39px] items-center justify-start rounded-[3px] w-[34%] md:w-full"
                    style={{ backgroundImage: "url('images/img_size.svg')" }}
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-end p-[7px] rounded-[3px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group28.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
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
                      className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-start rounded-[3px] w-full"
                      style={{ backgroundImage: "url('images/img_size.svg')" }}
                    />
                  </div>
                </div>
              </div>
              <ProductListPageButton className="flex flex-col items-center justify-start mt-6 w-[63%] md:w-full" />
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-center mt-9 pr-[7px] py-[7px] w-[52%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_favorite_blue_gray_100_01.svg"
                  alt="favorite_One"
                />
                <Text
                  className="mr-[312px] text-base text-blue_gray-300"
                  size="txtUbuntuRegular16"
                >
                  Add to wishlist
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter items-start max-w-[966px] mb-[63px] mt-[124px] mx-auto md:px-5 px-[77px] w-full">
          <div className="h-[259px] relative w-[94%] md:w-full">
            <div className="bg-blue_gray-100 h-[231px] mx-auto w-full"></div>
            <div className="absolute bg-blue_gray-800 h-[259px] inset-[0] justify-center m-auto w-full">
              <Text
                className="absolute bottom-[2%] inset-x-[0] mx-auto text-center text-white-A700 text-xs w-max"
                size="txtInterRegular12"
              >
                Copyright ©2022 Company | All rights reserved
              </Text>
              <Text
                className="absolute bottom-[8%] inset-x-[0] mx-auto text-center text-white-A700 text-xs w-max"
                size="txtInterRegular12"
              >
                Privacy & Cookies Terms & Conditions Accessibility{" "}
              </Text>
              <div className="absolute bg-blue_gray-100_63 h-[259px] inset-[0] justify-center m-auto w-full">
                <div className="bg-gray-100 flex flex-col h-full items-center justify-start m-auto w-full">
                  <Img
                    className="h-[259px] md:h-auto object-cover"
                    src="images/img_map_red_400.png"
                    alt="map"
                  />
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-[82%]">
                  <Text
                    className="leading-[24.00px] text-center text-sm text-white-A700"
                    size="txtInterRegular14"
                  >
                    <>
                      385 Noah Place Suite 878
                      <br />
                      info@form.com
                      <br />
                      877-255-7945
                    </>
                  </Text>
                  <List
                    className="sm:flex-col flex-row gap-14 grid grid-cols-3 justify-center mt-[37px] w-[55%]"
                    orientation="horizontal"
                  >
                    <div className="h-[19px] relative w-full">
                      <div className="bg-white-A700_33 h-[19px] m-auto outline outline-[0.5px] outline-white-A700 rounded-[38px] w-full"></div>
                      <Img
                        className="absolute h-3.5 inset-[0] justify-center m-auto"
                        src="images/img_map.svg"
                        alt="map"
                      />
                    </div>
                    <div className="h-[19px] relative w-full">
                      <div className="bg-white-A700_33 h-[19px] m-auto outline outline-[0.5px] outline-white-A700 rounded-[38px] w-full"></div>
                      <Img
                        className="absolute h-3.5 inset-[0] justify-center m-auto"
                        src="images/img_settings_white_a700.svg"
                        alt="settings"
                      />
                    </div>
                    <div className="h-[19px] relative w-full">
                      <div className="bg-white-A700_33 h-[19px] m-auto outline outline-[0.5px] outline-white-A700 rounded-[38px] w-full"></div>
                      <Img
                        className="absolute h-3.5 inset-[0] justify-center m-auto"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                    </div>
                  </List>
                  <Img
                    className="h-[29px] mt-6"
                    src="images/img_location.svg"
                    alt="location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductlistPagePage;
