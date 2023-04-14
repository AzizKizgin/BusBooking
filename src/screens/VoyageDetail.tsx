/** @format */

import React from "react";
import { Box, Center, HStack, ScrollView, Text, VStack } from "native-base";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import VoyageItem from "../components/Voyages/VoyageItem";
import BusSeatSelector from "../components/VoyageDetail/BusSeatSelector";
import SelectInfo from "../components/VoyageDetail/SelectInfo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useLocalization } from "../context/LocalizationContext";
import { useToast } from "@aziz_kizgin/react-native-toast-message";

const VoyageDetail = () => {
  const route = useRoute<RouteProp<HomeParamsList, "VoyageDetail">>();
  const voyage = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamsList>>();
  const [selectedSeats, setSelectedSeats] = React.useState<number[]>([]);
  const { strings } = useLocalization();
  const { showToast } = useToast();
  const goPayment = () => {
    if (selectedSeats.length === 0) {
      showToast({
        color: "error",
        message: strings.chooseAtLeast1Seat,
      });
    } else {
      navigation.navigate("Payment", {
        ...voyage,
        selectedSeats,
      });
    }
  };

  return (
    <Box flex={1} p={4}>
      <Box marginY={4}>
        <VoyageItem voyage={voyage} />
      </Box>
      <Box
        flex={"1"}
        backgroundColor={"white"}
        borderRadius={10}
        p={4}
        alignItems='center'
        justifyContent='center'
      >
        <SelectInfo />
        <BusSeatSelector
          totalPrice={selectedSeats.length * voyage.price}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          goPayment={goPayment}
        />
      </Box>
    </Box>
  );
};

export default VoyageDetail;
