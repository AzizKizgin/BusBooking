/** @format */

import React, { useState } from "react";
import { Box, HStack, Modal, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../theme/theme";
const SelectInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <HStack space={2} alignItems='center'>
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
              Selected by man
            </Text>
          </HStack>
          <HStack space={2} alignItems='center'>
            <Box bg='pink.500' width={4} height={4} rounded='md' />
            <Text fontSize={20} fontWeight='bold' color='pink.500'>
              Selected by woman
            </Text>
          </HStack>
          <HStack space={2} alignItems='center'>
            <Box bg='black' width={4} height={4} rounded='md' />
            <Text fontSize={20} fontWeight='bold' color='black'>
              Not available seat
            </Text>
          </HStack>
          <HStack space={2} alignItems='center'>
            <Box bg='blueGray.300' width={4} height={4} rounded='md' />
            <Text fontSize={20} fontWeight='bold' color='blueGray.300'>
              Available seat
            </Text>
          </HStack>
        </VStack>
      </Modal>
    </>
  );
};

export default SelectInfo;
