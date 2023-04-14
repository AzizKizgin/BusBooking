/** @format */

import React, { FC, memo, useState } from "react";
import { Input, Text, VStack } from "native-base";
import PasswordIcon from "./PasswordIcon";
import { FontAwesome } from "@expo/vector-icons";
interface FormInputProps {
  placeholder: string;
  value: string;
  handleChange: (text: string) => void;
  isPassword?: boolean;
  errors?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  editable?: boolean;
  selectBox?: boolean;
  title?: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleChange,
    placeholder,
    value,
    isPassword,
    errors,
    keyboardType = "default",
    editable,
    selectBox,
    title,
  } = props;
  return (
    <VStack>
      {title && (
        <Text color='frenchBlue' marginLeft={1}>
          {title}
        </Text>
      )}
      <Input
        editable={editable}
        keyboardType={keyboardType}
        isInvalid={!!errors}
        placeholder={placeholder}
        secureTextEntry={isPassword ? !showPassword : false}
        value={value}
        onChangeText={handleChange}
        InputRightElement={
          isPassword ? (
            <PasswordIcon
              setShowPassword={setShowPassword || (() => {})}
              showPassword={showPassword || false}
            />
          ) : selectBox ? (
            <FontAwesome
              name='angle-down'
              size={24}
              color='black'
              style={{ marginRight: 10 }}
            />
          ) : undefined
        }
      />
      {errors && (
        <Text color='red.500' marginLeft={1}>
          {errors}
        </Text>
      )}
    </VStack>
  );
};

export default memo(FormInput);
