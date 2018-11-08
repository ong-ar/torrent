import  AtlasFieldText from "@atlaskit/field-text";
import * as React from "react";

interface IProps {
  label?: string;
  required?: boolean;
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: any;
  onKeyPress?: any;
  isInvalid?: boolean;
  shouldFitContainer?: boolean;
  pattern?: string;
}

const FieldText: React.SFC<IProps> = ({
  label,
  required = false,
  value,
  name,
  placeholder,
  onChange,
  onKeyPress,
  isInvalid = false,
  shouldFitContainer = false,
  pattern
}) => (
  <AtlasFieldText
    label={label}
    required={required}
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    onKeyPress={onKeyPress}
    isInvalid={isInvalid}
    shouldFitContainer={shouldFitContainer}
    pattern={pattern}
  />
);

export default FieldText;
