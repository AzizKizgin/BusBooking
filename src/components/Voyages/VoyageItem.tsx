/** @format */

import React, { FC } from "react";
import { Box, HStack, Pressable, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";

interface VoyageItemProps {
  voyage: VoyageType;
}

const VoyageItem: FC<VoyageItemProps> = (props) => {
  const { voyage } = props;
  return (
    <Pressable
      key={voyage.id}
      backgroundColor='blueGray.300'
      borderRadius={10}
      width='100%'
      height={voyage.hasReturn ? 200 : 120}
      p={4}
    >
      <HStack justifyContent={"space-between"}>
        <Text color='blueGray.800' fontSize={20}>
          {voyage.company}
        </Text>
        <Text color='blueGray.800' fontSize={20}>
          {voyage.price}₺
        </Text>
      </HStack>
      <Box flex={1} justifyContent={"center"}>
        <HStack justifyContent={"space-between"} marginTop={2}>
          <HStack space={3} alignItems={"center"}>
            <Ionicons
              name='paper-plane'
              size={20}
              color={theme.colors.frenchBlue}
            />
            <Text color='blueGray.800' fontSize={18}>
              {voyage.origin} - {voyage.destination}
            </Text>
          </HStack>
          <Text color='blueGray.800' fontSize={18}>
            {voyage.departureDate}
          </Text>
        </HStack>
        {voyage.hasReturn && (
          <HStack justifyContent={"space-between"} marginY={2}>
            <HStack space={3} alignItems={"center"}>
              <Ionicons
                name='paper-plane'
                size={20}
                color={theme.colors.raspberry}
                style={{ transform: [{ rotate: "-90deg" }] }}
              />
              <Text color='blueGray.800' fontSize={18}>
                {voyage.destination} - {voyage.origin}
              </Text>
            </HStack>
            <Text color='blueGray.800' fontSize={18}>
              {voyage.returnDate}
            </Text>
          </HStack>
        )}
      </Box>
    </Pressable>
  );
};

export default VoyageItem;
