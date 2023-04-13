/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForgotPassword, Login, Register } from "../screens";
import theme from "../theme/theme";
import { useLocalization } from "../context/LocalizationContext";
const AuthenticationNav = () => {
  const Stack = createNativeStackNavigator();
  const { strings } = useLocalization();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === "Login" ? false : true,
        animation: "slide_from_right",
        headerStyle: {
          backgroundColor: theme.colors.frenchBlue,
        },
        headerTintColor: theme.colors.coconut,
        headerShadowVisible: false,
        title:
          (route.name === "Register" && strings.registerScreen) ||
          strings.forgotPasswordScreen,
      })}
      initialRouteName='Login'
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthenticationNav;
