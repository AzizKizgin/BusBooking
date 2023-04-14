/** @format */

import React, { FC } from "react";
import { Box, Pressable, Text } from "native-base";

interface SelectedSeatProps {
  item: number;
  onPress: (seat: number) => void;
}

const SelectedSeat: FC<SelectedSeatProps> = (props) => {
  const { item, onPress: handleSeatPress } = props;
  return (
    <Pressable
      key={item}
      onPress={() => handleSeatPress(item)}
      bg={"greenAsh"}
      width={10}
      height={10}
      borderRadius={4}
      alignItems='center'
      justifyContent='center'
      marginRight={2}
      marginTop={2}
    >
      <Text color='white' fontSize={12}>
        {item}
      </Text>
    </Pressable>
  );
};

export default SelectedSeat;
