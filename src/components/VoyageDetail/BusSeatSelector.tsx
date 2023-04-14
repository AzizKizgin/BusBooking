/** @format */

import React from "react";
import { Box, FlatList, HStack, Pressable, Text, VStack } from "native-base";

const BusSeatSelector = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const menSeats = [1, 4, 9, 15, 20];
  const womenSeats = [6, 7, 12, 17];

  return (
    <Box flex={1}>
      <FlatList
        numColumns={4}
        data={data}
        renderItem={({ item }) => (
          <Pressable
            isDisabled={menSeats.includes(item) || womenSeats.includes(item)}
            bg={
              menSeats.includes(item)
                ? "frenchBlue"
                : womenSeats.includes(item)
                ? "pink.500"
                : "blueGray.300"
            }
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
