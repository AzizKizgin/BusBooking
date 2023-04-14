/** @format */

import React, { useEffect, useState } from "react";
import { Box, ScrollView, VStack } from "native-base";
import { RouteProp, useRoute } from "@react-navigation/native";
import { voyages } from "../utils/consts";
import { ActivityIndicator } from "react-native";
import VoyageItem from "../components/Voyages/VoyageItem";
const Voyages = () => {
  const route = useRoute<RouteProp<HomeParamsList, "Voyages">>();
  const { origin, destination, departureDate, returnDate, hasReturn } =
    route.params;

  const [filteredVoyages, setFilteredVoyages] = useState<VoyageType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      voyages
        .filter((voyage) => voyage.hasReturn === hasReturn)
        .map((voyage) => {
          if (voyage.origin === origin && voyage.destination === destination) {
            setFilteredVoyages((prev) => [...prev, voyage]);
          }
        });
      setLoading(false);
    }, 500);
  }, [origin, destination, departureDate, returnDate, hasReturn]);

  return (
    <Box flex={1}>
      <ScrollView>
        {loading && <ActivityIndicator />}
        <VStack space={4} p={4}>
          {filteredVoyages.map((voyage) => (
            <VoyageItem voyage={voyage} key={voyage.id} />
          ))}
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Voyages;
