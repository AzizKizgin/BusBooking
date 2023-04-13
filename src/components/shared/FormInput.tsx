/** @format */

import React, { FC, memo, useState } from "react";
import { Input, Text, VStack } from "native-base";
import PasswordIcon from "./PasswordIcon";

interface FormInputProps {
  placeholder: string;
  value: string;
  handleChange: (text: string) => void;
  isPassword?: boolean;
  errors?: string;
}

const FormInput: FC<FormInputProps> = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleChange, placeholder, value, isPassword, errors } = props;
  return (
    <VStack>
      <Input
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
