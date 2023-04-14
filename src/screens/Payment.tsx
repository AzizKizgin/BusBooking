/** @format */

import React, { useState } from "react";
import { Box, HStack, Input, Text, VStack } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import theme from "../theme/theme";
import FormInput from "../components/shared/FormInput";
import { screen } from "../utils/consts";
import { useLocalization } from "../context/LocalizationContext";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import Button from "../components/shared/Button";
import {
  NativeStackHeaderProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { useToast } from "@aziz_kizgin/react-native-toast-message";
import LoadingModal from "../components/Payment/LoadingModal";
const Payment = () => {
  const { strings } = useLocalization();
  const { showToast } = useToast();
  const route = useRoute<RouteProp<HomeParamsList, "Payment">>();
  const voyage = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamsList>>();
  const [expirationDate, setExpirationDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handlePayment = () => {
    if (expirationDate && cvv && cardNumber && cardName) {
      setIsModalOpen(true);
      setTimeout(() => {
        setIsModalOpen(false);
        navigation.navigate("PaymentSuccess");
      }, 500);
    } else {
      showToast({
        color: "error",
        message: strings.pleaseFillAllFields,
      });
    }
  };
  return (
    <Box flex={1} paddingX={4}>
      <HStack
        alignItems={"center"}
        justifyContent={"center"}
        space={4}
        marginY={6}
      >
        <Fontisto name='visa' size={30} color={theme.colors.frenchBlue} />
        <Fontisto name='mastercard' size={30} color={theme.colors.frenchBlue} />
        <Fontisto name='discover' size={30} color={theme.colors.frenchBlue} />
        <Fontisto
          name='american-express'
          size={30}
          color={theme.colors.frenchBlue}
        />
      </HStack>
      <VStack space={4} paddingX={4}>
        <Box>
          <Text fontSize={20} fontWeight={500} textAlign={"center"}>
            {strings.totalPrice}
          </Text>
          <Text
            fontSize={25}
            fontWeight={500}
            textAlign={"center"}
            marginTop={2}
            color={"frenchBlue"}
          >
            {voyage.price * voyage.selectedSeats.length}₺
          </Text>
        </Box>
        <FormInput
          placeholder={strings.nameOnCard}
          value={cardName}
          title='Kart İsmi'
          handleChange={(text) => {
            setCardName(text);
          }}
        />
        <FormInput
          placeholder={strings.cardNumber}
          value={cardNumber}
          title={strings.cardNumber}
          handleChange={(text) => {
            setCardNumber(text);
          }}
        />
        <HStack space={6} alignSelf={"center"}>
          <FormInput
            handleChange={(text) => {
              setExpirationDate(text);
            }}
            placeholder='XX/YY'
            value={expirationDate}
            title={strings.expirationDate}
            width={screen.width / 3}
            maxLength={5}
          />
          <FormInput
            handleChange={(text) => {
              setCvv(text);
            }}
            placeholder={"XXX"}
            value={cvv}
            title={strings.cvv}
            width={screen.width / 3}
            maxLength={3}
          />
        </HStack>
      </VStack>
      <Button onPress={handlePayment} title={strings.pay} marginTop={10} />
      <LoadingModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </Box>
  );
};

export default Payment;
