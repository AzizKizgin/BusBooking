/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "native-base";
import React from "react";
import { useLocalization } from "../context/LocalizationContext";
import { Home, Payment, Settings, VoyageDetail, Voyages } from "../screens";
import theme from "../theme/theme";
import OptionsSheet from "../components/Home/OptionsSheet";

const HomeNav = () => {
  const { strings } = useLocalization();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        animation: "slide_from_right",
        headerStyle: {
          backgroundColor: theme.colors.frenchBlue,
        },
        headerTintColor: theme.colors.coconut,
        headerShadowVisible: false,
        headerRight(props) {
          if (route.name === "Home") {
            return (
              <OptionsSheet goOption={() => navigation.navigate("Settings")} />
            );
          }
          return null;
        },
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
        name='VoyageDetail'
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
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{
          title: strings.settings,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;
