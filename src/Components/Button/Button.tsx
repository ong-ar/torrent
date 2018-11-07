import AtlasButton from "@atlaskit/button";
import * as React from "react";

interface IProps {
  onChange?: any;
  appearance?: string;
  isDisabled?: boolean;
  html: string;
  shouldFitContainer?: boolean;
  type?: string;
}

const Button: React.SFC<IProps> = ({
  onChange,
  appearance = "default",
  isDisabled,
  html,
  shouldFitContainer = false,
  type = "button"
}) => (
  <AtlasButton
    onChange={onChange}
    appearance={appearance}
    isDisabled={isDisabled}
    shouldFitContainer={shouldFitContainer}
    type={type}
  >
    {html}
  </AtlasButton>
);

export default Button;
