/** @format */

import React, { Dispatch, FC } from "react";
import { Box, FlatList, HStack, Pressable, Text, VStack } from "native-base";
import { useAuth } from "../../context/AuthContext";
import { Gender, screen } from "../../utils/consts";
import { useToast } from "@aziz_kizgin/react-native-toast-message";
import SelectedSeat from "./SelectedSeat";
import Button from "../shared/Button";
import { useLocalization } from "../../context/LocalizationContext";

interface BusSeatSelectorProps {
  selectedSeats: number[];
  setSelectedSeats: Dispatch<React.SetStateAction<number[]>>;
  totalPrice: number;
  goPayment: () => void;
}

const BusSeatSelector: FC<BusSeatSelectorProps> = (props) => {
  const { selectedSeats, setSelectedSeats, totalPrice, goPayment } = props;
  const { user } = useAuth();
  const { strings } = useLocalization();
  const { showToast } = useToast();
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const menSeats = [15, 20];
  const womenSeats = [6, 7, 12];

  const checkIfNotAvailable = (seat: number) => {
    if (seat % 2 === 0) {
      if (user?.gender === Gender.Man) {
        return womenSeats.includes(seat - 1);
      }
      return menSeats.includes(seat - 1);
    } else {
      if (user?.gender === Gender.Man) {
        return womenSeats.includes(seat + 1);
      }
      return menSeats.includes(seat + 1);
    }
  };

  const handleSeatPress = (seat: number) => {
    if (selectedSeats.length === 5 && !selectedSeats.includes(seat)) {
      showToast({
        color: "error",
        message: strings.canChooseUpTo5Seats,
        duration: 1000,
      });
    } else {
      if (selectedSeats.includes(seat)) {
        setSelectedSeats((prev) => prev.filter((item) => item !== seat));
      } else {
        setSelectedSeats((prev) => [...prev, seat]);
      }
    }
  };

  const getBackgroundColor = (seat: number) => {
    switch (true) {
      case menSeats.includes(seat):
        return "frenchBlue";
      case womenSeats.includes(seat):
        return "pink.500";
      case checkIfNotAvailable(seat):
        return "black";
      case selectedSeats.includes(seat):
        return "greenAsh";
      default:
        return "gray.300";
    }
  };

  return (
    <Box marginTop={4}>
      <FlatList
        ListFooterComponent={
          <Box alignSelf={"center"}>
            <VStack space={2}>
              <Box marginY={6}>
                <Text
                  fontSize={20}
                  fontWeight={500}
                  display={selectedSeats.length > 0 ? "flex" : "none"}
                >
                  <Text color={"frenchBlue"}>{strings.selectedSeats}</Text>
                </Text>
                <HStack>
                  {selectedSeats.length > 0 &&
                    selectedSeats
                      .sort()
                      .map((item) => (
                        <SelectedSeat
                          item={item}
                          onPress={handleSeatPress}
                          key={item}
                        />
                      ))}
                </HStack>
              </Box>
              <Text fontSize={20} fontWeight={500}>
                <Text color={"frenchBlue"}>{strings.totalPrice}</Text>{" "}
                {totalPrice} TL
              </Text>
              <Pressable
                onPress={goPayment}
                backgroundColor={"frenchBlue"}
                paddingX={3}
                paddingY={3}
                borderRadius={6}
              >
                <Text textAlign={"center"} color={"coconut"} fontSize={18}>
                  {strings.goToPayment}
                </Text>
              </Pressable>
            </VStack>
          </Box>
        }
        numColumns={4}
        data={data}
        renderItem={({ item }) => (
          <Pressable
            key={item}
            onPress={() => handleSeatPress(item)}
            isDisabled={
              menSeats.includes(item) ||
              womenSeats.includes(item) ||
              checkIfNotAvailable(item)
            }
            bg={getBackgroundColor(item)}
            width={10}
            height={10}
            borderRadius={4}
            alignItems='center'
            justifyContent='center'
            marginRight={item % 2 === 0 && item % 4 !== 0 ? 16 : 2}
            marginTop={2}
          >
            <Text color='white' fontSize={12}>
              {item}
            </Text>
          </Pressable>
        )}
      />
    </Box>
  );
};

export default BusSeatSelector;
