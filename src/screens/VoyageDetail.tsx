/** @format */

import React from "react";
import { Box, Center, HStack, ScrollView, Text, VStack } from "native-base";
import { useRoute, RouteProp } from "@react-navigation/native";
import VoyageItem from "../components/Voyages/VoyageItem";
import BusSeatSelector from "../components/VoyageDetail/BusSeatSelector";
import SelectInfo from "../components/VoyageDetail/SelectInfo";

const VoyageDetail = () => {
  const route = useRoute<RouteProp<HomeParamsList, "VoyageDetail">>();
  const voyage = route.params;
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
        <BusSeatSelector />
      </Box>
    </Box>
  );
};

export default VoyageDetail;
