/** @format */

import React, { FC } from "react";
import { Box, Modal, Text } from "native-base";
import { ActivityIndicator } from "react-native";

interface LoadingModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const LoadingModal: FC<LoadingModalProps> = (props) => {
  const { isOpen, setIsOpen } = props;
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Box
        width={100}
        height={100}
        backgroundColor={"white"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ActivityIndicator size={"large"} />
      </Box>
    </Modal>
  );
};

export default LoadingModal;
