/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from "../screens";
const AuthenticationNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AuthenticationNav;
