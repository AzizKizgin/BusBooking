/** @format */

import React, { FC } from "react";
import { Box, Pressable, Text } from "native-base";
import { Octicons } from "@expo/vector-icons";

interface SwitchButtonProps {
  onPress: () => void;
}

const SwitchButton: FC<SwitchButtonProps> = (props) => {
  const { onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      backgroundColor={"greenAsh"}
      width={10}
      height={10}
      rounded={"full"}
      alignItems={"center"}
      alignSelf={"center"}
      justifyContent={"center"}
    >
      <Octicons
        name='arrow-switch'
        size={24}
        color='black'
        style={{
          alignSelf: "center",
        }}
      />
    </Pressable>
  );
};

export default SwitchButton;
