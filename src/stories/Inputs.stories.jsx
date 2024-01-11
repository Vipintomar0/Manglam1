import React from "react";

import { Input } from "components";

export default {
  title: "uflextech_s_application4/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "RoundedBorder4",
  variant: "OutlineGray60001",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
