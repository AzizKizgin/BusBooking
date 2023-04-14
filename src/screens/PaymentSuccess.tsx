/** @format */

import React, { useEffect, useState } from "react";
import { Box, Center, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BackHandler } from "react-native";
import { useLocalization } from "../context/LocalizationContext";
import theme from "../theme/theme";
import Logo from "../components/shared/Logo";

const PaymentSucces = () => {
  const { strings } = useLocalization();
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamsList>>();
  const [time, setTime] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(interval);
      navigation.navigate("Home");
    }
    return () => clearInterval(interval);
  }, [time]);

  return (
    <Box flex={1}>
      <Logo />
      <Center marginTop={5}>
        <Fontisto
          name='bus-ticket'
          size={100}
          color={theme.colors.frenchBlue}
        />
      </Center>
      <Box marginTop={5}>
        <Text
          textAlign={"center"}
          fontSize={20}
          fontWeight={500}
          color={"frenchBlue"}
        >
          {strings.paymentSuccess}
        </Text>
        <Text
          color={"frenchBlue"}
          textAlign={"center"}
          fontSize={20}
          bold
          width={"80%"}
          alignSelf={"center"}
        >
          {strings.thankYouForChoosingUs}
        </Text>
      </Box>
      <Text
        textAlign={"center"}
        fontSize={"8xl"}
        fontWeight={500}
        marginTop={5}
        color={"frenchBlue"}
      >
        {time}
      </Text>
      <Text
        textAlign={"center"}
        fontSize={"lg"}
        fontWeight={500}
        color={"frenchBlue"}
      >
        {strings.redirectingToHome}
      </Text>
    </Box>
  );
};

export default PaymentSucces;
