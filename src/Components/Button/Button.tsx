import AtlasButton from "@atlaskit/button";
import * as React from "react";

interface IProps {
  onClick?: any;
  appearance?: string;
  isDisabled?: boolean;
  html: string;
  shouldFitContainer?: boolean;
  type?: string;
}

const Button: React.SFC<IProps> = ({
  onClick,
  appearance = "default",
  isDisabled,
  html,
  shouldFitContainer = false,
  type = "button"
}) => (
  <AtlasButton
    onClick={onClick}
    appearance={appearance}
    isDisabled={isDisabled}
    shouldFitContainer={shouldFitContainer}
    type={type}
  >
    {html}
  </AtlasButton>
);

export default Button;
