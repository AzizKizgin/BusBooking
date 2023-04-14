/** @format */

import React, { FC, useState } from "react";
import { Box, Input, Modal, Pressable, ScrollView, Text } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { cities, screen } from "../../utils/consts";

interface CitySelectorProps {
  onSelect: (item: string) => void;
  value: string;
  placeholder: string;
}

const CitySelector: FC<CitySelectorProps> = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { onSelect, value, placeholder } = props;
  return (
    <>
      <Pressable alignSelf={"center"} onPress={() => setModalVisible(true)}>
        <Input
          width={screen.width * 0.9}
          placeholder={placeholder}
          value={value}
          editable={false}
          InputRightElement={
            <FontAwesome
              name='angle-down'
              size={24}
              color='black'
              style={{ marginRight: 10 }}
            />
          }
        />
      </Pressable>
      <Modal isOpen={isModalVisible} onClose={() => setModalVisible(false)}>
        <Box
          w={screen.width * 0.7}
          maxHeight={screen.height * 0.6}
          backgroundColor='white'
        >
          <ScrollView>
            {cities.map((city, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  onSelect(city);
                  setModalVisible(false);
                }}
              >
                <Text
                  fontSize={20}
                  color='black'
                  paddingY={2}
                  paddingX={4}
                  borderBottomWidth={1}
                  borderBottomColor='gray.300'
                >
                  {city}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </Box>
      </Modal>
    </>
  );
};

export default CitySelector;
