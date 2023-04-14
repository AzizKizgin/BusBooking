/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useLocalization } from "../context/LocalizationContext";
import { Home, Payment, VoyageDetail, Voyages } from "../screens";
import theme from "../theme/theme";

const HomeNav = () => {
  const { strings } = useLocalization();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        animation: "slide_from_right",
        headerStyle: {
          backgroundColor: theme.colors.frenchBlue,
        },
        headerTintColor: theme.colors.coconut,
        headerShadowVisible: false,
      })}
      initialRouteName='Login'
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Bus Booking",
        }}
      />
      <Stack.Screen
        name='Voyages'
        component={Voyages}
        options={{
          title: strings.voyages,
        }}
      />
      <Stack.Screen
        name='VoyagesDetail'
        component={VoyageDetail}
        options={{
          title: strings.voyageDetail,
        }}
      />
      <Stack.Screen
        name='Payment'
        component={Payment}
        options={{
          title: strings.payment,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;
