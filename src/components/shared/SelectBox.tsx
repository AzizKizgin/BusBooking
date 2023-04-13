/** @format */

import React, { FC, useState } from "react";
import { Box, Modal, Text, VStack } from "native-base";
import FormInput from "./FormInput";
import { Pressable } from "react-native";

interface SelectBoxProps {
  placeholder: string;
  value: string;
  errors?: string;
  data: string[];
  onSelect: (item: string) => void;
}

const SelectBox: FC<SelectBoxProps> = (props) => {
  const { placeholder, value, errors, data, onSelect } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)}>
        <FormInput
          handleChange={() => {}}
          editable={false}
          placeholder={placeholder}
          value={selectedItem}
          errors={errors}
          selectBox
        />
      </Pressable>
      <Modal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <VStack
          backgroundColor={"white"}
          width='50%'
          space={2}
          paddingY={2}
          borderRadius={10}
        >
          {data.map((item, index) => (
            <Text
              fontSize={18}
              padding={3}
              key={item}
              borderBottomWidth={1}
              borderBottomColor='gray.200'
              onPress={() => {
                onSelect(index.toString());
                setSelectedItem(item);
                setIsModalVisible(false);
              }}
            >
              {item}
            </Text>
          ))}
        </VStack>
      </Modal>
    </>
  );
};

export default SelectBox;
