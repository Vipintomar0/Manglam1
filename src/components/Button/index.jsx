import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  outline: {
    gray_600_01: "border border-gray-600_01 border-solid text-black-900",
  },
  fill: {
    blue_A400: "bg-blue-A400 text-white-A700",
    gray_700: "bg-gray-700 text-white-A700",
    red_300: "bg-red-300 text-white-A700",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-[13px]", md: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "outline",
  color = "gray_600_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_600_01", "blue_A400", "gray_700", "red_300"]),
};

export { Button };
