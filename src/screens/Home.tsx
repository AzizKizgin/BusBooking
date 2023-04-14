/** @format */

import React, { useState } from "react";
import { Box, HStack, Text, VStack, Image } from "native-base";
import { useAuth } from "../context/AuthContext";
import CitySelectorGroup from "../components/Home/CitySelectorGroup";
import Button from "../components/shared/Button";
import Bus from "../components/shared/Bus";
import { useLocalization } from "../context/LocalizationContext";
import { CheckBox } from "@aziz_kizgin/react-native-checkbox";
import DateSelectorGroup from "../components/Home/DateSelectorGroup";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useToast } from "@aziz_kizgin/react-native-toast-message";
import theme from "../theme/theme";
import { screen } from "../utils/consts";
const Home = () => {
  const { user, logout } = useAuth();
  const { strings } = useLocalization();
  const navigation = useNavigation<NativeStackNavigationProp<HomeParamsList>>();
  const { showToast } = useToast();
  const [destination, setDestination] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");
  const [hasReturn, setHasReturn] = useState<boolean>(false);

  const navigateToVogages = () => {
    navigation.navigate("Voyages", {
      origin,
      destination,
      departureDate,
      returnDate,
      hasReturn,
    });
  };

  const showToastMessage = () => {
    showToast({
      color: "error",
      message: strings.pleaseFillAllFields,
    });
  };

  const handleSearch = () => {
    if (hasReturn && origin && destination && departureDate && returnDate) {
      navigateToVogages();
    } else if (!hasReturn && origin && destination && departureDate) {
      navigateToVogages();
    } else {
      showToastMessage();
    }
  };

  return (
    <Box flex={1} justifyContent='center'>
      <Bus />
      <Box top={screen.width * 0.15}>
        <HStack space={8} alignSelf={"center"} marginY={5}>
          <HStack space={2} alignSelf={"center"}>
            <CheckBox
              customColor={theme.colors.frenchBlue}
              isChecked={!hasReturn}
              onChange={() => {
                setHasReturn(false);
              }}
            />
            <Text>{strings.departure}</Text>
          </HStack>
          <HStack space={2} alignSelf={"center"}>
            <CheckBox
              customColor={theme.colors.frenchBlue}
              isChecked={hasReturn}
              onChange={() => {
                setHasReturn(true);
              }}
            />
            <Text>{strings.roundTrip}</Text>
          </HStack>
        </HStack>
        <VStack space={3}>
          <CitySelectorGroup
            origin={origin}
            setOrigin={setOrigin}
            destination={destination}
            setDestination={setDestination}
            hasReturn={hasReturn}
          />
          <DateSelectorGroup
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
            returnDate={returnDate}
            setReturnDate={setReturnDate}
            hasReturn={hasReturn}
          />
          <Button onPress={handleSearch} title={strings.search} marginTop={5} />
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
