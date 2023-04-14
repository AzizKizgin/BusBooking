/** @format */

import React from "react";
import { Box, Text, Image } from "native-base";
import { screen } from "../../utils/consts";

const Bus = () => {
  return (
    <Box alignSelf='center' position={"absolute"} top={screen.width * 0.1}>
      <Image
        source={require("../../assets/images/icon.png")}
        alt='logo'
        resizeMode='contain'
        width={screen.width * 0.6}
        height={screen.height * 0.2}
      />
    </Box>
  );
};

export default Bus;
