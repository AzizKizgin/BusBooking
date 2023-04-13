/** @format */

import React from "react";
import { Box, Pressable, Text } from "native-base";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useLocalization } from "../../context/LocalizationContext";

const ForgotPasswordText = () => {
  const { strings } = useLocalization();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationParamsList>>();
  const onPress = () => {
    navigation.navigate("ForgotPassword");
  };
  return (
    <Pressable onPress={onPress}>
      <Text
        color='raspberry'
        fontSize='sm'
        textAlign='right'
        marginTop={3}
        underline={true}
      >
        {strings.forgotPassword}
      </Text>
    </Pressable>
  );
};

export default ForgotPasswordText;
