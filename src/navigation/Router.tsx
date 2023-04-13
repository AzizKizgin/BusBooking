/** @format */

import React from "react";
import AuthenticationNav from "./AuthenticationNav";
import MainNav from "./MainNav";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

const Router = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <MainNav /> : <AuthenticationNav />}
    </NavigationContainer>
  );
};

export default Router;
