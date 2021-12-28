import React from "react";
import CustomButton from "../components/CustomButton/CustomButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CustomButton",
  component: CustomButton,
};

export const Default = () => <CustomButton label={"test"} />;
