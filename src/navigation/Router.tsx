/** @format */

import React, { useEffect, useState } from "react";
import AuthenticationNav from "./AuthenticationNav";
import HomeNav from "./HomeNav";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { ActivityIndicator } from "react-native";
import { Box, Image } from "native-base";

const Router = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [user]);

  if (loading) {
    return (
      <Box flex={1} justifyContent='center' alignItems='center'>
        <Image
          source={require("../assets/images/logo.png")}
          alt='logo'
          resizeMode='contain'
        />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {user ? <HomeNav /> : <AuthenticationNav />}
    </NavigationContainer>
  );
};

export default Router;
