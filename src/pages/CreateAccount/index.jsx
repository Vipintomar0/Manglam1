import React from "react";

import { Button, Img, List, Text } from "components";

const CreateAccountPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-tenorsans items-center justify-end mx-auto p-8 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[914px] mb-[9px] mt-[29px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start md:mt-0 mt-[65px]">
            <a
              href="javascript:"
              className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
            >
              <Text size="txtTenorSans24">Create Account</Text>
            </a>
            <div className="h-[46px] md:h-[52px] mt-3.5 relative w-full">
              <Text
                className="absolute bottom-[0] left-[0] text-blue_gray-400_01 text-sm w-[92%] sm:w-full"
                size="txtTenorSans14"
              >
                Enter your information below or continue with social media
                account
              </Text>
              <Img
                className="absolute h-8 right-[0] top-[0] w-8"
                src="images/img_arrowcircle.svg"
                alt="arrowcircle"
              />
            </div>
            <div className="flex flex-col gap-5 items-start justify-start mt-7 w-auto">
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <List
                  className="flex flex-col gap-2 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border border-blue_gray-50_01 border-solid flex flex-row gap-[18px] items-center justify-start px-5 py-[15px] rounded-lg w-[311px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_mail.svg"
                      alt="mail"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-[13px] text-gray-900_02 w-full"
                        size="txtTenorSans13"
                      >
                        Email Address
                      </Text>
                      <Text
                        className="text-[13px] text-blue_gray-400_01 w-full"
                        size="txtTenorSans13Bluegray40001"
                      >
                        Your email address
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-blue_gray-50_01 border-solid flex flex-row gap-[18px] items-center justify-start px-5 py-[15px] rounded-lg w-[311px]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_phone.svg"
                      alt="phone"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-[13px] text-gray-900_02 w-full"
                        size="txtTenorSans13"
                      >
                        Mobile Number
                      </Text>
                      <Text
                        className="text-[13px] text-blue_gray-400_01 w-full"
                        size="txtTenorSans13Bluegray40001"
                      >
                        Your mobile number
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 border border-blue_gray-50_01 border-solid flex flex-row gap-[18px] items-center justify-start px-5 py-[15px] rounded-lg w-[311px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-[13px] text-gray-900_02 w-full"
                      size="txtTenorSans13"
                    >
                      Password
                    </Text>
                    <Text
                      className="text-[13px] text-blue_gray-400_01 w-full"
                      size="txtTenorSans13Bluegray40001"
                    >
                      Create password
                    </Text>
                  </div>
                  <Img className="h-6 w-6" src="images/img_eye.svg" alt="eye" />
                </div>
              </div>
              <Button
                className="cursor-pointer leading-[normal] text-[13px] text-center w-[311px]"
                shape="round"
                color="red_300"
                size="md"
                variant="fill"
              >
                Create Account
              </Button>
            </div>
            <div className="flex flex-col gap-[21px] items-center justify-start mt-[72px] w-auto">
              <div className="flex flex-col items-center justify-center w-[271px]">
                <Text
                  className="text-[13px] text-blue_gray-400_01 text-center w-full"
                  size="txtTenorSans13Bluegray40001"
                >
                  Or Register with Social Accounts
                </Text>
              </div>
              <div className="flex flex-row gap-3 items-start justify-start w-[311px]">
                <div className="bg-white-A700 flex flex-col h-16 md:h-auto items-center justify-center p-5 rounded-lg shadow-bs w-full">
                  <Img
                    className="h-6 w-[23px]"
                    src="images/img_google.svg"
                    alt="google"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col h-16 md:h-auto items-center justify-center p-5 rounded-lg shadow-bs w-full">
                  <Img
                    className="h-6 md:h-auto object-cover w-[23px]"
                    src="images/img_flogorgbblue144.png"
                    alt="flogorgbblue144"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col h-16 md:h-auto items-center justify-center p-5 rounded-lg shadow-bs w-full">
                  <Img
                    className="h-6"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-center p-5 rounded-lg shadow-bs w-full">
                  <Img className="h-6" src="images/img_trash.svg" alt="trash" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-0.5 items-center justify-center mt-5 p-5 w-[311px]">
              <a
                href="javascript:"
                className="text-[13px] text-blue_gray-400_01 w-auto"
              >
                <Text size="txtTenorSans13Bluegray40001">
                  Already have an account?
                </Text>
              </a>
              <a href="javascript:" className="text-[13px] text-red-300 w-auto">
                <Text size="txtTenorSans13Red300">Login Now</Text>
              </a>
            </div>
          </div>
          <Img
            className="h-[918px] md:h-auto object-cover"
            src="images/img_mangalam1.png"
            alt="mangalamOne"
          />
        </div>
      </div>
    </>
  );
};

export default CreateAccountPage;
