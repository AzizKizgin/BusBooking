/** @format */

import React from "react";
import AuthenticationNav from "./AuthenticationNav";
import MainNav from "./MainNav";
import { NavigationContainer } from "@react-navigation/native";
import { getAuth } from "firebase/auth";

const Router = () => {
  const auth = getAuth();
  return (
    <NavigationContainer>
      {auth ? <MainNav /> : <AuthenticationNav />}
    </NavigationContainer>
  );
};

export default Router;
