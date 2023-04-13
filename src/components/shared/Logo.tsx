/** @format */

import React from "react";
import { Box, Image, Text } from "native-base";
import { screen } from "../../utils/consts";

const Logo = () => {
  return (
    <Box position='absolute' top={5} alignSelf='center'>
      <Image
        source={require("../../assets/images/logo.png")}
        alt='logo'
        resizeMode='contain'
        width={screen.width * 0.8}
        height={screen.height * 0.2}
      />
    </Box>
  );
};

export default Logo;
