/** @format */

import React from "react";
import { Box, Text } from "native-base";
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  return (
    <Box>
      <Text
        onPress={() => {
          signOut(auth).then(() => {
            console.log("Signed out");
          });
        }}
      >
        Home
      </Text>
    </Box>
  );
};

export default Home;
