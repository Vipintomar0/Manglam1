import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import ProfileCustomerBigoutline from "components/ProfileCustomerBigoutline";
import ProfileCustomerStackenterhereTwo from "components/ProfileCustomerStackenterhereTwo";

const ProfileCustomerPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-lime-500 flex sm:flex-col md:flex-col flex-row gap-[54px] items-start justify-end mx-auto sm:px-5 px-[30px] w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start md:px-5 py-16 rounded-[32px] w-[42%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[195px] items-center justify-start mb-[111px] w-full">
            <div className="flex flex-col items-start justify-start w-[88%] md:w-full">
              <div className="flex flex-row font-poppins gap-[90px] items-center justify-start w-[69%] md:w-full">
                <Img
                  className="common-pointer h-6 w-6"
                  src="images/img_arrowleft_black_900.svg"
                  alt="arrowleft"
                  onClick={() => navigate(-1)}
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-[22px] text-black-900 text-center sm:text-lg md:text-xl"
                    size="txtPoppinsSemiBold22"
                  >
                    Edit profile
                  </Text>
                </div>
              </div>
              <ProfileCustomerBigoutline
                className="flex font-roboto h-[50px] md:h-[79px] justify-end mt-[29px] relative w-full"
                gender="shivam kumar"
              />
              <ProfileCustomerBigoutline
                className="flex font-roboto h-[50px] md:h-[74px] justify-end mt-6 relative w-full"
                gender="puerto_rico"
              />
              <ProfileCustomerBigoutline
                className="flex font-roboto h-[50px] md:h-[74px] justify-end mt-6 relative w-full"
                gender="youremail@domain.com"
              />
              <div className="font-roboto h-[124px] mt-6 relative w-full">
                <div className="flex flex-col gap-[38px] justify-start mb-[-44.15px] mx-auto w-full z-[1]">
                  <ProfileCustomerBigoutline
                    className="flex md:h-[45px] h-[50px] justify-end relative w-full"
                    gender="              123-456-7890"
                    genre="                    Phone number"
                  />
                  <Img
                    className="h-[30px] ml-6 md:ml-[0]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                </div>
                <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                  <div className="flex flex-row gap-4 items-center justify-between w-full">
                    <ProfileCustomerStackenterhereTwo className="bg-gray-50 border border-gray-500 border-solid md:h-6 h-[50px] py-0.5 relative rounded-lg w-[48%]" />
                    <ProfileCustomerBigoutline
                      className="flex md:h-[45px] h-[50px] justify-end relative w-[48%]"
                      genre="Genre"
                    />
                  </div>
                </div>
              </div>
              <ProfileCustomerBigoutline
                className="flex font-roboto h-[50px] md:h-[74px] justify-end mt-6 relative w-full"
                gender="45 New Avenue, New York"
              />
              <Button
                className="cursor-pointer font-medium font-roboto leading-[normal] mt-6 text-base text-center uppercase w-[342px]"
                shape="round"
                color="blue_A400"
                variant="fill"
              >
                submit
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-end p-2 w-full">
                <Img
                  className="h-[5px] mt-[13px]"
                  src="images/img_bar.svg"
                  alt="bar"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[918px] md:mt-0 mt-[73px] md:px-5 relative w-1/2 md:w-full">
          <Img
            className="h-[918px] m-auto object-cover w-full"
            src="images/img_mangalam1.png"
            alt="mangalamOne"
          />
          <Img
            className="absolute h-[918px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_mangalam1.png"
            alt="mangalamTwo"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileCustomerPage;
