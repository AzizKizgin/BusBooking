/** @format */

import React, { FC } from "react";
import { Box, Icon, Pressable, Text } from "native-base";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface PasswordIconProps {
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

const PasswordIcon: FC<PasswordIconProps> = (props) => {
  const { setShowPassword, showPassword } = props;
  return (
    <Pressable onPress={() => setShowPassword(!showPassword)}>
      <Icon
        as={MaterialCommunityIcons}
        name={showPassword ? "eye-off" : "eye"}
        size='lg'
        marginRight='2'
      />
    </Pressable>
  );
};

export default PasswordIcon;
