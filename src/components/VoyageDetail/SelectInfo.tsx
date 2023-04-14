/** @format */

import React, { useState } from "react";
import { Box, HStack, Modal, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme/theme";
import { useLocalization } from "../../context/LocalizationContext";
const SelectInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { strings } = useLocalization();
  return (
    <>
      <HStack space={2} alignItems='center' marginTop={4}>
        <Text fontSize={20} fontWeight='bold' color='frenchBlue'>
          Otobüs Koltuk Seçimi
        </Text>
        <AntDesign
          name='infocirlce'
          size={24}
          color={theme.colors.info[400]}
          onPress={() => {
            setIsModalOpen(true);
          }}
        />
      </HStack>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        _backdrop={{
          _pressed: {
            bg: "transparent",
          },
        }}
      >
        <VStack p={4} bg='white' rounded='md' space={4}>
          <HStack space={2} alignItems='center'>
            <Box bg='frenchBlue' width={4} height={4} rounded='md' />
            <Text fontSize={20} fontWeight='bold' color='frenchBlue'>
              {strings.selectedByAMan}
            </Text>
          </HStack>
          <HStack space={2} alignItems='center'>
            <Box bg='pink.500' width={4} height={4} rounded='md' />
            <Text fontSize={20} fontWeight='bold' color='pink.500'>
              {strings.selectedByAWoman}
            </Text>
          </HStack>
          <HStack space={2} alignItems='center'>
            <Box bg='black' width={4} height={4} rounded='md' />
            <Text fontSize={20} fontWeight='bold' color='black'>
              {strings.notAvailableSeat}
            </Text>
          </HStack>
          <HStack space={2} alignItems='center'>
            <Box bg='blueGray.300' width={4} height={4} rounded='md' />
            <Text fontSize={20} fontWeight='bold' color='blueGray.300'>
              {strings.availableSeat}
            </Text>
          </HStack>
        </VStack>
      </Modal>
    </>
  );
};

export default SelectInfo;
