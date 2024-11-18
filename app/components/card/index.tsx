import React from "react";
import { View } from "react-native";
import { CardLine } from "./CardLine";
import { CardRunner } from "./CardRunner";

interface CardProps {
  type?: "line" | "runner" | null; 
  [key: string]: any;
}

export const Card: React.FC<CardProps> = ({ type = null, ...props }) => {
 
  const renderComponent = (): JSX.Element => {
    switch (type) {
      case "line":
        return <CardLine {...props} />;
      case "runner":
        return <CardRunner {...props} />
      default:
        return <View />;
    }
  };

  console.log(renderComponent());

  return renderComponent();
};
