/** @format */

import React from "react";
import AuthenticationNav from "./AuthenticationNav";
import MainNav from "./MainNav";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContex";

const Router = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <MainNav /> : <AuthenticationNav />}
    </NavigationContainer>
  );
};

export default Router;
