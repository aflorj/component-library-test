import React from "react";
import CustomTitle from "../components/CustomTitle/CustomTitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CustomTitle",
  component: CustomTitle,
};

export const Default = () => <CustomTitle text={"test"} />;
