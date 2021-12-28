import React from "react";
import "./customTitle.scss";

export interface CustomTitleProps {
  text: string;
}

export default function CustomTitle({ text }: CustomTitleProps) {
  return <h1 className="lib-title">{text}</h1>;
}
