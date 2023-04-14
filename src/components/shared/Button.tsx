/** @format */

import React, { FC } from "react";
import { Box, Pressable, Text } from "native-base";

interface ButtonProps {
  onPress: () => void;
  title: string;
  marginTop?: number;
}

const Button: FC<ButtonProps> = (props) => {
  const { onPress, title, marginTop } = props;
  return (
    <Pressable
      onPress={onPress}
      marginTop={marginTop}
      bg='frenchBlue'
      shadow={2}
      p={2}
      rounded={10}
      alignSelf='center'
      alignItems='center'
      justifyContent='center'
      width={"1/3"}
    >
      <Text color='coconut' fontSize='md'>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
