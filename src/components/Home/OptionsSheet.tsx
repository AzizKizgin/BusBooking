/** @format */

import React, { FC } from "react";
import {
  Actionsheet,
  Box,
  HStack,
  Pressable,
  Text,
  useDisclose,
} from "native-base";
import { useAuth } from "../../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme/theme";
import { useLocalization } from "../../context/LocalizationContext";

interface AccountMenuButtonProps {
  goOption: () => void;
}

const OptionsSheet: FC<AccountMenuButtonProps> = ({ goOption }) => {
  const { isOpen, onOpen, onClose } = useDisclose();
  const { logout } = useAuth();
  const { strings } = useLocalization();
  return (
    <>
      <Pressable padding={2} onPress={onOpen}>
        <Box>
          <Ionicons
            name='settings-outline'
            size={24}
            color={theme.colors.coconut}
          />
        </Box>
      </Pressable>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        _backdrop={{
          backgroundColor: "rgba(0,0,0,0.0)",
        }}
      >
        <Actionsheet.Content
          backgroundColor={"frenchBlue"}
          padding={0}
          borderTopLeftRadius={15}
          borderTopRightRadius={15}
        >
          <Actionsheet.Item
            onPress={() => {
              onClose();
              goOption();
            }}
            backgroundColor={"frenchBlue"}
          >
            <HStack space={8} alignItems={"center"} paddingX={4}>
              <Ionicons
                name='settings-outline'
                size={24}
                color={theme.colors.coconut}
              />
              <Text color={"coconut"} fontSize={"md"}>
                {strings.settings}
              </Text>
            </HStack>
          </Actionsheet.Item>

          <Actionsheet.Item
            onPress={() => {
              onClose();
              logout();
            }}
            backgroundColor={"frenchBlue"}
          >
            <HStack space={8} alignItems={"center"} paddingX={4}>
              <Ionicons
                name='ios-exit-outline'
                size={24}
                color={theme.colors.coconut}
              />
              <Text color={"coconut"} fontSize={"md"}>
                {strings.logout}
              </Text>
            </HStack>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default OptionsSheet;
