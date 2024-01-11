import React from "react";

const sizeClasses = {
  txtInterRegular14Gray90001: "font-inter font-normal",
  txtInterBold16Gray90001: "font-bold font-inter",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtTenorSans13Bluegray40001: "font-normal font-tenorsans",
  txtInterRegular12WhiteA700: "font-inter font-normal italic",
  txtInterRegular11Bluegray300: "font-inter font-normal",
  txtUbuntuBold13: "font-bold font-ubuntu",
  txtUbuntuBold14: "font-bold font-ubuntu",
  txtTenorSans24: "font-normal font-tenorsans",
  txtUbuntuBold12: "font-bold font-ubuntu",
  txtOutfitSemiBold25: "font-outfit font-semibold",
  txtInterLight14: "font-inter font-light",
  txtOutfitLight12: "font-light font-outfit",
  txtInterRegular12Bluegray400: "font-inter font-normal italic",
  txtInterRegular24: "font-inter font-normal",
  txtUbuntuRegular14: "font-normal font-ubuntu",
  txtUbuntuRegular16: "font-normal font-ubuntu",
  txtOutfitRegular13: "font-normal font-outfit",
  txtInterRegular12Gray90001: "font-inter font-normal",
  txtInterBold16: "font-bold font-inter",
  txtUbuntuRegular10: "font-normal font-ubuntu",
  txtTenorSans14: "font-normal font-tenorsans",
  txtTenorSans13: "font-normal font-tenorsans",
  txtUbuntuRegular12: "font-normal font-ubuntu",
  txtRobotoRegular14: "font-normal font-roboto",
  txtUbuntuBold16: "font-bold font-ubuntu",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtTenorSans13Red300: "font-normal font-tenorsans",
  txtInterRegular11: "font-inter font-normal",
  txtInterRegular12Gray400: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular13Gray700: "font-inter font-normal",
  txtInterRegular12Gray700: "font-inter font-normal",
  txtRobotoRegular10Gray60002: "font-normal font-roboto",
  txtRobotoRegular10: "font-normal font-roboto",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
